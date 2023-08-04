/**
 * title: 状态样式
 * desc: 组件支持三种状态样式：success | error | loading，可通过`state`属性传入。
 */

import React from 'react';
import { Input } from '@klein-design/klein-react';

const inputStyle = { width: 250 };

export default () => (
  <>
    <Input style={inputStyle} placeholder="success" state="success" />

    <br />

    <div>
      <Input
        style={{ ...inputStyle, marginBottom: 8 }}
        placeholder="error"
        state="error"
      />
      <div style={{ color: '#ff4c50', fontSize: 12 }}>
        支持数字，不包含特殊字符
      </div>
    </div>
    <br />

    <Input style={inputStyle} placeholder="loading" state="loading" />

    <br />

    <Input style={{ ...inputStyle, marginBottom: 0 }} placeholder="normal" />
  </>
);
