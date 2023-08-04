/*
 * title: 基本使用
 * desc: 传递一个 count 节点；进行展示。
 */
import React from 'react';
import { Badge } from '@klein-design/klein-react';
import DemoLayout from '@/components/demo/DemoLayout'
import './index.less';

const hasDot = true;

export default () => {
  return (
    <DemoLayout layout='2'>
      <div className='d'>
        <Badge dot={hasDot}>
          <span className='e' />
        </Badge>
      </div>
      <div className='d'>
        <Badge count="9">
          <span className='e' />
        </Badge>
      </div>
      <div className='d'>
        <Badge count="99">
          <span className='e' />
        </Badge>
      </div>
      <div className='d'>
        <Badge count="99+">
          <span className='e' />
        </Badge>
      </div>
    </DemoLayout>
  );
};
