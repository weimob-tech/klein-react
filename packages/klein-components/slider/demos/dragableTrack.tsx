import React from 'react';
import { Slider } from '@klein-design/klein-react';
// import styles from './demo.less';
export default () => {
  return (
    <div style={{ width: '300px'}} >
      <Slider range={{ draggableTrack: true }} defaultValue={[20, 50]} />
    </div>
  );
};
