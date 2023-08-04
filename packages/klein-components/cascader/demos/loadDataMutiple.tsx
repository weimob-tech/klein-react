/*
 * title: 动态加载选项
 * desc: 使用 loadData 实现动态加载选项。
 */

import React from 'react';
import { Cascader } from '@klein-design/klein-react'
import DemoLayout from '@/components/demo/DemoLayout';
// import Cascader from '../index';

const optionLists = [
  {
    value: '浙江',
    label: '浙江',
    isLeaf: false,
  },
  {
    value: '江苏',
    label: '江苏',
    isLeaf: false,
  },
];

function updateTreeData(list: any[], key: React.Key, children: any[]): any[] {
  const result = list.map((node) => {
    if (node.value === key) {
      return {
        ...node,
        children,
      };
    }
    if (node.children) {
      return {
        ...node,
        children: updateTreeData(node.children, key, children),
      };
    }
    return node;
  });
  return result;
}

const LazyOptions = () => {
  const [options, setOptions] = React.useState(optionLists);
  const [value, setValue] = React.useState([
    ['zhejiang', 'zhejiang-0', 'zhejiang-0-0'],
  ]);

  const onChange = (val: any) => {
    console.log('value...', val);
    setValue(val);
  };

  const onLoadData = (treeNode: any, level: number) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        setOptions((origin) => {
          // 更新treeData
          const result = updateTreeData(origin, treeNode.value, [
            {
              label: `${treeNode.value}-0`,
              value: `${treeNode.value}-0`,
              isLeaf: level === 2,
            },
            {
              label: `${treeNode.value}-1`,
              value: `${treeNode.value}-1`,
              isLeaf: level === 1 || level === 2,
            },
          ]);
          return result;
        });
        resolve(null);
      }, 500);
    });
  };

  return (
    <DemoLayout layout='1'>
    <Cascader
      style={{ width: 232 }}
      value={value}
      options={options}
      loadData={onLoadData as any}
      onChange={onChange}
      multiple
    />
    </DemoLayout>
  );
};

export default LazyOptions;
