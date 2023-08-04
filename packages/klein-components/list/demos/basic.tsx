import React, { useState } from "react";
import { List, Empty, Button, Tabs } from "@klein-design/klein-react";

const dataS = [
  "小列表，进店规则禁用于多网店模式和导流模式，单网店模式下，用户进入商家店铺",
  "小列表，进店规则禁用于多网店模式和导流模式，单网店模式下，用户进入商家店铺",
  "小列表，进店规则禁用于多网店模式和导流模式，单网店模式下，用户进入商家店铺",
];
const dataM = [
  "中列表，进店规则禁用于多网店模式和导流模式，单网店模式下，用户进入商家店铺",
  "中列表，进店规则禁用于多网店模式和导流模式，单网店模式下，用户进入商家店铺",
  "中列表，进店规则禁用于多网店模式和导流模式，单网店模式下，用户进入商家店铺",
];
const dataL = [
  "大列表，进店规则禁用于多网店模式和导流模式，单网店模式下，用户进入商家店铺",
  "大列表，进店规则禁用于多网店模式和导流模式，单网店模式下，用户进入商家店铺",
  "大列表，进店规则禁用于多网店模式和导流模式，单网店模式下，用户进入商家店铺",
];
export default () => {
  const [activeKey, setActiveKey] = useState('1');

  const handleChange = (key: any) => {
    console.log(key, 'adad key');
    setActiveKey(key);
  };

  const handleClick = (key: any) => {
    console.log(key, 'click key');
  };
  return (
    <Tabs
      // defaultActiveKey="1"
      onChange={handleChange}
      onTabClick={handleClick}
      activeKey={activeKey}
      size='middle'
      isHoverClose
      type="card"
    >
      <Tabs.TabPane tab="小列表" key="1">
        <List
            size="small"
            dataSource={dataS}
            renderItem={(item) => <List.Item>{item}</List.Item>}
          />
      </Tabs.TabPane>
      <Tabs.TabPane tab="中列表" key="2">
        <List
            dataSource={dataM}
            renderItem={(item) => <List.Item>{item}</List.Item>}
          />
      </Tabs.TabPane>
      <Tabs.TabPane tab="大列表" key="3">
        <List
            size="large"
            dataSource={dataL}
            renderItem={(item) => (
              <List.Item
                actions={[
                  <Button type="link">
                    操作
                  </Button>
                ]}
              >
                {item}
              </List.Item>
            )}
          />
      </Tabs.TabPane>
      <Tabs.TabPane tab="空列表" key="4">
      <List
          size="small"
          locale={<Empty size={'small'} />}
          renderItem={(item) => <List.Item>{item}</List.Item>}
        />
      </Tabs.TabPane>
    </Tabs>
  );
};
