/*
 * title: 下划线
 * desc: 图标和下划线的组合 。
 */

import React from 'react';
import { Dropdown, Menu, Icon } from '@klein-design/klein-react'
import DemoLayout from '@/components/demo/DemoLayout';;

const { QuestionFill } = Icon;
export default () => {
  const menu = (
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer">
          修改基础信息
        </a>
      </Menu.Item>
      <Menu.Item style={{ borderBottom: '1px solid #eae9e9' }}>
        <a target="_blank" rel="noopener noreferrer">
          同步收银
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer">
          修改权限
        </a>
      </Menu.Item>
      <Menu.Item disabled>删除</Menu.Item>
    </Menu>
  );
  return (
    <div className="demo">
      <div style={{ marginBottom: 10, whiteSpace: 'nowrap' }}>
        <Dropdown overlay={menu} placement="bottomRight" trigger={['click']}>
          <QuestionFill style={{ color: '#006aff' }} />
        </Dropdown>
      </div>
    </div>
  );
};
