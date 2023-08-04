import React, { Fragment, useState } from 'react';
import { Slider } from '@klein-design/klein-react';
// import styles from './demo.less';
export default () => {
  const onChange = (value: number | [number, number]) => {
    console.log('onChange: ', value);
  };

  const onAfterChange = (value: number | [number, number]) => {
    console.log('onAfterChange: ', value);
  };
  return (
    <div style={{ width: '300px'}}>
      <Slider
        defaultValue={30}
        onChange={onChange}
        onAfterChange={onAfterChange}
      />
      <Slider
        range
        step={10}
        defaultValue={[20, 50]}
        onChange={onChange}
        onAfterChange={onAfterChange}
      />
    </div>
  );
};
