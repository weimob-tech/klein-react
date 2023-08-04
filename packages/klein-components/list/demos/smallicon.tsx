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
    },
  ];

  return (
    <List
      dataSource={data}
      renderItem={(item) => (
        <List.Item
          actions={[
            <a
              style={{ color: '#268BFF', fontSize: '12px', cursor: 'pointer' }}
            >
              编辑
            </a>,
            <a
              style={{ color: '#268BFF', fontSize: '12px', cursor: 'pointer' }}
            >
              更多
            </a>,
          ]}
        >
          <List.Item.Meta {...(item as any)} />
        </List.Item>
      )}
    />
  );
};
