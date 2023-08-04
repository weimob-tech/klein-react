/*
 * title: 搜索演示
 * desc: 通过配置showSearch属性 。
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
      showSearch={{ filter }}
      placeholder="Please select"
    />
    </DemoLayout>
  );
};
