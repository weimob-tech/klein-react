import React, { useState } from 'react';
import { Popconfirm, Button, ConfigProvider } from '@klein-design/klein-react';

export default () => {
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = React.useState(false);

  return (
    <div>
      <Popconfirm
        visible={visible}
        title="标题内容"
        content="买家已提交了退款申请，确定要发货吗？"
        onCancel={() => setVisible(false)}
        onConfirm={() => {
          setConfirmLoading(true);
          setTimeout(() => {
            setVisible(false);
            setConfirmLoading(false);
          }, 3000);
        }}
        okButtonProps={{
          type: 'primary',
          loading: confirmLoading,
        }}
      >
        <Button onClick={() => setVisible(true)}>popconfirm</Button>
      </Popconfirm>
    </div>
  );
};
