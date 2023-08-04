/**
 * title: 基本用法
 * desc: 配置相应的属性。
 */
import React from 'react';
import { Tabs } from '@klein-design/klein-react';

const { TabPane } = Tabs;

function handleChange(key: any) {
  console.log(key, 'adad key');
}

function handleClick(key: any) {
  console.log(key, 'click key');
}

export default () => {
  return (
    <Tabs
      defaultActiveKey="1"
      onChange={handleChange}
      onTabClick={handleClick}
      type="card"
    >
      <TabPane tab="标签1" key="1">
        Tab 1
      </TabPane>
      <TabPane tab="标签2" key="2">
        Tab 2
      </TabPane>
      <TabPane tab="标签3" key="3" disabled>
        Tab 3
      </TabPane>
    </Tabs>
  );
};
