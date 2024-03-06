import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [react()],
  css: {
    modules: {
      generateScopedName: 'summ-[local]-[hash:base64:5]',
      localsConvention: 'dashes',
    },
  },
});
