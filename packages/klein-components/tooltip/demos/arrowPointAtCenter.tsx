import React from 'react';
import { Tooltip, Button } from '@klein-design/klein-react';
import DemoLayout from '@/components/demo/DemoLayout'

export default () => (
  <DemoLayout layout='2'>
    <Tooltip placement="topLeft" title="tooltip info">
      <Button>箭头指向左边</Button>
    </Tooltip>
    <Tooltip placement="topLeft" title="tooltip info" arrowPointAtCenter>
      <Button>设置箭头指向中心</Button>
    </Tooltip>
  </DemoLayout>
);
