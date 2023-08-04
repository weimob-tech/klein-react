// @ts-nocheck
/**
 * title:基本用法
 * desc:简单的表格，最后一列是各种操作
 */

import React from 'react';
import { Table, Input, Image } from '@klein-design/klein-react';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (item) => (
      <div>
        <Image
          style={{ verticalAlign: 'middle' }}
          width={36}
          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        />
        <span style={{ verticalAlign: 'middle' }}>{item}</span>
      </div>
    ),
  },
  {
    title: 'Age',
    dataIndex: 'age',
    width: 300,
    render: () => <Input style={{ height: 32 }} />,
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
              {tag.toUpperCase()}
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
      <div size="middle">
        <a style={{ color: '#006aff', marginRight: 16, fontSize: 12 }}>操作1</a>
        <a style={{ color: '#006aff', fontSize: 12 }}>操作2</a>
      </div>
    ),
  },
];

const data = [];

export default () => (
  <Table
    bordered
    columns={columns}
    dataSource={data}
  />
);
