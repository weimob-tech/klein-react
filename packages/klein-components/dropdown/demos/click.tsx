/*
 * title: 触发方式
 * desc: 默认是点击触发菜单。
 */
import React from 'react';
import { Dropdown, Icon, Menu } from '@klein-design/klein-react'
import DemoLayout from '@/components/demo/DemoLayout';;

const { DownLine } = Icon;
const sty = {
  color: '#006aff',
  textDecoration: 'none',
  fontWeight: '400',
};
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
export default () => {
  return (
    <div>
      <Dropdown overlay={menu} placement="bottomLeft" trigger={['hover']}>
        <a
          style={sty as React.CSSProperties}
          onClick={(e) => e.preventDefault()}
        >
          <span>移入 </span>
          <DownLine />
        </a>
      </Dropdown>
    </div>
  );
};
