/**
 * title: 定义文案和方向
 * desc: 文案的方向
 */
import React from 'react';
import { Spin } from '@klein-design/klein-react';

export default () => {
  return (
    <>
      <Spin tip="加载中" direction="col" size="large" />
      <br />
      <Spin tip="加载中......" direction="row" size="large" />
    </>
  );
};
