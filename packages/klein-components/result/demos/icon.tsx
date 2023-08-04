import React from 'react';
import { Result, Icon, Button } from '@klein-design/klein-react';

// 临时的 icon，等原型出来后替换
const { HomeLine } = Icon;

export default () => {
  return (
    <Result
      title="自定义 ICON 说明"
      icon={<HomeLine />}
      extra={[
        <Button type="primary" key="first" size="large">
          主操作
        </Button>,
      ]}
    />
  );
};
