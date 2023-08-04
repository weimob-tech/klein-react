import React from 'react';
import { Menu, Icon } from '@klein-design/klein-react';

const { HomeLine } = Icon;

const { SubMenu } = Menu;

export default () => {
  const handleClick = (e: any) => {
    console.log('click', e);
  };
  return (
    <Menu
      theme="dark"
      onClick={handleClick}
      style={{ width: 256, height: 300 }}
      mode="vertical"
    >
      <SubMenu key="sub1" icon={<HomeLine />} title="一级菜单展开 One">
        <Menu.ItemGroup title="标题一">
          <Menu.Item key="1">二级菜单 1</Menu.Item>
          <Menu.Item key="2">二级菜单 2</Menu.Item>
        </Menu.ItemGroup>
        <Menu.ItemGroup title="标题二">
          <Menu.Item key="3">二级菜单 3</Menu.Item>
          <Menu.Item key="4">二级菜单 4</Menu.Item>
        </Menu.ItemGroup>
      </SubMenu>
      <SubMenu key="sub2" icon={<HomeLine />} title="一级菜单展开 Two">
        <Menu.Item key="5">二级菜单 5</Menu.Item>
        <Menu.Item key="6">二级菜单 6</Menu.Item>
        <SubMenu key="sub3" title="标题一">
          <Menu.Item key="7">二级菜单 7</Menu.Item>
          <Menu.Item key="8">二级菜单 8</Menu.Item>
        </SubMenu>
      </SubMenu>
      <SubMenu key="sub4" icon={<HomeLine />} title="一级菜单展开 Three">
        <Menu.Item key="9">二级菜单 9</Menu.Item>
        <Menu.Item key="10">二级菜单 10</Menu.Item>
        <Menu.Item key="11">二级菜单 11</Menu.Item>
        <Menu.Item key="12">二级菜单 12</Menu.Item>
      </SubMenu>
    </Menu>
  );
};
