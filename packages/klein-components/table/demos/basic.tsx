// @ts-nocheck
/**
 * title:基本用法
 * desc:简单的表格，最后一列是各种操作
 */

import React, { useState } from 'react';
import { Table, Input, Button } from '@klein-design/klein-react';
import DemoLayout from '@/components/demo/DemoLayout'

const data = [];
const value = {};
for (let i = 1; i <= 20; i += 1) {
  value[`name${i}`] = `name${i}`;
}
function getColumns() {
  const columns = [];
  for (let i = 0; i < 20; i += 1) {
    columns.push({
      title: `Name1${i}`,
      dataIndex: `name1${i}`,
      key: `name1${i}`,
    });
  }
  return columns;
}
const columns = getColumns();
function getData() {
  const l = data.length;
  for (let i = l; i < l + 200; i += 1) {
    data.push({
      key: i,
      ...value,
    });
  }
  return [...data];
}
export default () => {
  const [loading, setLoading] = useState(true);
  setTimeout(setLoading.bind(null, false), 2000);
  const [dataSource, setData] = useState([]);
  return (
    <DemoLayout layout='1'>
      <Button
        onClick={() => {
          setData(getData());
        }}
      >
        增加
      </Button>
      <Table
        columns={columns}
        loading={loading}
        pagination={false}
        dataSource={dataSource}
        emptyText={<span>空</span>}
        outlineBordered
      />
    </DemoLayout>
  );
};
