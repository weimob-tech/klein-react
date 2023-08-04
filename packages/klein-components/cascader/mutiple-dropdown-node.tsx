import React from 'react';
import type { HorizontalTreeProps } from '../tree';
import Tree from '../tree';

export interface MutipleDropdownProps extends HorizontalTreeProps {}

const MutipleDropdown: React.FC<MutipleDropdownProps> = (props) => {
  const {
    treeData,
    checkedKeys,
    onCheck,
    onSelect,
    fieldNames,
    columnWidth,
    columnStyle,
    loadData,
  } = props;

  const endFieldNames = {
    title: fieldNames!['label' as 'title'],
    key: fieldNames!['value' as 'key'],
    children: fieldNames!.children,
  };

  return (
    <Tree
      direction="horizontal"
      treeData={treeData}
      loadData={loadData}
      checkedKeys={checkedKeys || []}
      fieldNames={endFieldNames}
      onCheck={onCheck}
      onSelect={onSelect}
      columnWidth={columnWidth}
      columnStyle={columnStyle}
    />
  );
};

export default MutipleDropdown;
