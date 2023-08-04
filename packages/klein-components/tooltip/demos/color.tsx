import React from 'react';
import { Tooltip, Button } from '@klein-design/klein-react';
import DemoLayout from '@/components/demo/DemoLayout'

export default () => (
  <DemoLayout layout='2'>
    <Tooltip white title="tooltip info">
      <Button>#ffffff</Button>
    </Tooltip>
    <Tooltip title="tooltip info" color="#006aff">
      <Button>#006aff</Button>
    </Tooltip>
    <Tooltip title="tooltip info" color="#faad14" placement="rightTop">
      <Button>#faad14</Button>
    </Tooltip>
  </DemoLayout>
);
