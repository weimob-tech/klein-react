import React from 'react';
import { TreeSelect } from '@klein-design/klein-react';

export default () => {
  const treeData = [
    {
      title: '节点 0-0',
      value: '0-0',
      children: [
        {
          title: '节点 0-0-0',
          value: '0-0-0',
          children: [
            { title: '节点 0-0-0-0', value: '0-0-0-0', isLeaf: true },
            { title: '节点 0-0-0-1', value: '0-0-0-1', isLeaf: true },
            { title: '节点 0-0-0-2', value: '0-0-0-2', isLeaf: true },
          ],
        },
        {
          title: '节点 0-0-1',
          value: '0-0-1',
          children: [
            { title: '节点 0-0-1-0', value: '0-0-1-0', isLeaf: true },
            { title: '节点 0-0-1-1', value: '0-0-1-1', isLeaf: true },
            { title: '节点 0-0-1-2', value: '0-0-1-2', isLeaf: true },
          ],
        },
        {
          title: '节点 0-0-2',
          value: '0-0-2',
          isLeaf: true,
        },
      ],
    },
    {
      title: '节点 0-1',
      value: '0-1',
      children: [
        { title: '节点 0-1-0', value: '0-1-0', isLeaf: true },
        { title: '节点 0-1-1', value: '0-1-1', isLeaf: true },
        { title: '节点 0-1-2', value: '0-1-2', isLeaf: true },
      ],
    },
    {
      title: '节点 0-2',
      value: '0-2',
      isLeaf: true,
    },
  ];

  return (
    <TreeSelect
      multiple
      treeData={treeData}
      placeholder="请选择"
      allowClear
      style={{ width: '250px' }}
    />
  );
};
