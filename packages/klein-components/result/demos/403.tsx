import React from 'react';
import { Result, Button } from '@klein-design/klein-react';

export default () => {
  return (
    <Result
      status="403"
      title="403"
      subTitle="你没有此页面的访问权限"
      extra={[
        <Button type="primary" key="first" size="large">
          主操作
        </Button>,
      ]}
    />
  );
};
