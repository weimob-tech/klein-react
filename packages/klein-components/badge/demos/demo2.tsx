/*
 * title: 独立使用
 * desc: 独立进行展示。
 */
import React from 'react';
import { Badge } from '@klein-design/klein-react';
import DemoLayout from '@/components/demo/DemoLayout'
import './index.less';

export default () => {
  const hasDot = true;
  return (
    <DemoLayout layout='2'>
      <div className='d'>
        <Badge dot={hasDot} />
      </div>
      <div className='d'>
        <Badge count="5" />
      </div>
      <div className='d'>
        <Badge count="55" />
      </div>
      <div className='d'>
        <Badge count="55+" />
      </div>
    </DemoLayout>
  );
};
