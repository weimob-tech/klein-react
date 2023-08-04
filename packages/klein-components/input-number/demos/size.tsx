import React from 'react';
import { InputNumber } from '@klein-design/klein-react';
import DemoLayout from '@/components/demo/DemoLayout'

export default () => {
  return (
    <DemoLayout layout='2'>
      <InputNumber
        placeholder="large"
        min={1}
        max={100000}
        size="large"
      />

      <InputNumber
        autoFocus
        placeholder="medium (default)"
        min={1}
        max={100000}
        size="medium"
      />

      <InputNumber
        placeholder="small"
        size="small"
        min={1}
        max={100000}
      />
    </DemoLayout>
  );
};
