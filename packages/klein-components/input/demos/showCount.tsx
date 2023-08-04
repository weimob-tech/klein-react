/**
 * title: 展示字数统计
 * desc: 可以通过配置chineseCalc为true开启按照proportion属性计算中文字符长度功能
 */

import React from 'react';
import { Input } from '@klein-design/klein-react';

const { TextArea } = Input;

export default () => {
  // render
  const inputStyle = { marginRight: 15, width: 300 };

  const [val, setVal] = React.useState(null);

  return (
    <>
      <Input
        style={inputStyle}
        onChange={console.log}
        chineseCalc
        placeholder="一个中文为2个字符"
        showCount
        maxLength={20}
        clearable
      />
      <Input style={inputStyle} placeholder="请输入内容" showCount />
      <Input
        style={inputStyle}
        placeholder="请输入内容"
        showCount
        maxLength={20}
      />
      <Input
        style={inputStyle}
        placeholder="请输入内容"
        value="12345678901112"
        showCount
        maxLength={10}
      />

      <Input
        style={inputStyle}
        placeholder="请输入内容"
        showCount={(count: number, max?: number) => `余${max! - count}字`}
        maxLength={20}
      />

      <br />

      <TextArea
        style={inputStyle}
        placeholder="请输入内容"
        showCount
        value={val}
        onChange={(e) => {
          setVal(e.target.value);
        }}
        maxLength={20}
      />
      <TextArea
        style={inputStyle}
        placeholder="请输入内容"
        value="123456789011121314151617181920"
        showCount
        maxLength={20}
      />
    </>
  );
};
