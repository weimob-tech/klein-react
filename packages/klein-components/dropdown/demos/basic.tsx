/*
 * title: 基本使用
 * desc: 点击显示 。
 */
import React from 'react';
import { Dropdown, Icon, Menu } from '@klein-design/klein-react'
import DemoLayout from '@/components/demo/DemoLayout';;

const { DownLine } = Icon;
export default () => {
  const menu = (
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer">
          修改基础信息
        </a>
      </Menu.Item>
      <Menu.Item>
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
    <div>
      <Dropdown overlay={menu} placement="bottomLeft">
        <a onClick={(e) => e.preventDefault()}>
          <span style={{ color: '#006aff' }}>鼠标点击 </span>
          <DownLine style={{ color: '#006aff' }} />
        </a>
      </Dropdown>
    </div>
  );
};
