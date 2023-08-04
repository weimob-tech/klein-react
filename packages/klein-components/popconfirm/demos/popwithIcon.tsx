import React from 'react';
import { Popconfirm, Button, Icon } from '@klein-design/klein-react';
import DemoLayout from '@/components/demo/DemoLayout'

const { WarningFill } = Icon;

export default () => {
  return (
    <DemoLayout layout='2'>
      <Popconfirm
        // title="标题内容"
        content="确定要发货吗？"
        icon={
          <i style={{ color: '#faad14' }}>
            <WarningFill />
          </i>
        }
      >
        <Button>最小宽度+内容图标</Button>
      </Popconfirm>

      <Popconfirm
        content="买家已提交了退款申请，确定要发货吗？"
        icon={
          <i style={{ color: '#faad14' }}>
            <WarningFill />
          </i>
        }
      >
        <Button style={{ marginLeft: 10 }}>最大宽度+内容图标</Button>
      </Popconfirm>

      <Popconfirm
        title="标题内容"
        content="确定要发货吗？"
        icon={
          <i style={{ color: '#faad14' }}>
            <WarningFill />
          </i>
        }
      >
        <Button style={{ marginLeft: 10 }}>最小宽度+标题图标</Button>
      </Popconfirm>

      <Popconfirm
        title="标题内容"
        content="买家已提交了退款申请，买家已提交了退款申请，确定要发货吗？"
        icon={
          <i style={{ color: '#faad14' }}>
            <WarningFill />
          </i>
        }
      >
        <Button style={{ marginLeft: 10 }}>最大宽度+标题图标</Button>
      </Popconfirm>
    </DemoLayout>
  );
};
