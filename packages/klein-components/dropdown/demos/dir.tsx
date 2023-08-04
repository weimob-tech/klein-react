/*
 * title: 弹出位置
 * desc: 支持多个位置弹出 。
 */

import React from 'react';
import { Dropdown, Button, Menu } from '@klein-design/klein-react'
import DemoLayout from '@/components/demo/DemoLayout';

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
    <DemoLayout layout='2'>
      <Dropdown overlay={menu} placement="topLeft">
        <Button>TopLeft</Button>
      </Dropdown>
      <Dropdown overlay={menu} placement="topCenter">
        <Button>Top</Button>
      </Dropdown>
      <Dropdown overlay={menu} placement="topRight">
        <Button>TopRight</Button>
      </Dropdown>
      <Dropdown overlay={menu} placement="bottomLeft">
        <Button>BottomLeft</Button>
      </Dropdown>
      <Dropdown overlay={menu} placement="bottomCenter">
        <Button>BottomCenter</Button>
      </Dropdown>
      <Dropdown overlay={menu} placement="bottomRight">
        <Button>BottomRight</Button>
      </Dropdown>
    </DemoLayout>
  );
};
