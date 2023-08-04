/*
 * title: 基本演示
 * desc: 通过配置Breadcrumb 和 separator。
 */
import React from 'react';
import { Breadcrumb } from '@klein-design/klein-react';

export default () => {
  return (
    <Breadcrumb separator={'>'}>
      <Breadcrumb.Item>首页</Breadcrumb.Item>
      <Breadcrumb.Item href="">商品</Breadcrumb.Item>
      <Breadcrumb.Item> 微盟</Breadcrumb.Item>
      <Breadcrumb.Item>大学</Breadcrumb.Item>
    </Breadcrumb>
  );
};
