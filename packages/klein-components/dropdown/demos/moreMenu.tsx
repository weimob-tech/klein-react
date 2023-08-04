/*
 * title: 多级菜单
 * desc: 传入的菜单里有多个层级 。
 */
import React from 'react';
import { Dropdown, Icon, Menu } from '@klein-design/klein-react'
import DemoLayout from '@/components/demo/DemoLayout';;

const { DownLine } = Icon;
const { SubMenu } = Menu;

export default () => {
  function handleClick() {}
  const menu = (
    <Menu onClick={handleClick} mode="vertical">
      <SubMenu key="sub1" title="一级">
        <Menu.Item key="1">Option 1</Menu.Item>
        <Menu.Item key="2">Option 2</Menu.Item>
        <Menu.Item key="3">Option 3</Menu.Item>
        <Menu.Item key="4">Option 4</Menu.Item>
      </SubMenu>
      <SubMenu key="sub2" title="二级">
        <Menu.Item key="5">Option 5</Menu.Item>
        <Menu.Item key="6">Option 6</Menu.Item>
      </SubMenu>
      <SubMenu key="sub4" title="三级">
        <Menu.Item key="9">Option 9</Menu.Item>
        <Menu.Item key="10">Option 10</Menu.Item>
        <Menu.Item key="11">Option 11</Menu.Item>
        <Menu.Item key="12">Option 12</Menu.Item>
      </SubMenu>
    </Menu>
  );
  return (
    <div>
      <Dropdown
        overlay={menu}
        placement="bottomLeft"
        trigger={['click']}
      >
        <a onClick={(e) => e.preventDefault()}>
          <span style={{ color: '#006aff' }}>多级菜单 </span>
          <DownLine style={{ color: '#006aff' }} />
        </a>
      </Dropdown>
    </div>
  );
};
