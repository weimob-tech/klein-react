import React from 'react';
import { TreeSelect } from '@klein-design/klein-react';

export default () => {
  const [additionalSelectOptions, setAdditionalSelectOptions] = React.useState<
    any[]
  >([]);
  const [value, setValue] = React.useState(0);

  const treeData = [
    {
      title: '节点 0-0',
      value: 0,
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
      value: 1,
      children: [
        { title: '节点 0-1-0', value: '0-1-0', isLeaf: true },
        { title: '节点 0-1-1', value: '0-1-1', isLeaf: true },
        { title: '节点 0-1-2', value: '0-1-2', isLeaf: true },
      ],
    },
    {
      title: '节点 0-2',
      value: 2,
      isLeaf: true,
    },
  ];

  React.useEffect(() => {
    setAdditionalSelectOptions([
      {
        title: 'nihao',
        value: 0,
      },
    ]);
  }, []);

  return (
    <TreeSelect
      treeData={treeData}
      showSearch
      allowClear
      onChange={(val) => {
        console.log('val...', val);
        setValue(val);
      }}
      additionalSelectOptions={additionalSelectOptions}
      // value={value}
      placeholder="请搜索"
      style={{ width: '250px' }}
    />
  );
};
