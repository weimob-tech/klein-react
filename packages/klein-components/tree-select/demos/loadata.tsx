import React from 'react';
import { TreeSelect } from '@klein-design/klein-react';

const initTreeData = [
  {
    title: '节点 0-0',
    value: '0-0',
    isLeaf: false,
  },
  {
    title: '节点 0-1',
    value: '0-1',
    children: [
      { title: '节点 0-1-0', value: '0-1-0' },
      { title: '节点 0-1-1', value: '0-1-1' },
      { title: '节点 0-1-2', value: '0-1-2' },
    ],
  },
  {
    title: '节点 0-2',
    value: '0-2',
    isLeaf: false,
  },
];

// It's just a simple demo. You can use tree map to optimize update perf.
function updateTreeData(list: any[], value: React.Key, children: any[]): any[] {
  const result = list.map((node) => {
    if (node.value === value) {
      return {
        ...node,
        children,
      };
    }
    if (node.children) {
      return {
        ...node,
        children: updateTreeData(node.children, value, children),
      };
    }
    return node;
  });
  return result;
}

export default () => {
  const [checkedKeys, setCheckedKeys] = React.useState<(number | string)[]>([
    '0-0-0-1',
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
          const result = updateTreeData(origin, treeNode.value, [
            {
              title: `${treeNode.value}-0`,
              value: `${treeNode.value}-0`,
              isLeaf: false,
            },
            {
              title: `${treeNode.value}-1`,
              value: `${treeNode.value}-1`,
              isLeaf: false,
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
      <TreeSelect
        open={true}
        dropdownMatchSelectWidth={false}
        treeData={treeData}
        loadData={onLoadData}
        // showSearch
        // value='0-1'
        placeholder="请选择"
        style={{ width: '250px' }}
      />
    </>
  );
};
