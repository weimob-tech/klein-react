import React from 'react';
import { Result, Button } from '@klein-design/klein-react';

export default () => {
  return (
    <Result
      status="warning"
      title="遇到一些问题"
      extra={[
        <Button type="primary" key="first" size="large">
          主操作
        </Button>,
      ]}
    />
  );
};
