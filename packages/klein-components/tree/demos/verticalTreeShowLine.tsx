import React from 'react';
import { Tree, Icon } from '@klein-design/klein-react';

const { RightLine } = Icon

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
    title: '0-2',
    key: '0-2',
    isLeaf: true,
  },
];

export default () => {
  return (
    <>
      <Tree
        showLine
        hover='medium'
        treeData={treeData}
        direction="vertical"
      />
    </>
  );
};
