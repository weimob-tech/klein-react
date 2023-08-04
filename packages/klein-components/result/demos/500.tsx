import React from 'react';
import { Result, Button } from '@klein-design/klein-react';

export default () => {
  return (
    <Result
      status="500"
      title="500"
      subTitle="服务器发生了错误"
      extra={[
        <Button type="primary" key="first" size="large">
          主操作
        </Button>,
      ]}
    />
  );
};
