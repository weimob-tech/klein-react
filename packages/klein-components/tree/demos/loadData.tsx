import React from 'react';
import { Tree } from '@klein-design/klein-react';

const initTreeData = [
  {
    title: '0-0',
    key: '0-0',
    isLeaf: false,
  },
  {
    title: '0-1',
    key: '0-1',
    children: [
      { title: '0-1-0-0', key: '0-1-0-0' },
      { title: '0-1-0-1', key: '0-1-0-1' },
      { title: '0-1-0-2', key: '0-1-0-2' },
    ],
  },
  {
    title: '0-2',
    key: '0-2',
    isLeaf: false,
  },
];

// It's just a simple demo. You can use tree map to optimize update perf.
function updateTreeData(list: any[], key: React.Key, children: any[]): any[] {
  const result = list.map((node) => {
    if (node.key === key) {
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

export default () => {
  const [checkedKeys, setCheckedKeys] = React.useState<(number | string)[][]>([
    ['0-0', '0-0-0', '0-0-0-1'],
    ['0-0', '0-0-0', '0-0-0-0'],
    ['0-0', '0-0-1'],
  ]);
  const [treeData, setTreeData] = React.useState<any[]>(initTreeData);
  const onNodeCheck = (keys: any, info: any) => {
    console.log('onNodeCheck keys...', keys, info);
    setCheckedKeys(keys);
  };

  const onNodeSelect = (keys: any, info: any) => {
    console.log('keys...', keys, info);
  };

  const onLoadData = (treeNode: any, level: number) => {
    console.log('treeNode...', treeNode);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        setTreeData((origin) => {
          // 更新treeData
          const result = updateTreeData(origin, treeNode.key, [
            {
              title: `${treeNode.key}-0`,
              key: `${treeNode.key}-0`,
              isLeaf: level === 2,
            },
            {
              title: `${treeNode.key}-1`,
              key: `${treeNode.key}-1`,
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
    <>
      <Tree
        treeData={treeData}
        onCheck={onNodeCheck}
        onSelect={onNodeSelect}
        checkedKeys={checkedKeys}
        columnWidth={200}
        loadData={onLoadData}
      />
    </>
  );
};
