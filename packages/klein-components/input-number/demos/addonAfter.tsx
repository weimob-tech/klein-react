import React from 'react';
import { InputNumber } from '@klein-design/klein-react';

export default () => {
  return (
    <>
    <InputNumber
      addonBefore="前置"
      style={{
        width: 200,
        marginRight: '48px'
      }}
    />
    <InputNumber
      addonAfter="后置"
      style={{
        width: 200,
      }}
    />
    </>
  );
};
