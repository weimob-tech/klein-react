import React from 'react';

import TreeNodeItem from './treeNode';
import {
  onTreeNodeCheck,
  onTreeNodeSelect,
  getNodeKeys,
  getExportCheckedKeys,
} from './utils/treeFunctions';
import { traverseTreeNode } from './utils/traverseUtils';
import {
  getNodeIsLeaf,
  calcEndCheckedKeys,
  getTrulyKey,
  getCheckedNodes,
  _HTREE_SPLIT_,
  __DEFAULT_FIELDNAMES__,
} from './utils/_utils';
import type {
  TreeNode,
  TreeProps,
  Key,
  CheckboxChangeEvent,
  KeyToTreeNodeMap,
  DataNode,
  CheckedInfo,
} from './interface';

export interface HorizontalTreeProps
  extends Omit<
    TreeProps,
    | 'expandedKeys'
    | 'checkedKeys'
    | 'defaultCheckedKeys'
    | 'defaultExpandedKeys'
    | 'selectedKeys'
    | 'defaultSelectedKeys'
    | 'onExpand'
    | 'onDrop'
    | 'onDragEnd'
    | 'onDragEnter'
    | 'onDragLeave'
    | 'onDragOver'
    | 'onDragStart'
  > {
  /** 列宽度 */
  columnWidth?: number;
  /** 列样式 */
  columnStyle?: React.CSSProperties;
  /** (受控）选中复选框的树节点 */
  checkedKeys?: Key[][];
  /** 默认选中复选框的树节点 */
  defaultCheckedKeys?: Key[][];
  /** 勾选树节点触发 */
  onCheck?: (keys: Key[][], info: CheckedInfo) => void;
}

function getNextLevelArray(
  treeNodesLevelArray: TreeNode[][],
  expandedNode: TreeNode,
) {
  const nextLevel = expandedNode.level! + 1;
  // 往下找children，展开当前节点的下一个节点
  if (expandedNode.children) {
    treeNodesLevelArray[nextLevel] = expandedNode.children;
  } else {
    treeNodesLevelArray[nextLevel] = [];
  }
  treeNodesLevelArray[nextLevel + 1] = [];
  return treeNodesLevelArray;
}

function getTreeNodesLevelArray(
  treeData: TreeNode[],
  fieldNames: HorizontalTreeProps['fieldNames'] = __DEFAULT_FIELDNAMES__,
  keyToTreeNodeMapRef: React.MutableRefObject<KeyToTreeNodeMap>,
  numberKeysSetRef: React.MutableRefObject<Set<Key>>,
  expandedKey?: Key,
): TreeNode[][] {
  const temp = [];
  const data = traverseTreeNode(
    treeData,
    fieldNames,
    keyToTreeNodeMapRef.current,
    numberKeysSetRef.current,
    true,
  );
  temp[0] = data;
  if (!expandedKey) return temp;
  const expandedNode = keyToTreeNodeMapRef.current.get(expandedKey);
  if (expandedNode) {
    let curNode = expandedNode;
    let curLevel = expandedNode.level!;
    // 往下找children，展开当前节点的下一个节点
    if (curNode.children) {
      temp[curLevel + 1] = curNode.children;
    }
    // 往上找parent，展开当前节点的所有父节点
    while (curNode.parent && curLevel > 0) {
      temp[curLevel] = curNode.parent.children as TreeNode[];
      curNode = curNode.parent;
      curLevel -= 1;
    }
  }
  return temp;
}

const HorizontalTreeRenderFunction: React.ForwardRefRenderFunction<
  unknown,
  HorizontalTreeProps
