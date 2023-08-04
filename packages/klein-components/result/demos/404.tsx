import React from 'react';
import { Result, Button } from '@klein-design/klein-react';

export default () => {
  return (
    <Result
      status="404"
      title="404"
      subTitle="此页面未找到"
      extra={[
        <Button type="primary" key="first" size="large">
          主操作
        </Button>,
      ]}
    />
  );
};
