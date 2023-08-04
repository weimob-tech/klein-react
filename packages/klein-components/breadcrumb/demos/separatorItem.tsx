/*
 * title: 分隔符
 * desc: 通过配置Breadcrumb 和Breadcrumb.Item 。
 */
import React from 'react';
import { Breadcrumb } from '@klein-design/klein-react';

export default () => {
  return (
    <Breadcrumb separator="">
      <Breadcrumb.Item>位置</Breadcrumb.Item>
      <Breadcrumb.Separator>:</Breadcrumb.Separator>
      <Breadcrumb.Item>上海</Breadcrumb.Item>
      <Breadcrumb.Separator />
      <Breadcrumb.Item>北京</Breadcrumb.Item>
      <Breadcrumb.Separator />
      <Breadcrumb.Item>深圳</Breadcrumb.Item>
    </Breadcrumb>
  );
};
