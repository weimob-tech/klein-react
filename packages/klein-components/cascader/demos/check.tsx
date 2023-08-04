/*
 * title: 配置选择框checkbox
 * desc: 配置options 中的checked 。
 */

import React from 'react';
import { Cascader } from '@klein-design/klein-react'
import DemoLayout from '@/components/demo/DemoLayout';

const options = [
  {
    value: '浙江',
    label: '浙江',
    checked: true,
    children: [
      {
        value: '杭州',
        label: '杭州',
        checked: true,
        children: [
          {
            value: '西湖',
            label: '西湖',
            checked: true,
          },
        ],
      },
      {
        value: 'shapxing',
        label: 'shapxing',
        checked: true,
        children: [
          {
            value: 'dongpin',
            label: 'dongpini',
            checked: true,
          },
        ],
      },
    ],
  },
  {
    value: '江苏',
    label: '江苏',
    checked: true,
    children: [
      {
        value: '南京',
        label: '南京',
        checked: true,
        children: [
          {
            value: '中华门',
            label: '中华门',
            checked: true,
          },
          {
            value: '中山园',
            label: '中山园',
            checked: true,
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
  function filter(inputValue: any, path: any) {
    return path.some(
      (option: any) =>
        option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1,
    );
  }
  return (
    <DemoLayout layout='1'>
    <Cascader
      style={{ width: 232 }}
      options={options}
      onChange={onChange}
      hasChecked
      showSearch={{ filter }}
      placeholder="Please select"
    />
    </DemoLayout>
  );
};
