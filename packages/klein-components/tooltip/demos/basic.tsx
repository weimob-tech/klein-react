import React from 'react';
import { Tooltip, Button, Switch, Checkbox } from '@klein-design/klein-react';
import DemoLayout from '@/components/demo/DemoLayout'

export default () => (
  <DemoLayout layout='2'>
    <Tooltip
      overlayStyle={{
        color: 'red',
      }}
      title="tooltip info"
    >
      <Button>鼠标移入显示提示信息</Button>
    </Tooltip>
  </DemoLayout>
);
