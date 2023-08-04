/*
 * title: 带有图标的
 * desc: 图标放在文字前面。
 */
import React from 'react';
import { Breadcrumb, Icon } from '@klein-design/klein-react';

const { HomeLine } = Icon;

export default () => {
  return (
    <Breadcrumb>
      <Breadcrumb.Item>
        <HomeLine style={{ marginRight: '4px' }} />
        一级页面
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <HomeLine />
        首页
      </Breadcrumb.Item>
      <Breadcrumb.Item href="">
        <HomeLine />
        商品
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <HomeLine />
        微盟
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <HomeLine />
        大学
      </Breadcrumb.Item>
    </Breadcrumb>
  );
};
