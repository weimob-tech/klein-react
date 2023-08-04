/**
 * title: 基本用法
 * desc: 配置相应的属性。
 */
import React, { useState } from 'react';
import { Tabs } from '@klein-design/klein-react';

const { TabPane } = Tabs;

export default () => {
  const [activeKey, setActiveKey] = React.useState('2');

  const handleChange = (key: any) => {
    console.log(key, 'adad key');
    setActiveKey(key);
  };

  const handleClick = (key: any) => {
    console.log(key, 'click key');
  };

  return (
      <Tabs
        // defaultActiveKey="2"
        onChange={handleChange}
        onTabClick={handleClick}
        activeKey={activeKey}
        // tabLine
      >
        <TabPane tab="标签1" key="1">
          内容 1
        </TabPane>
        <TabPane tab="标签2" key="2">
          内容 2
        </TabPane>
        <TabPane tab="标签3" key="3" disabled>
          内容 3
        </TabPane>
      </Tabs>
  );
};
