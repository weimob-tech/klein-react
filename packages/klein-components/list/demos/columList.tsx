import React from 'react';
import { List } from '@klein-design/klein-react';

export default () => {
  const data = [
    {
      title: '列表标题',
      content:
        '中列表，进店规则禁用于多网店模式和导流模式，单网店模式下中列表，进店规则禁用于多网店模式和导流模式，单网店模式下中列表，进店规则禁用于多网店模式和导流模式中列表，进店规则禁',
    },
    {
      title: '列表标题',
      content:
        '中列表，进店规则禁用于多网店模式和导流模式，单网店模式下中列表，进店规则禁用于多网店模式和导流模式，单网店模式下中列表，进店规则禁用于多网店模式和导流模式中列表，进店规则禁',
    },
    {
      title: '列表标题',
      content:
        '中列表，进店规则禁用于多网店模式和导流模式，单网店模式下中列表，进店规则禁用于多网店模式和导流模式，单网店模式下中列表，进店规则禁用于多网店模式和导流模式中列表，进店规则禁',
    },
  ];

  return (
    <List
      dataSource={data}
      direction="horizontal"
      renderItem={(item) => (
        <List.Item>
          <List.Item.Card title={item.title}>{item.content}</List.Item.Card>
        </List.Item>
      )}
    />
  );
};
