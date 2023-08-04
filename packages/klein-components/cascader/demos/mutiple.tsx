/*
 * title: 级联多选
 * desc: 多选情况下value请传入例如[[1, 2, 3]]。
 */

import React, { useState, useEffect } from 'react';
import { Cascader } from '@klein-design/klein-react'
import DemoLayout from '@/components/demo/DemoLayout';
import type { CascaderProps } from '@klein-design/klein-react/es/cascader';

const options = [
  {
    code: '浙江',
    desc: '浙江',
    items: [
      {
        code: '杭州',
        desc: '杭州',
        items: [
          {
            code: '西湖',
            desc: '西湖',
            isLeaf: true,
          },
          {
            code: '西湖2',
            desc: '西湖2',
            isLeaf: true,
          },
        ],
      },
      {
        code: '杭州2',
        desc: '杭州2',
        items: [
          {
            code: '西湖3',
            desc: '西湖3',
            isLeaf: true,
          },
          {
            code: '西湖4',
            desc: '西湖4',
            isLeaf: true,
          },
        ],
      },
    ],
  },
];
export default () => {
  const [vals, setVals] = React.useState([['zhejiang', 'hangzhou', 'xihu']]);

  function onChange(value: any) {
    console.log('value...', value);
    setVals(value);
  }

  const tagRender = (props: any, node: React.ReactNode) => (
    <div style={{ width: 200 }}>{node}</div>
  );

  return (
    <DemoLayout layout='1'>
    <Cascader
      style={{ width: 232 }}
      // value={vals}
      size="medium"
      multiple
      tagRender={tagRender}
      // collapse
      maxTagTextLength={200}
      fieldNames={{
        label: 'desc',
        value: 'code',
        children: 'items',
      }}
      options={options as CascaderProps['options']}
      onChange={onChange}
      placeholder="选择"
    />
    </DemoLayout>
  );
};
