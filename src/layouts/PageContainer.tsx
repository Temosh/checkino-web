import React from 'react';
import {Card, Col, Row} from 'antd';
import styles from './PageContainer.module.css';

export default function PageContainer(props: PageContainerProps) {
  const { children } = props;

  return (
    <Row className={styles.pageContainer}>
      <Col span={18} offset={3}>
        <Card style={{ width: '100%' }}>
          {children}
        </Card>
      </Col>
    </Row>
  );
}

type PageContainerProps = {
  children: React.ReactNode;
};
