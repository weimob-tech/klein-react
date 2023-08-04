import React, { Fragment, useState } from 'react';
import { Slider } from '@klein-design/klein-react';
import type { SliderMarks } from '../slider';
import DemoLayout from '@/components/demo/DemoLayout';
// import styles from './demo.less';
export default () => {
  const style: React.CSSProperties = {
    display: 'inline-block',
    height: 300,
    marginLeft: 70,
  };

  const marks: SliderMarks = {
    0: '0°C',
    26: '26°C',
    47: '47°C',
    100: {
      style: {
        color: '#f50',
      },
      label: <strong>100°C</strong>,
    },
  };
  return (
    <DemoLayout layout='2'>
      <div style={style}>
        <Slider vertical defaultValue={30} />
      </div>
      <div style={style}>
        <Slider vertical range step={10} defaultValue={[20, 50]} />
      </div>
      <div style={style}>
        <Slider vertical range marks={marks} defaultValue={[26, 47]} />
      </div>
    </DemoLayout>
  );
};
