import React from 'react';
import { Tree, Popconfirm, Icon } from '@klein-design/klein-react';

const { EllipsisLine } = Icon;

const treeData = [
  {
    title: '节点 0-0',
    key: '0-0',
    disabled: true,
    renderExtra: (node: any) => {
      console.log('renderExtra node...', node);
      return (
        <Popconfirm content={node.key}>
          <EllipsisLine style={{ fontSize: 16 }} />
        </Popconfirm>
      );
    },
    children: [
      {
        title: '节点 0-0-0',
        key: '0-0-0',
        disableCheckbox: true,
        children: [
          { title: '节点 0-0-0-0', key: '0-0-0-0', isLeaf: true },
          { title: '节点 0-0-0-1', key: '0-0-0-1', isLeaf: true },
          { title: '节点 0-0-0-2', key: '0-0-0-2', isLeaf: true },
        ],
      },
      {
        title: '节点 0-0-1',
        key: '0-0-1',
        disabled: true,
        disableCheckbox: false,
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
      { title: '节点 0-1-0', key: '0-1-0-0', isLeaf: true },
      { title: '节点 0-1-1', key: '0-1-0-1', isLeaf: true },
      { title: '节点 0-1-2', key: '0-1-0-2', isLeaf: true },
    ],
  },
  {
    title: '节点 0-2',
    key: '0-2',
    isLeaf: true,
  },
];

export default () => {
  const [checkedKeys, setCheckedKeys] = React.useState<(number | string)[]>([
    '0-0-0-0',
  ]);

  const onNodeCheck = (keys: any, info: any) => {
    console.log('keys...', keys, info);
    setCheckedKeys(keys);
  };

  const onNodeSelect = (keys: any, info: any) => {
    console.log('keys...', keys, info);
  };

  const onNodeExpand = (keys: any) => {
    console.log('keys...', keys);
  };

  React.useEffect(() => {
    setCheckedKeys(['0-0-0-0', '0-0-0-1']);
  }, []);

  return (
    <>
      <Tree
        checkable
        direction="vertical"
        autoExpandParent
        checkedKeys={checkedKeys}
        // defaultExpandAll={true}
        defaultExpandAll
        // allLineClickable
        // defaultExpandedKeys={['0-0-0']}
        treeData={treeData}
        onCheck={onNodeCheck}
        onSelect={onNodeSelect}
        onExpand={onNodeExpand}
      />
    </>
  );
};
