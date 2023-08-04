import React, { Fragment, useState } from 'react';
import { Slider, Switch } from '@klein-design/klein-react';
// import styles from './demo.less';
export default () => {
  const [reverse, setReverse] = useState(true);
  return (
    <div style={{width: '300px'}}>
      <Slider defaultValue={30} reverse={reverse} />
      <Slider range defaultValue={[20, 50]} reverse={reverse} />
      Reversed: <Switch size="small" checked={reverse} onChange={setReverse} />
    </div>
  );
};
