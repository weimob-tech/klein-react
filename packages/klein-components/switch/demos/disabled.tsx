/**
 * title: 禁用状态
 * desc: 通过`disabled`设置禁用状态。
 */

import React from 'react';
import { Switch } from '@klein-design/klein-react';
import DemoLayout from '@/components/demo/DemoLayout'

export default () => (
  <DemoLayout layout='2'>
    <Switch disabled />
    <Switch loading />
    <Switch checked disabled />
  </DemoLayout>
);
