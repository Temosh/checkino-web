# Step 1: Build project
FROM node:21-alpine as builder
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn set version stable
#RUN yarn workspaces focus --all --production
RUN yarn install

COPY . .
CMD ["yarn", "build"]

# Step 2: Set up the production environment (Caddy)
FROM caddy:2.7.6-alpine

COPY Caddyfile /etc/caddy/Caddyfile
COPY --from=builder /app/dist /srv

EXPOSE 8080
