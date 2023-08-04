/**
 * title: 前缀和后缀元素
 * desc: 通过设置`prefix`和`suffix`可在输入框上添加前缀或后缀图标等元素。
 */

import React from 'react';
import { Input, Tooltip } from '@klein-design/klein-react';

export default () => {
  // render
  const inputStyle = { marginRight: 15, width: 250 };
  const iconStyle = {
    cursor: 'default',
    color: 'white',
    background: '#b6b7bf',
    display: 'block',
    textAlign: 'center',
    width: 16,
    height: 16,
    lineHeight: '16px',
    borderRadius: '50%',
    fontSize: 12,
  };

  return (
    <>
      <Input style={inputStyle} placeholder="带前缀元素" prefix="$" />

      <Input style={inputStyle} placeholder="带后缀元素" suffix="元" />

      <Input
        style={inputStyle}
        placeholder="带后缀提示"
        suffix={
          <Tooltip title="这是个提示信息">
            <i style={iconStyle as any}>i</i>
          </Tooltip>
        }
      />

      <Input
        style={inputStyle}
        placeholder="同时带前缀和后缀"
        prefix="-"
        suffix="厘米"
      />
    </>
  );
};
