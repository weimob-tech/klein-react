import React, { useState } from 'react';
import { Slider, Icon } from '@klein-design/klein-react';
// import styles from './demo.less';
export default () => {
  const { ErrorFill, SuccessFill } = Icon;
  interface IconSliderProps {
    max: number;
    min: number;
  }
  const IconSlider: React.FC<IconSliderProps> = (props) => {
    const { min, max } = props;
    const [value, setValue] = useState(0);
    const mid = Number((max - min).toFixed(5));
    return (
      <div className="iconWrapper" style={{ display: 'flex', alignItems: 'center', width: '400px'}}>
        <ErrorFill></ErrorFill>
        <Slider
          {...props}
          onChange={setValue}
          value={value}
          style={{ width: 300, margin: '0 10px' }}
        />
        <SuccessFill></SuccessFill>
      </div>
    );
  };
  return (
    <>
      <IconSlider min={0} max={20}></IconSlider>
    </>
  );
};
