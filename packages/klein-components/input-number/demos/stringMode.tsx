import React from 'react';
import { InputNumber } from '@klein-design/klein-react';
import DemoLayout from '@/components/demo/DemoLayout'

export default () => {
  const onChange = (value: string | number) => {
    console.log('changed', value);
  };
  return (
    <DemoLayout layout='1'>
      <InputNumber
        defaultValue="1"
        min="0"
        max="10"
        step="0.00000000000001"
        onChange={onChange}
        stringMode
      />
    </DemoLayout>
  );
};
