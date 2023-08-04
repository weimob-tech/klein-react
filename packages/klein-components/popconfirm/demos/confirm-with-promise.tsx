import React, { useState } from 'react';
import { Popconfirm, Button, ConfigProvider } from '@klein-design/klein-react';

export default () => {
  return (
    <div>
      <Popconfirm
        title="标题内容"
        content="买家已提交了退款申请，确定要发货吗？"
        onConfirm={() =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve(1);
            }, 3000);
          })
        }
      >
        <Button>popconfirm</Button>
      </Popconfirm>
    </div>
  );
};
