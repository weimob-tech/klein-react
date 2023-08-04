import React from 'react';
import { InputNumber } from '@klein-design/klein-react';
import DemoLayout from '@/components/demo/DemoLayout'

export default () => {
  const onChange = (value: any) => {
    console.log('changed', value);
  };
  return (
    <div style={{display: 'flex'}}>
      <DemoLayout layout='1'>
        <InputNumber
          style={{ marginRight: '48px' }}
          defaultValue={1000}
          formatter={(value) =>
            `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
          }
          parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
          onChange={onChange}
        />
      </DemoLayout>
      <DemoLayout layout='1'>
        <InputNumber
          defaultValue={100}
          min={0}
          max={100}
          formatter={(value) => `${value}%`}
          parser={(value) => value.replace('%', '')}
          onChange={onChange}
        />
      </DemoLayout>
    </div>
  );
};
