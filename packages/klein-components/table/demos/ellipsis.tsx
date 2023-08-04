// @ts-nocheck
/**
 * ellipsis
 * title:单元格自动省略
 * desc:设置 `column.ellipsis` 可以让单元格内容根据宽度自动省略。
 */
import React from 'react';
import { Table, Tooltip } from '@klein-design/klein-react';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
    width: 150,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    width: 80,
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address 1',
    render: (item) => (
      <Tooltip placement="topLeft" title={item}>
        <a>{item}</a>
      </Tooltip>
    ),
    ellipsis: true,
  },
  {
    title: 'Long Column Long Column Long Column',
    dataIndex: 'address',
    key: 'address 2',
    render: (item) => (
      <Tooltip placement="topLeft" title={item}>
        <a>{item}</a>
      </Tooltip>
    ),
    ellipsis: true,
  },
  {
    title: 'Long Column Long Column',
    dataIndex: 'address',
    key: 'address 3',
    render: (item) => (
      <Tooltip placement="topLeft" title={item}>
        <a>{item}</a>
      </Tooltip>
    ),
    ellipsis: true,
  },
  {
    title: 'Long Column',
    dataIndex: 'address',
    key: 'address 4',
    render: (item) => (
      <Tooltip placement="topLeft" title={item}>
        <a>{item}</a>
      </Tooltip>
    ),
    ellipsis: true,
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park, New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 2 Lake Park, London No. 2 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park, Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

export default () => <Table outlineBordered columns={columns} dataSource={data} />;
