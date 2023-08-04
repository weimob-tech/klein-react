/*
 * title: 组合
 * desc: 图标和按钮的组合 。
 */

import React from 'react';
import { Dropdown, Button, Menu, Icon } from '@klein-design/klein-react'
import DemoLayout from '@/components/demo/DemoLayout';;

const { QuestionFill } = Icon;
export default () => {

  const [visible, setVisible] = React.useState<boolean>(false)
  
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
      <div style={{ whiteSpace: 'nowrap' }}>
        <Dropdown overlay={menu} placement="bottomRight" visible={visible} onVisibleChange={v => setVisible(v)}>
          <Button icon={<QuestionFill />}>菜单</Button>
        </Dropdown>
      </div>
    </div>
  );
};
