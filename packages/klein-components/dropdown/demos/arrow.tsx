/*
 * title: 箭头
 * desc: 可展示一个箭头 。
 */

import React from 'react';
import { Dropdown, Button, Menu } from '@klein-design/klein-react'
import DemoLayout from '@/components/demo/DemoLayout';;

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
    <div className="demo">
      <div style={{ marginBottom: 10, whiteSpace: 'nowrap' }}>
        <Dropdown overlay={menu} placement="topLeft" arrow>
          <Button style={{ marginRight: 10 }}>topLeft</Button>
        </Dropdown>
        <Dropdown overlay={menu} placement="topCenter" arrow>
          <Button style={{ marginRight: 10 }}>topCenter</Button>
        </Dropdown>
        <Dropdown overlay={menu} placement="topRight" arrow>
          <Button>topRight</Button>
        </Dropdown>
      </div>
      <div style={{ marginBottom: 10, clear: 'both', whiteSpace: 'nowrap' }}>
        <Dropdown overlay={menu} placement="bottomLeft" arrow>
          <Button style={{ marginRight: 10 }}>bottomLeft</Button>
        </Dropdown>
        <Dropdown overlay={menu} placement="bottomCenter" arrow>
          <Button style={{ marginRight: 10 }}>bottomCenter</Button>
        </Dropdown>
        <Dropdown overlay={menu} placement="bottomRight" arrow>
          <Button>bottomRight</Button>
        </Dropdown>
      </div>
    </div>
  );
};
