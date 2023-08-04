import React from 'react';
import { InputNumber } from '@klein-design/klein-react';
import DemoLayout from '@/components/demo/DemoLayout'

export default () => {
  return (
    <DemoLayout layout='2'>
      <InputNumber  />
      <InputNumber
        placeholder="readOnly"
        readOnly
        defaultValue={5}
        
      />
      <InputNumber defaultValue={5} disabled  />
      <InputNumber
        defaultValue={5}
        precision={2}
        bordered={false}
        
        controls={false}
      />
    </DemoLayout>
  );
};
