import React from 'react';
import { Tree, Icon } from '@klein-design/klein-react';

const { ExpressionFill } = Icon;

const treeData = [
  {
    title: '0-0',
    key: 0,
    icon: <ExpressionFill />,
    children: [
      {
        title: '0-0-0',
        key: 1,
        children: [
          { title: '0-0-0-0', key: 2, isLeaf: true },
          { title: '0-0-0-1', key: 3, isLeaf: true },
          { title: '0-0-0-2', key: 4, isLeaf: true },
        ],
      },
      {
        title: '0-0-1',
        key: 5,
        children: [
          { title: '0-0-1-0', key: 6, isLeaf: true },
          { title: '0-0-1-1', key: 7, isLeaf: true },
          { title: '0-0-1-2', key: 8, isLeaf: true },
        ],
      },
      {
        title: '0-0-2',
        key: 9,
        isLeaf: true,
      },
    ],
  },
  {
    title: '0-1',
    key: 10,
    icon: <ExpressionFill />,
    children: [
      { title: '0-1-0-0', key: 11, isLeaf: true },
      { title: '0-1-0-1', key: 12, isLeaf: true },
      { title: '0-1-0-2', key: 13, isLeaf: true },
    ],
  },
  {
    title: '0-2',
    key: 14,
    icon: <ExpressionFill />,
    isLeaf: true,
  },
];

export default () => {
  const [checkedKeys, setCheckedKeys] = React.useState<(number | string)[][]>(
    [],
  );

  const onNodeCheck = (keys: any, info: any) => {
    console.log('keys...', keys, info);
    setCheckedKeys(keys);
  };

  const onNodeSelect = (keys: any, info: any) => {
    console.log('keys...', keys, info);
  };

  // React.useEffect(() => {
  //   console.log('treeData...', treeData);
  // }, []);

  return (
    <>
      <Tree
        treeData={treeData}
        onCheck={onNodeCheck}
        onSelect={onNodeSelect}
        showIcon
        checkedKeys={checkedKeys}
        columnWidth={200}
      />
    </>
  );
};
