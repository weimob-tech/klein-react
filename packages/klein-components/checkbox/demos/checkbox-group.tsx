/**
 * title: 不同方向的checkbox
 * desc: 横向与纵向排列的checkbox
 */
import React from 'react';
import { Checkbox } from '@klein-design/klein-react';

const CheckboxGroup = Checkbox.Group;

export default () => {
  const onChange = (e: any) => {
    console.log(`checked = ${e.target.checked}`);
  };
  return (
    <>
      <div>
        <p>横向排列</p>
        <CheckboxGroup style={{margin: '12px 0 0 0' }}>
          <Checkbox onChange={onChange}>Checkbox1</Checkbox>
          <Checkbox onChange={onChange}>Checkbox2</Checkbox>
          <Checkbox onChange={onChange}>Checkbox2</Checkbox>
        </CheckboxGroup>
      </div>
      <div>
        <p>纵向排列</p>
        <CheckboxGroup direction="vertical" style={{margin: '12px 0 0 0' }}>
          <Checkbox onChange={onChange}>Checkbox1</Checkbox>
          <Checkbox onChange={onChange}>Checkbox2</Checkbox>
          <Checkbox onChange={onChange}>Checkbox2</Checkbox>
        </CheckboxGroup>
      </div>
    </>
  );
};
