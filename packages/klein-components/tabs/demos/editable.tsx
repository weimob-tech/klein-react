import React from 'react';
import { Tabs } from '@klein-design/klein-react';
import DemoLayout from '@/components/demo/DemoLayout';

const { TabPane } = Tabs;

const initialPanes = [
  { title: 'Tab 1', content: 'Content of Tab 1', key: '1' },
  { title: 'Tab 2', content: 'Content of Tab 2', key: '2' },
  {
    title: 'Tab 3',
    content: 'Content of Tab 3',
    key: '3',
    closable: false,
  },
];

let newTabIndex = 0;

export default () => {
  const [panes, setPanes] = React.useState(initialPanes);

  const onTabPaneEdit = (
    targetKey: React.MouseEvent | React.KeyboardEvent | string,
    action: 'add' | 'remove',
  ) => {
    if (action === 'add') {
      newTabIndex += 1;
      const activeKey = `newTab${newTabIndex}`;
      const newPanes = [...panes];
      newPanes.push({
        title: `New Tab${newTabIndex}`,
        content: 'Content of new Tab',
        /* eslint-disable no-bitwise */
        closable: !!(newTabIndex & 1),
        key: activeKey,
      });
      setPanes(newPanes);
    } else {
      const newPanes = panes.filter((item) => item.key !== targetKey);
      setPanes(newPanes);
    }
  };

  return (
    <DemoLayout layout='1' style={{ minWidth: '668px'}}>
      <Tabs editable type="card" size="large" onEdit={onTabPaneEdit}>
        {panes.map((item) => (
          <TabPane tab={item.title} key={item.key}>
            {item.content + item.key}
          </TabPane>
        ))}
      </Tabs>
      <Tabs
        type="card"
        editable
        isHoverClose
        style={{
          marginTop: 20,
        }}
        onEdit={onTabPaneEdit}
      >
        {panes.map((item) => (
          <TabPane tab={item.title} key={item.key} closable={item.closable}>
            {item.content}
          </TabPane>
        ))}
      </Tabs>
    </DemoLayout>
  );
};
