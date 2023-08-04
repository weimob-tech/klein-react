/*
 * title: 基本演示
 * desc: 通过配置Breadcrumb 和Breadcrumb.Item 。
 */

import React from 'react';
import { Breadcrumb } from '@klein-design/klein-react';

export default () => {
  return (
    <Breadcrumb>
      <Breadcrumb.Item>首页</Breadcrumb.Item>
      <Breadcrumb.Item>商品</Breadcrumb.Item>
    </Breadcrumb>
  );
};
