/*
 * desc: 树数据量大时考虑使用
 */

import React from 'react';
import { Tree } from '@klein-design/klein-react';

const dig = (path = '0', level = 3) => {
  const list = [];
  for (let i = 0; i < 10; i += 1) {
    const key = `${path}-${i}`;
    const treeNode: any = {
      title: key,
      key,
    };

    if (level > 0) {
      treeNode.children = dig(key, level - 1);
    }

    list.push(treeNode);
  }
  return list;
};

console.log('dig()...', dig());

export default () => {
  return (
    <>
      <Tree
        checkable
        direction="vertical"
        defaultExpandAll
        height={400}
        treeData={dig()}
      />
    </>
  );
};
