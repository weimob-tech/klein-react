import React, { useState } from 'react';
import { Menu, Icon } from '@klein-design/klein-react';

const { CustomLine, TabsLine } = Icon;
const { SubMenu } = Menu;

export default () => {
  const [current, setCurrent] = useState('first');

  const handleClick = (e: any) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  return (
    <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
      <Menu.Item key="first" icon={<TabsLine />}>
        选中菜单
      </Menu.Item>
      <Menu.Item key="second" icon={<TabsLine />}>
        选中菜单二
      </Menu.Item>
      <Menu.Item key="app" disabled icon={<TabsLine />}>
        不可选菜单
      </Menu.Item>
      <SubMenu key="SubMenu" icon={<TabsLine />} title="二级菜单">
        <Menu.Item key="setting:1" icon={<CustomLine />}>
          菜单选项一级 1
        </Menu.Item>
        <Menu.Item key="setting:2" icon={<CustomLine />} disabled>
          菜单选项一级 2
        </Menu.Item>
        <Menu.ItemGroup title="标题一">
          <Menu.Item key="setting:3">菜单选项一级 3</Menu.Item>
          <Menu.Item key="setting:4">菜单选项一级 4</Menu.Item>
        </Menu.ItemGroup>
      </SubMenu>
      <Menu.Item key="aline">
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
        >
          链接菜单
        </a>
      </Menu.Item>
    </Menu>
  );
};
