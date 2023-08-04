/**
 * title: 回调函数
 * desc: 可添加`onChange`回调函数。
 */

/* eslint-disable no-console */
import React from 'react';
import { Switch } from '@klein-design/klein-react';

export default () => (
  <div>
    <Switch onChange={(checked: any) => console.log(`onChage ${checked}`)} />
  </div>
);
