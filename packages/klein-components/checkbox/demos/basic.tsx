/**
 * title: 基本用法
 * desc: 简单的 checkbox
 */
import React from 'react';
import { Checkbox } from '@klein-design/klein-react';

export default () => {
  const onChange = (e: any) => {
    console.log(`checked = ${e.target.checked}`);
  };
  return (
    <div>
      <Checkbox className="nihao" onChange={onChange}>
        <div>Checkbox</div>
      </Checkbox>
      {/* <Checkbox></Checkbox> */}
    </div>
  );
};
