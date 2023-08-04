// @ts-nocheck
/**
 * title:基本用法
 * desc:简单的表格，最后一列是各种操作
 */

import React from 'react';
import { Table, Popover, Button } from '@klein-design/klein-react';

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['Nice'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['Loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['Cool'],
  },
];

export default () => {
  const [content, setContent] = React.useState<React.ReactNode>();

  const handleOnVisibleChange = (visible) => {
    setTimeout(() => {
      setContent(
        <div>
          <div>Content</div>
          <div>Content</div>
          <div>Content</div>
          <div>Content</div>
          <div>Content</div>
          <div>Content</div>
          <div>Content</div>
          <div>Content</div>
          <div>Content</div>
          <div>Content</div>
          <div>Content</div>
          <div>Content</div>
          <div>Content</div>
          <div>Content</div>
        </div>,
      );
    }, 2000);
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: (tags) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <div color={color} key={tag}>
                {tag}
              </div>
            );
          })}
        </>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: () => (
        <>
          <a style={{ color: '#006aff', marginRight: 16 }}>
            操作1
          </a>
          <a style={{ color: '#006aff' }}>操作2</a>
        </>
      ),
    },
  ];

  return (
    <Table
      bordered
      columns={columns}
      loading={false}
      pagination={false}
      dataSource={data}
      // size="small"
    />
  );
};
