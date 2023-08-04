import React from 'react';
import { Menu, Icon } from '@klein-design/klein-react';

const { HomeLine } = Icon;

const { SubMenu } = Menu;

const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

export default () => {
  const handleClick = (e) => {
    console.log('click ', e);
  };

  const [openKeys, setOpenKeys] = React.useState(['sub1']);

  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => !openKeys.includes(key));
    if (!rootSubmenuKeys.includes(latestOpenKey)) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };
  return (
    <>
      <Menu
        onClick={handleClick}
        style={{ width: 256 }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
      >
        <SubMenu key="sub1" icon={<HomeLine />} title="一级菜单展开 One">
          <Menu.ItemGroup key="g1" title="标题一">
            <Menu.Item key="1">二级菜单 1</Menu.Item>
            <Menu.Item key="2">二级菜单 2</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup key="g2" title="标题二">
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
        <SubMenu
          key="sub4"
          disabled
          icon={<HomeLine />}
          title="一级菜单展开 Three"
        >
          <Menu.Item key="9">二级菜单 9</Menu.Item>
          <Menu.Item key="10">二级菜单 10</Menu.Item>
          <Menu.Item key="11">二级菜单 11</Menu.Item>
          <Menu.Item key="12">二级菜单 12</Menu.Item>
        </SubMenu>
      </Menu>
      <br />
      <Menu
        mode="inline"
        openKeys={openKeys}
        onOpenChange={onOpenChange}
        style={{ width: 256 }}
      >
        <SubMenu key="sub1" title="菜单 One">
          <Menu.Item key="1">Option 1</Menu.Item>
          <Menu.Item key="2">Option 2</Menu.Item>
          <Menu.Item key="3">Option 3</Menu.Item>
          <Menu.Item key="4">Option 4</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" title="菜单 Two">
          <Menu.Item key="5">Option 5</Menu.Item>
          <Menu.Item key="6">Option 6</Menu.Item>
          <SubMenu key="sub3" title="Submenu">
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu>
        </SubMenu>
        <SubMenu key="sub4" title="菜单 Three">
          <Menu.Item key="9">Option 9</Menu.Item>
          <Menu.Item key="10">Option 10</Menu.Item>
          <Menu.Item key="11">Option 11</Menu.Item>
          <Menu.Item key="12">Option 12</Menu.Item>
        </SubMenu>
      </Menu>
    </>
  );
};
