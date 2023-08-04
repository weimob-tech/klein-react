import React from 'react';
import { Result, Button } from '@klein-design/klein-react';

export default () => {
  return (
    <Result
      status="success"
      title="你的行动已经执行了"
      subTitle="这是一句描述文本这是一句描述文本这是一句描述文本"
      extra={[
        <Button type="primary" key="first" size="large">
          主操作
        </Button>,
        <Button key="second" size="large">
          次要操作
        </Button>,
      ]}
    />
  );
};
