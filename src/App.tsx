import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { App as AntApp, Layout, theme } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { FoursquarePage } from './pages';
import styles from './App.module.css';

const { Header } = Layout;

function Root() {
  const { token } = theme.useToken();

  return (
    <Layout className={styles.layout}>
      <Header className={styles.header} style={{ backgroundColor: token.colorBgContainer }} />
      <Content>
        <FoursquarePage />
      </Content>
    </Layout>
  );
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
  },
]);

function App() {
  return (
    <AntApp>
      <RouterProvider router={router} />
    </AntApp>
  );
}

export default App;
