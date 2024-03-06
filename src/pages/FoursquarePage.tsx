import { Button, Result } from 'antd';
import { PageContainer } from '../layouts';

export default function FoursquarePage() {
  return (
    <PageContainer>
      <Result
        status="403"
        title="Foursquare Page"
        subTitle="Please create new account or login with existing one"
        extra={[
          <Button type="primary" key="console">
            Sign Up
          </Button>,
          <Button key="buy">Sign In</Button>,
        ]}
      />
    </PageContainer>
  );
}
