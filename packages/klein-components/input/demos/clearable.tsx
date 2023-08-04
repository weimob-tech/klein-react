/**
 * title: 一键清空
 * desc: 设置`clearable`可在输入框上添加清空按钮。
 */

import React from 'react';
import { Input } from '@klein-design/klein-react';

export default () => {
  // render
  const inputStyle = { marginRight: 15, width: 250 };

  return (
    <>
      <Input
        style={inputStyle}
        defaultValue="一键清空"
        placeholder="请输入"
        clearable
      />

      <Input style={inputStyle} placeholder="请输入" clearable />
    </>
  );
};
