/**
 * title: 三种尺寸
 * desc: 组件支持三种尺寸：large | medium | small，可通过`size`属性传入。
 */

import React from 'react';
import { Input } from '@klein-design/klein-react';

export default () => (
  <>
    <Input
      style={{ marginRight: 15 }}
      placeholder="large"
      size="large"
      wSize='m'
    />

    <Input
      style={{ marginRight: 15 }}
      placeholder="medium (default)"
      size="medium"
      wSize='m'
    />

    <Input placeholder="small" size="small" wSize='m' />
  </>
);
