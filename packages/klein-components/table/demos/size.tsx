// @ts-nocheck
/**
 * size
 * title:紧凑型
 * desc:两种紧凑型的列表，小型列表只用于对话框内。
 */
import React from 'react';
import { Table } from '@klein-design/klein-react';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
];

export default () => (
  <div>
    <p style={{marginBottom: '20px', fontWeight: 600 }} >Middle size table</p>
    <Table outlineBordered columns={columns} dataSource={data} size="middle" />
    <p style={{margin: '24px 0 20px 0', fontWeight: 600 }} >Small size table</p>
    <Table outlineBordered columns={columns} dataSource={data} size="small" />
  </div>
);

// #components-table-demo-size h4 { margin-bottom: 16px; }
