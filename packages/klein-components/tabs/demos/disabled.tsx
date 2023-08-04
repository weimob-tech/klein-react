/**
 * title: 禁用
 * desc: 利用disabled 进行选项禁用某一项。
 */
import React from 'react';
import { Tabs } from '@klein-design/klein-react';

const { TabPane } = Tabs;
export default () => {
  return (
    <Tabs defaultActiveKey="1">
      <TabPane tab="选择标签" key="1">
        tab 1
      </TabPane>
      <TabPane tab="不可选标签" key="2" disabled>
        tab 2
      </TabPane>
      <TabPane tab="可选标签" key="3">
        tab 3
      </TabPane>
    </Tabs>
  );
};
