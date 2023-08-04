/**
 * title: 三种大小
 * desc: size 为 "small" 表示小号开关, "large" 表示大号开关。
 */

import React from 'react';
import { Switch } from '@klein-design/klein-react';
import DemoLayout from '@/components/demo/DemoLayout'

export default () => (
  <DemoLayout layout='2'>
    <Switch size="large" />
    <Switch />
    <Switch size="small" />
  </DemoLayout>
);
