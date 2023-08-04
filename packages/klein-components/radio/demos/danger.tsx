/**
 * title: 基本用法
 * desc: 简单使用，在多个选项中单选一个。
 */
import React from 'react';
import { Radio } from '@klein-design/klein-react';

export default () => {
  return (
    <div>
      <Radio.Group defaultValue="a">
        <Radio value="a">A</Radio>
        <Radio value="b">B</Radio>
        <Radio value="c">C</Radio>
        <Radio value="d">D</Radio>
      </Radio.Group>
    </div>
  );
};
