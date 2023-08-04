/**
 * title: 组件展示
 * desc: 单选框组件。
 */
import React from 'react';
import { Radio, Input } from '@klein-design/klein-react';

const { Group } = Radio;

export default () => {
  const onChange = (e: any) => {
    console.log('onChange', e); // eslint-disable-line no-console
  };
  return (
    <>
      <Radio onChange={onChange}>单选框</Radio>
    </>
  );
};