> = (props, ref) => {
  const {
    treeData,
    // icon,
    style,
    className,
    columnWidth,
    showIcon,
    fieldNames = __DEFAULT_FIELDNAMES__,
    // selectedKeys: outerSelectedKeys = [],
    checkedKeys: outerCheckedKeys = [[]],
    // expandedKeys: outerExpandedKeys = [],
    defaultCheckedKeys = [[]],
    // defaultSelectedKeys = [],
    // defaultExpandedKeys = [],
    checkable = true,
    columnStyle = {},
    onSelect,
    onCheck,
    loadData,
    prefixCls,
  } = props;

  const endFieldNames = { ...__DEFAULT_FIELDNAMES__, ...fieldNames };

  // 每一层保存一个selectedkey
  const [selectedKeys, setSelectedKeys] = React.useState<Key[]>(
    [],
    // outerSelectedKeys || defaultSelectedKeys,
  );
  const [halfCheckedKeys, setHalfCheckedKeys] = React.useState<Set<Key>>(
    new Set(),
  );
  const [checkedKeys, setCheckedKeys] = React.useState<Set<Key>>(
    calcEndCheckedKeys(outerCheckedKeys || defaultCheckedKeys),
  );
  // const [expandedKeys, setExpandedKeys] = React.useState<Key[]>(
  //   outerExpandedKeys || defaultExpandedKeys,
  // );

  const [curLoadingKey, setCurLoadingKey] = React.useState<Key | null>(null);

  const keyToTreeNodeMapRef = React.useRef<KeyToTreeNodeMap>(new Map());

  const numberKeysSetRef = React.useRef<Set<Key>>(new Set());

  // 保存每个层级的节点数
  const [treeNodesLevelArray, setTreeNodesLevelArray] = React.useState<
    TreeNode[][]
  >(
    treeData
      ? getTreeNodesLevelArray(
          treeData as TreeNode[],
          endFieldNames,
          keyToTreeNodeMapRef,
          numberKeysSetRef,
        )
      : [],
  );

  // 当前操作的key
  const currentKeyRef = React.useRef<Key>();
  // 保存上一次的treeData
  const prevTreeDataRef = React.useRef<DataNode[]>();
  // 保存上一次的checkedKeys
  const prevCheckedKeysRef = React.useRef<Key[][]>();
  // 保存当前选中的keys
  const checkedKeysRef = React.useRef<Set<Key>>(checkedKeys);
  // tree dom
  let horizontalTreeRef = React.useRef<HTMLDivElement>(null);
  if (ref) {
    horizontalTreeRef = ref as any;
  }

  // 按需加载时更新数据
  const updateNodesLevelArray = (expandeds?: Key[]) => {
    const lastKey = expandeds ? expandeds[expandeds.length - 1] : undefined;
    const levelArr = getTreeNodesLevelArray(
      (treeData || []) as TreeNode[],
      endFieldNames,
      keyToTreeNodeMapRef,
      numberKeysSetRef,
      lastKey,
    );
    setTreeNodesLevelArray(levelArr);
  };

  const updateKeys = (updateCheckedKeys: Set<Key>) => {
    const [endKeys, halfKeys] = getNodeKeys(
      updateCheckedKeys,
      keyToTreeNodeMapRef.current,
    );
    setCheckedKeys(endKeys);
    setHalfCheckedKeys(halfKeys);
    return endKeys;
  };

  if ('treeData' in props && prevTreeDataRef.current !== treeData) {
    updateNodesLevelArray([currentKeyRef.current!]);
  }

  if (
    'checkedKeys' in props &&
    outerCheckedKeys !== prevCheckedKeysRef.current
  ) {
    const endCheckedKeys = calcEndCheckedKeys(outerCheckedKeys);
    // if (endCheckedKeys.size === 0) {
    //   setCheckedKeys(endCheckedKeys);
    // } else {
    updateKeys(endCheckedKeys);
    // }
  }

  // if ('expandedKeys' in props && expandedKeys !== outerExpandedKeys) {
  //   setExpandedKeys(outerExpandedKeys);
  // }
  prevTreeDataRef.current = treeData;
  prevCheckedKeysRef.current = outerCheckedKeys;
  checkedKeysRef.current = checkedKeys;

  const nodeSelect = (
    e: React.MouseEvent<HTMLSpanElement>,
    treeNode: TreeNode,
    checkedKeysSelected?: Set<Key>,
  ) => {
    let cKeysSelected = [] as Key[][];
    if (checkedKeysSelected) {
      const [
        exportCheckedKeys,
        exportFilterAnCheckedKeys,
      ] = getExportCheckedKeys(
        checkedKeysSelected,
        keyToTreeNodeMapRef.current,
      );
      // cKeysSelected = [...cKeysSelected].map(
      //   (key) => getTrulyKey(key, numberKeysSetRef.current)[0],
      // );
      cKeysSelected = exportFilterAnCheckedKeys.map(
        (key) => getTrulyKey(key, numberKeysSetRef.current)[0],
      );
    }
    const [keys, selectedTreeNodes] = onTreeNodeSelect(
      treeNode,
      new Set([...selectedKeys]),
      endFieldNames,
      keyToTreeNodeMapRef.current,
      false,
      numberKeysSetRef.current,
    );
    selectedKeys[treeNode.level || 0] = keys[0];
    // 清除当前层级后面所有的key
    const newSelectedKeys = selectedKeys.slice(0, treeNode.level! + 1);

    setSelectedKeys(newSelectedKeys);

    const [exportKeys] = getTrulyKey(
      treeNode.nodeKey,
      numberKeysSetRef.current,
    );

    onSelect?.(
      exportKeys,
      {
        event: 'select',
        selected: !treeNode.selected,
        nativeEvent: e.nativeEvent,
        selectedNodes: selectedTreeNodes,
      },
      cKeysSelected,
    );
  };

  const onNodeCheck = (e: CheckboxChangeEvent, treeNode: TreeNode) => {
    const newCheckedKeysSet = new Set([...checkedKeys]);

    const [
      exportCheckedKeys,
      exportFilterAnCheckedKeys,
      halfKeysSet,
    ] = onTreeNodeCheck(
      treeNode,
      e.target.checked,
      newCheckedKeysSet,
      keyToTreeNodeMapRef.current,
    );

    const getTargetKeys = (targetKeys: Key[]) =>
      targetKeys.map((key) => getTrulyKey(key, numberKeysSetRef.current)[0]);

    const [checkedTreeNode] = getCheckedNodes(
      treeNode,
      newCheckedKeysSet,
      fieldNames,
      keyToTreeNodeMapRef.current,
      numberKeysSetRef.current,
    );

    if (!('checkedKeys' in props)) {
      setCheckedKeys(newCheckedKeysSet);
    }
    setHalfCheckedKeys(halfKeysSet);

    onCheck?.(getTargetKeys(exportCheckedKeys), {
      checked: e.target.checked,
      checkedNodes: checkedTreeNode!,
      event: 'check',
      nativeEvent: e.nativeEvent,
      checkedChildrenKeys: getTargetKeys(exportFilterAnCheckedKeys),
    });
  };

  const onNodeSelect = (
    e: React.MouseEvent<HTMLSpanElement>,
    treeNode: TreeNode,
  ) => {
    const copyTreeNode = {
      ...treeNode,
      key: getTrulyKey(treeNode.nodeKey, numberKeysSetRef.current)[1],
    };
    currentKeyRef.current = copyTreeNode.nodeKey;
    // 如果有children就代表数据已经加载过了
    if (loadData && !copyTreeNode.children && !copyTreeNode.isLeaf) {
      setCurLoadingKey(copyTreeNode.nodeKey);
      loadData(copyTreeNode, copyTreeNode.level! + 1).then(() => {
        // 数据异步回来之后这里需要获取到最新的treeNode
        const newTreeNode = keyToTreeNodeMapRef.current.get(
          copyTreeNode.nodeKey,
        );
        setCurLoadingKey(null);
        if (!newTreeNode) return;
        const endCheckedKeys = updateKeys(checkedKeysRef.current);
        nodeSelect(e, newTreeNode, endCheckedKeys);
      });
      return;
    }
    setTreeNodesLevelArray(
      getNextLevelArray([...treeNodesLevelArray], copyTreeNode),
    );
    nodeSelect(e, copyTreeNode, checkedKeys);
  };

  const renderTreeNodes = (
    treeNodes: TreeNode[],
  ): null | React.ReactNodeArray => {
    if (!treeNodes || !treeNodes.length) return null;
    return treeNodes?.map((item, index) => {
      return (
        <TreeNodeItem
          {...item}
          // isLeaf={(!item.children && !loadData) || item.isLeaf}
          isLeaf={getNodeIsLeaf(item, !!loadData)}
          key={item.nodeKey}
          showIcon={showIcon}
          // icon={icon}
          checkable={checkable}
          loading={loadData && item.nodeKey === curLoadingKey && !item.children}
          selected={selectedKeys.includes(item.nodeKey)}
          checked={checkedKeys.has(item.nodeKey)}
          indeterminate={halfCheckedKeys.has(item.nodeKey)}
          onNodeSelect={onNodeSelect}
          onNodeCheck={onNodeCheck}
        />
      );
    });
  };

  return (
    <div className={className} style={style} ref={horizontalTreeRef}>
      {treeNodesLevelArray?.length
        ? treeNodesLevelArray.map((levelNodes, index) =>
            levelNodes?.length ? (
              <div
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                className={`${prefixCls}-nodes`}
                style={
                  typeof columnWidth !== 'undefined'
                    ? {
                        // flex: `0 0 ${columnWidth}px`,
                        // maxWidth: columnWidth,
                        ...columnStyle,
                        width: columnWidth,
                      }
                    : columnStyle
                }
              >
                {renderTreeNodes(levelNodes)}
              </div>
            ) : null,
          )
        : null}
    </div>
  );
};

const HorizontalTree = React.forwardRef(HorizontalTreeRenderFunction);

export default HorizontalTree;
