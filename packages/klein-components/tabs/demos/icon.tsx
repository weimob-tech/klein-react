/**
 * title: ICON
 * desc: 有ICON的标签。
 */
import React from 'react';
import { Tabs, Icon } from '@klein-design/klein-react';

const { SettingLine } = Icon;
const { TabPane } = Tabs;
export default () => {
  return (
    <Tabs defaultActiveKey="1">
      <TabPane
        tab={
          <span>
            <span style={{ marginRight: 8 }}>
              <SettingLine />
            </span>
            <span>选择标签</span>
          </span>
        }
        key="1"
      >
        内容 1
      </TabPane>
      <TabPane
        tab={
          <span>
            <span style={{ marginRight: 8 }}>
              <SettingLine />
            </span>
            <span>选择标签</span>
          </span>
        } 
        key="2"
      >
        内容 2
      </TabPane>
      <TabPane 
        tab={
          <span>
            <span style={{ marginRight: 8 }}>
              <SettingLine />
            </span>
            <span>选择标签</span>
          </span>
        } 
        key="3" 
        disabled
      >
        内容 3
      </TabPane>
    </Tabs>
  );
};
