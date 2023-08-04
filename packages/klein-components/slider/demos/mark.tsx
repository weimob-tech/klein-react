import React, { Fragment, useState } from 'react';
import { Slider } from '@klein-design/klein-react';
import type { SliderMarks } from '../slider';
export default () => {
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
    <>
      <h4>included=true</h4>
      <Slider marks={marks} defaultValue={47}  />
      <Slider
        range
        marks={marks}
        defaultValue={[26, 47]}
        
      />

      <h4>included=false</h4>
      <Slider
        marks={marks}
        included={false}
        defaultValue={47}
        
      />

      <h4>marks & step</h4>
      <Slider
        marks={marks}
        step={10}
        defaultValue={47}
        
      />

      <h4>step=null</h4>
      <Slider
        marks={marks}
        step={null}
        defaultValue={47}
        
      />
    </>
  );
};
