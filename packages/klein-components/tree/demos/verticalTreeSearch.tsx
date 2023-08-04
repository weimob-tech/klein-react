/*
 * desc: 适用于数据量少且全的情况。
 */
import React from 'react';
import { Tree } from '@klein-design/klein-react';

const treeData = [
  {
    title: '节点 0-0',
    key: '0-0',
    children: [
      {
        title: '节点 0-0-0',
        key: '0-0-0',
        children: [
          { title: '节点 0-0-0-0', key: '0-0-0-0', isLeaf: true },
          { title: '节点 0-0-0-1', key: '0-0-0-1', isLeaf: true },
          { title: '节点 0-0-0-2', key: '0-0-0-2', isLeaf: true },
        ],
      },
      {
        title: '节点 0-0-1',
        key: '0-0-1',
        children: [
          { title: '节点 0-0-1-0', key: '0-0-1-0', isLeaf: true },
          { title: '节点 0-0-1-1', key: '0-0-1-1', isLeaf: true },
          { title: '节点 0-0-1-2', key: '0-0-1-2', isLeaf: true },
        ],
      },
      {
        title: '节点 0-0-2',
        key: '0-0-2',
        isLeaf: true,
      },
    ],
  },
  {
    title: '节点 0-1',
    key: '0-1',
    children: [
      { title: '节点 0-1-0', key: '0-1-0', isLeaf: true },
      { title: '节点 0-1-1', key: '0-1-1', isLeaf: true },
      { title: '节点 0-1-2', key: '0-1-2', isLeaf: true },
    ],
  },
  {
    title: '节点 0-2',
    key: '0-2',
    isLeaf: true,
  },
];

export default () => {
  const [expandedKeys, setExpandedKeys] = React.useState<React.Key[]>(['0-1']);
  const [autoExpandParent, setAutoExpandParent] = React.useState<boolean>(true);

  const onNodeCheck = (keys: any, info: any) => {
    console.log('keys...', keys, info);
    // setCheckedKeys(keys);
  };

  const onNodeSelect = (keys: any, info: any) => {
    console.log('keys...', keys, info);
  };

  const onNodeExpand = (keys: any) => {
    console.log('keys...', keys);
    setExpandedKeys(keys);
    setAutoExpandParent(false);
  };

  return (
    <>
      <Tree
        direction="vertical"
        showSearch
        placeholder="请搜索"
        expandedKeys={expandedKeys}
        treeData={treeData}
        // onCheck={onNodeCheck}
        // onSelect={onNodeSelect}
        onExpand={onNodeExpand}
        autoExpandParent={autoExpandParent}
      />
    </>
  );
};
