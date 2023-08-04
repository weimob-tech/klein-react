/*
 * title: 禁用选项
 * desc: 通过指定 options 里的 disabled 字段 。
 */

import React from 'react';
import { Cascader } from '@klein-design/klein-react'
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
    disabled: true,
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
  return (
    <DemoLayout layout='1'>   
      <Cascader
        style={{ width: 232 }}
        options={options}
        onChange={onChange}
        placeholder="Please select"
      />
    </DemoLayout>
  );
};
