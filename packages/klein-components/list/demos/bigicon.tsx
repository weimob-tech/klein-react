import React from 'react';
import { List } from '@klein-design/klein-react';

export default () => {
  const data = [
    {
      title: '列表标题',
      describe:
        '中列表，进店规则禁用于多网店模式和导流模式，单网店模式下，用户进入商家店铺',
      avatar: (
        <img
          alt=""
          width={32}
          height={32}
          style={{
            objectFit: 'cover',
          }}
          src="https://cdn2.weimob.com/saas/@assets/saas-fe-group-web-stc/img/index/poster.png?20181231"
        />
      ),
      content:
        '中列表，进店规则禁用于多网店模式和导流模式，单网店模式下中列表，进店规则禁用于多网店模式和导流模式，单网店模式下中列表，进店规则禁用于多网店模式和导流模式中列表，进店规则禁用于多网店模式和导流模式，单网店模式下中列表，进店规则禁用于多网店模式和导流模式，单网店模式下中列表，进店规则禁用于多网店模式和导流模式中列表，进店规则禁用于多网店模式和导流模式',
    },
    {
      title: '列表标题',
      describe:
        '中列表，进店规则禁用于多网店模式和导流模式，单网店模式下，用户进入商家店铺',
      avatar: (
        <img
          alt=""
          width={32}
          height={32}
          style={{
            objectFit: 'cover',
          }}
          src="https://cdn2.weimob.com/saas/@assets/saas-fe-group-web-stc/img/index/poster.png?20181231"
        />
      ),
      content:
        '中列表，进店规则禁用于多网店模式和导流模式，单网店模式下中列表，进店规则禁用于多网店模式和导流模式，单网店模式下中列表，进店规则禁用于多网店模式和导流模式中列表，进店规则禁用于多网店模式和导流模式，单网店模式下中列表，进店规则禁用于多网店模式和导流模式，单网店模式下中列表，进店规则禁用于多网店模式和导流模式中列表，进店规则禁用于多网店模式和导流模式',
    },
    {
      title: '列表标题',
      describe:
        '中列表，进店规则禁用于多网店模式和导流模式，单网店模式下，用户进入商家店铺',
      avatar: (
        <img
          alt=""
          width={32}
          height={32}
          style={{
            objectFit: 'cover',
          }}
          src="https://cdn2.weimob.com/saas/@assets/saas-fe-group-web-stc/img/index/poster.png?20181231"
        />
      ),
      content:
        '中列表，进店规则禁用于多网店模式和导流模式，单网店模式下中列表，进店规则禁用于多网店模式和导流模式，单网店模式下中列表，进店规则禁用于多网店模式和导流模式中列表，进店规则禁用于多网店模式和导流模式，单网店模式下中列表，进店规则禁用于多网店模式和导流模式，单网店模式下中列表，进店规则禁用于多网店模式和导流模式中列表，进店规则禁用于多网店模式和导流模式',
    },
  ];

  return (
    <List
      dataSource={data}
      itemLayout="vertical"
      pagination={{
        onChange: (page: any) => {
          console.log(page);
        },
        pageSize: 3,
        total: 30,
      }}
      renderItem={(item) => (
        <List.Item
          actions={[<span>1</span>, <span>2</span>, <span>3</span>]}
          extra={<img width={272} alt="" src="" />}
        >
          <List.Item.Meta {...(item as any)} />
          {item.content}
        </List.Item>
      )}
    />
  );
};
