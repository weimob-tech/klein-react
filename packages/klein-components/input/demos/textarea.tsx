/**
 * title: 文本域
 * desc: 通过导入`TextArea`组件来使用。
 */

import React from 'react';
import { Input } from '@klein-design/klein-react';

const { TextArea } = Input;

export default () => {
  // state
  const [value, setValue] = React.useState(null);
  const [value2, setValue2] = React.useState(null);

  // render
  const areaStyle = { width: 350, height: 100 };
  const myRef = React.useRef();
  return (
    <>
      <TextArea
        style={areaStyle}
        placeholder="请输入内容"
        value={value}
        showCount
        maxLength={100}
        onChange={(evt: any, len: number) => {
          console.log(len);
          setValue(evt.target.value);
        }}
      />

      <TextArea
        style={areaStyle}
        placeholder="一个中文为2个字符"
        chineseCalc
        value={value2}
        showCount
        maxLength={100}
        onChange={(evt: any, len: number) => {
          console.log(len);
          setValue2(evt.target.value);
        }}
      />

      <TextArea style={areaStyle} placeholder="无统计输入框" />
    </>
  );
};
