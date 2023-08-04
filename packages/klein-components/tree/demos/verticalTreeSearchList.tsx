/*
 * desc: 另一种形式的搜索结果展示
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
  return (
    <>
      <Tree
        direction="vertical"
        showSearch
        autoExpandParent
        treeData={treeData}
        searchListType="list"
        onSearchListSelect={console.log}
        // onCheck={onNodeCheck}
        // onSelect={onNodeSelect}
        // onExpand={onNodeExpand}
      />
    </>
  );
};
