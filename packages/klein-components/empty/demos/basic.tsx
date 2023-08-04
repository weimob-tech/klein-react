import React from 'react';
import { Empty, Button } from '@klein-design/klein-react';
import DemoLayout from '@/components/demo/DemoLayout';

export default () => {
  return (
    <DemoLayout layout='2'>
      <Empty size="small" type="goods" />
      
      <Empty size="small">
        <Button>返回</Button>
      </Empty>
    </DemoLayout>
  );
};
