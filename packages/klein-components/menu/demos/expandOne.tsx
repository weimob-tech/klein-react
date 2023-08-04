import React from 'react';
import { Menu, Icon } from '@klein-design/klein-react';

const { HomeLine } = Icon;

const { SubMenu } = Menu;

export default () => {
  const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

  const [openKeys, setOpenKeys] = React.useState(['sub1']);

  const onOpenChange = (keys: string[]) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey as string) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };
  return (
    <Menu
      mode="inline"
      openKeys={openKeys}
      onOpenChange={onOpenChange}
      style={{ width: 256 }}
      defaultSelectedKeys={['1']}
    >
      <SubMenu key="sub1" icon={<HomeLine />} title="一级菜单展开 One">
        <Menu.Item key="1">二级菜单 1</Menu.Item>
        <Menu.Item key="2">二级菜单 2</Menu.Item>
        <Menu.Item key="3">二级菜单 3</Menu.Item>
        <Menu.Item key="4">二级菜单 4</Menu.Item>
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
