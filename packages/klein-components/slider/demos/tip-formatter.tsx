import React from 'react';
import { Slider } from '@klein-design/klein-react';
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default () => {
  const formatter = (value: null | ((value?: number) => React.ReactNode)) =>
    `${value}`;
  return (
    <>
      <Slider tooltip={{ formatter }} style={{ width: 300 }} />
      <Slider tooltip={{ formatter: null }} style={{ width: 300 }} />
    </>
  );
};
