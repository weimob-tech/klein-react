import React from 'react';
import { Result, Button } from '@klein-design/klein-react';

export default () => {
  return (
    <Result
      status="info"
      title="你的行动已经执行了"
      extra={[
        <Button type="primary" key="first" size="large">
          主操作
        </Button>,
      ]}
    />
  );
};
