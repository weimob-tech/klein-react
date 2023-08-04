/**
 * title: 加载状态。
 * desc: 通过loading属性控制开关是否处于加载状态。
 */

import React from 'react';
import { Switch } from '@klein-design/klein-react';
import DemoLayout from '@/components/demo/DemoLayout'

export default () => (
  <DemoLayout layout='2'>
    <Switch loading />
    <Switch style={{ marginLeft: 10 }} checked loading />
  </DemoLayout>
);
