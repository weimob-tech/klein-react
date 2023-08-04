// @ts-nocheck
/**
 * fixed-header
 * title:固定表头
 * desc:方便一页内展示大量数据。
 */
import React from 'react';
import { Table } from '@klein-design/klein-react';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    width: 150,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    width: 150,
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];

const data = [];
// eslint-disable-next-line no-plusplus
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}

export default () => (
  <Table
    columns={columns}
    dataSource={data}
    pagination={{ pageSize: 50 }}
    scroll={{ y: 240 }}
    outlineBordered
  />
);
