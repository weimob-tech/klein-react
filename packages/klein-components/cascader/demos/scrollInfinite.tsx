/*
 * title: 下啦加载
 * desc: 数据级联下拉加载 。
 */

import React, { useState, useEffect } from 'react';
import { Cascader } from '@klein-design/klein-react'
import DemoLayout from '@/components/demo/DemoLayout';

let arr: any[] = [
  {
    value: '浙江0',
    label: '浙江0',
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
    value: '浙江1',
    label: '浙江1',
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
    value: '浙江2',
    label: '浙江2',
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
    value: '浙江3',
    label: '浙江3',
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
    value: '浙江4',
    label: '浙江4',
  },
  {
    value: '浙江5',
    label: '浙江5',
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
    value: '浙江6',
    label: '浙江6',
  },
  {
    value: '浙江7',
    label: '浙江7',
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
    value: '浙江8',
    label: '浙江8',
  },
];
export default () => {
  const [optionList, setOptionList] = useState(arr);

  /* eslint-disable */
  const fetchData = (event: any, optionListIndex: any) => {
    console.log(optionListIndex, 'optionListIndex');

  };
  const addOptions = () => {
    setOptionList([...arr]);
  };

  function onChange(value: any) {
    console.log(value);
  }
  return (
    <DemoLayout layout='1'>
      <Cascader
        style={{ width: 232 }}
        expandTrigger="hover"
        size="medium"
        options={optionList}
        onChange={onChange}
        placeholder="选择"
        scrollInfinite={fetchData}
        infiniteHasMore={true}
      />
    </DemoLayout>
  );
};
