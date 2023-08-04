/**
 * title: 不可用
 * desc: Radio 不可用。
 */
import React from 'react';
import { Radio } from '@klein-design/klein-react';

export default () => {
  return (
    <div style={{display: 'flex'}}>
      <Radio defaultChecked={false} disabled style={{ marginRight: '48px' }}>
        未选失效
      </Radio>
      <Radio defaultChecked disabled >
        选中失效
      </Radio>
    </div>
  );
};
