import React from 'react';
import { TreeSelect } from '@klein-design/klein-react';

const dig = (path = '0', level = 3) => {
  const list = [];
  for (let i = 0; i < 10; i += 1) {
    const key = `${path}-${i}`;
    const treeNode: any = {
      title: key,
      value: key,
    };

    if (level > 0) {
      treeNode.children = dig(key, level - 1);
    }

    list.push(treeNode);
  }
  return list;
};

export default () => {
  return (
    <TreeSelect
      dropdownMatchSelectWidth={false}
      treeData={dig()}
      listHeight={300}
      // treeDefaultExpandAll
      placeholder="请选择"
      style={{ width: '250px' }}
    />
  );
};
