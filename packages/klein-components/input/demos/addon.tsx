/**
 * title: 复合型输入框
 * desc: 通过设置`addonBefore`和`addonAfter`可在输入框上添加前置或后置复合元素。
 */

import React from 'react';
import { Input, Button } from '@klein-design/klein-react';

export default () => {
  // render
  const inputStyle = { width: 352 };

  return (
    <>
      <Input
        style={inputStyle}
        placeholder="前置复合元素"
        addonBefore="http://"
      />
      <Input
        style={inputStyle}
        placeholder="后置复合元素"
        addonAfter="元"
      />
      <Input
        style={inputStyle}
        placeholder="前后置复合元素"
        addonBefore="http://"
        addonAfter=".com"
      />
    </>
  );
};
