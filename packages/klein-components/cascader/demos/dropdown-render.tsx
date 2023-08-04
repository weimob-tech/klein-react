/*
 * title: 基本使用
 * desc: 数据级联 。
 */

import React from 'react';
import { Cascader, Divider } from '@klein-design/klein-react'
import DemoLayout from '@/components/demo/DemoLayout';

const options = [
  {
    value: '浙江',
    label: '浙江',
    children: [
      {
        value: '杭州',
        label: '杭州',
        children: [
          {
            value: '西湖',
            label: '西湖',
          },
        ],
      },
    ],
  },
  {
    value: '江苏',
    label: '江苏',
    children: [
      {
        value: '南京',
        label: '南京',
        children: [
          {
            value: '中华门',
            label: '中华门',
          },
        ],
      },
    ],
  },
];
export default () => {
  function onChange(value: any) {
    console.log(value);
  }

  function dropdownRender(menus: React.ReactNode) {
    return (
      <div>
        {menus}
        <Divider style={{ marginTop: 0, marginBottom: 0 }} />
        <div style={{ padding: 8 }}>custom render</div>
      </div>
    );
  }

  return (
    <DemoLayout layout='1'>
    <Cascader
      style={{ width: 232 }}
      size="medium"
      options={options}
      onChange={onChange}
      placeholder="选择"
      dropdownRender={dropdownRender}
    />
    </DemoLayout>
  );
};
