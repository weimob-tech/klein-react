/**
 * title: 更多 tab
 * desc: 下拉显示更多的tab。
 */
import React from 'react';
import { Tabs, Icon } from '@klein-design/klein-react';
import DemoLayout from '@/components/demo/DemoLayout';

const { EllipsisLine } = Icon;
const { TabPane } = Tabs;

function handleChange(key: any) {
  console.log(key, 'adad key');
}

function handleClick(key: any) {
  console.log(key, 'click key');
}

export default () => {
  return (
    <DemoLayout layout='1' style={{ minWidth: '668px'}}>
      <Tabs
        defaultActiveKey="1"
        onChange={handleChange}
        onTabClick={handleClick}
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
        <TabPane tab="标签4" key="4">
          Tab 4
        </TabPane>
        <TabPane tab="标签5" key="5">
          Tab 5
        </TabPane>
        <TabPane tab="标签6" key="6">
          Tab 6
        </TabPane>
        <TabPane tab="标签7" key="7">
          Tab 7
        </TabPane>
        <TabPane tab="标签8" key="8">
          Tab 8
        </TabPane>
        <TabPane tab="标签9" key="9">
          Tab 9
        </TabPane>
        <TabPane tab="标签10" key="10">
          Tab 10
        </TabPane>
        <TabPane tab="标签11" key="11">
          Tab 11
        </TabPane>
        <TabPane tab="标签12" key="12">
          Tab 12
        </TabPane>
        <TabPane tab="标签13" key="13">
          Tab 13
        </TabPane>
      </Tabs>
      <br />
      <Tabs
        moreIcon={<EllipsisLine style={{ width: 50 }} />}
        defaultActiveKey="1"
        onChange={handleChange}
        onTabClick={handleClick}
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
        <TabPane tab="标签4" key="4">
          Tab 4
        </TabPane>
        <TabPane tab="标签5" key="5">
          Tab 5
        </TabPane>
        <TabPane tab="标签6" key="6">
          Tab 6
        </TabPane>
        <TabPane tab="标签7" key="7">
          Tab 7
        </TabPane>
        <TabPane tab="标签8" key="8">
          Tab 8
        </TabPane>
        <TabPane tab="标签9" key="9">
          Tab 9
        </TabPane>
        <TabPane tab="标签10" key="10">
          Tab 10
        </TabPane>
        <TabPane tab="标签11" key="11">
          Tab 11
        </TabPane>
        <TabPane tab="标签12" key="12">
          Tab 12
        </TabPane>
        <TabPane tab="标签13" key="13">
          Tab 13
        </TabPane>
      </Tabs>
      <br />

      <Tabs
        type="card"
        defaultActiveKey="1"
        onChange={handleChange}
        onTabClick={handleClick}
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
        <TabPane tab="标签4" key="4">
          Tab 4
        </TabPane>
        <TabPane tab="标签5" key="5">
          Tab 5
        </TabPane>
        <TabPane tab="标签6" key="6">
          Tab 6
        </TabPane>
        <TabPane tab="标签7" key="7">
          Tab 7
        </TabPane>
        <TabPane tab="标签8" key="8">
          Tab 8
        </TabPane>
        <TabPane tab="标签9" key="9">
          Tab 9
        </TabPane>
        <TabPane tab="标签10" key="10">
          Tab 10
        </TabPane>
        <TabPane tab="标签11" key="11">
          Tab 11
        </TabPane>
        <TabPane tab="标签12" key="12">
          Tab 12
        </TabPane>
        <TabPane tab="标签13" key="13">
          Tab 13
        </TabPane>
      </Tabs>
      <br />
      <Tabs
        type="card"
        defaultActiveKey="1"
        onChange={handleChange}
        onTabClick={handleClick}
        moreIcon={<EllipsisLine />}
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
        <TabPane tab="标签4" key="4">
          Tab 4
        </TabPane>
        <TabPane tab="标签5" key="5">
          Tab 5
        </TabPane>
        <TabPane tab="标签6" key="6">
          Tab 6
        </TabPane>
        <TabPane tab="标签7" key="7">
          Tab 7
        </TabPane>
        <TabPane tab="标签8" key="8">
          Tab 8
        </TabPane>
        <TabPane tab="标签9" key="9">
          Tab 9
        </TabPane>
        <TabPane tab="标签10" key="10">
          Tab 10
        </TabPane>
        <TabPane tab="标签11" key="11">
          Tab 11
        </TabPane>
        <TabPane tab="标签12" key="12">
          Tab 12
        </TabPane>
        <TabPane tab="标签13" key="13">
          Tab 13
        </TabPane>
      </Tabs>
    </DemoLayout>
  );
};
