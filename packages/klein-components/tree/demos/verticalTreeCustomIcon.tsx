import React from 'react';
import { Tree, Icon } from '@klein-design/klein-react';

const { ExpressionFill } = Icon

const treeData = [
  {
    title: '节点 0-0',
    key: '0-0',
    icon: <ExpressionFill />,
    children: [
      {
        title: '节点 0-0-0',
        key: '0-0-0',
        icon: <ExpressionFill />,
        children: [
          { title: '节点 0-0-0-0', key: '0-0-0-0', isLeaf: true },
          { title: '节点 0-0-0-1', key: '0-0-0-1', isLeaf: true },
          { title: '节点 0-0-0-2', key: '0-0-0-2', isLeaf: true },
        ],
      },
      {
        title: '节点 0-0-1',
        key: '0-0-1',
        icon: <ExpressionFill />,
        children: [
          { title: '节点 0-0-1-0', key: '0-0-1-0', isLeaf: true },
          { title: '节点 0-0-1-1', key: '0-0-1-1', isLeaf: true },
          { title: '节点 0-0-1-2', key: '0-0-1-2', isLeaf: true },
        ],
      },
      {
        title: '节点 0-0-2',
        key: '0-0-2',
        icon: <ExpressionFill />,
        isLeaf: true,
      },
    ],
  },
  {
    title: '节点 0-1',
    key: '0-1',
    icon: <ExpressionFill />,
    children: [
      { title: '节点 0-1-0', key: '0-1-0-0', isLeaf: true },
      { title: '节点 0-1-1', key: '0-1-0-1', isLeaf: true },
      { title: '节点 0-1-2', key: '0-1-0-2', isLeaf: true },
    ],
  },
  {
    title: '节点 0-2',
    icon: <ExpressionFill />,
    key: '0-2',
    isLeaf: true,
  },
];

export default () => {
  return (
    <>
      <Tree
        showIcon
        treeData={treeData}
        direction="vertical"
      />
    </>
  );
};
