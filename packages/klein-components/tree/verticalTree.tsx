import React from 'react';

import type { SearchProps } from '../input';
import Input from '../input';
import TreeNodeItem from './verticalTreeNode';
import VirtualList from '../components/rc-virtual-list';
import {
  onTreeNodeCheck,
  onTreeNodeSelect,
  getNodeKeys,
} from './utils/treeFunctions';
import {
  __DEFAULT_FIELDNAMES__,
  __AsTargetChildXOffset__,
  __AsTargetSblingYOffset__,
  handleExportNodes,
  getExpandedKeys,
  getCheckedNodes,
  getNodeIsLeaf,
} from './utils/_utils';
import { traverseTreeNode, traverse } from './utils/traverseUtils';
import type {
  TreeNode,
  TreeProps,
  KeyToTreeNodeMap,
  TitleToKeyMap,
  Key,
  SearchItem,
  Hover,
  CheckboxChangeEvent,
  DataNode,
  DragEventHandler,
  DragOverInfo,
  CheckedInfo,
} from './interface';

export interface VerticalTreeProps extends TreeProps {
  /** 当一整行点击时触发check或者select效果 */
  allLineClickable?: boolean;
  /** 是否展示搜索框, 无法配合按需加载使用 */
  showSearch?: boolean;
  // showTreeList?: boolean;
  searchList?: React.ReactNode[][];
  /** 搜索框的值 */
  searchValue?: any;
  /** 搜索时的展示类型 */
  searchListType?: 'tree-list' | 'list';
  /** 树节点hover时的样式 */
  hover?: Hover;
  /** 是否支持拖拽 */
  draggable?: boolean;
  /** 设置虚拟滚动容器高度 */
  height?: number;
  /** 设置 false 时关闭虚拟滚动 */
  virtual?: boolean;
  /** 是否显示连接线 */
  showLine?: boolean;
  /** 默认全部展开 */
  defaultExpandAll?: boolean;
  /** 自定义search的表现形式 */
  customSearch?: boolean;
  /** 自动展开父级 */
  autoExpandParent?: boolean;
  /** search输入框placeholder */
  placeholder?: string;
  searchProps?: SearchProps;
  /** 搜索框值变化时的回调 */
  renderTreeNode?: (node: TreeNode) => React.ReactNode;
  /** 搜索框值变化时的回调 */
  onSearchChange?: (value: string, list?: React.ReactNode[]) => void;
  /** 勾选树节点触发 */
  onCheck?: (keys: Key[], info: CheckedInfo) => void;
  /** 点击搜索项时的回调 */
  onSearchListSelect?: (
    path: React.ReactNode[],
    e: React.MouseEvent<HTMLDivElement>,
  ) => void;
}

const dragInitData = {
  dragStartNode: null,
  dragOverNode: null,
  dragStartPosition: null,
};

const VerticalTreeRenderFunction: React.ForwardRefRenderFunction<
  unknown,
  VerticalTreeProps
> = (props, ref) => {
  const {
    hover,
    multiple,
    className,
    showSearch,
    checkable,
    draggable,
    virtual,
    height: listHeight,
    allLineClickable,
    prefixCls,
    switcherIcon,
    searchListType,
    placeholder,
    searchValue: outerSearchValue,
    searchList: outerSearchList,
    treeData: outerTreeData,
    checkedKeys: outerCheckedKeys,
    selectedKeys: outerSelectedKeys,
    expandedKeys: outerExpandedKeys,
    defaultCheckedKeys = [],
    defaultSelectedKeys = [],
    defaultExpandedKeys = [],
    defaultExpandAll,
    autoExpandParent,
    fieldNames = __DEFAULT_FIELDNAMES__,
    customSearch,
    onDrop,
    showIcon,
    showLine,
    searchProps,
    renderTreeNode,
    onDragEnd,
    onDragEnter,
    onDragLeave,
    onDragOver,
    onDragStart,
    onSelect,
    onCheck,
    onExpand,
    onSearchChange,
    onSearchListSelect,
    loadData,
    ...reset
  } = props;

  const endFieldNames = { ...__DEFAULT_FIELDNAMES__, ...fieldNames };

  // key -> node
  const keyToTreeNodeMapRef = React.useRef<KeyToTreeNodeMap>(new Map());
  // title -> key
  const titleToKeyMapRef = React.useRef<TitleToKeyMap>(new Map());
  // key number set
  const numberKeysSetRef = React.useRef<Set<Key>>(new Set());
  // tree dom
  const verticalTreeRef = React.useRef<HTMLDivElement>(null);

  // 保存上一次的expandedKeys
  const prevExpandedKeysRef = React.useRef<Key[]>();
  // 保存上一次的checkedKeys
  const prevCheckedKeysRef = React.useRef<Key[]>();
  // 保存当前选中的keys
  const checkedKeysRef = React.useRef<Key[]>();
  // 保存上一次的treeData
  const prevTreeDataRef = React.useRef<DataNode[]>();
  // 保存转换后的treeData
  const traversedTreeDataRef = React.useRef<TreeNode[]>([]);

  // 防止每次更新都对outerTreeData进行数据转换
  if (
    typeof outerTreeData !== 'undefined' &&
    outerTreeData !== prevTreeDataRef.current
  ) {
    traversedTreeDataRef.current = traverseTreeNode(
      outerTreeData as TreeNode[],
      endFieldNames,
      keyToTreeNodeMapRef.current,
      numberKeysSetRef.current,
      false,
      titleToKeyMapRef.current,
    );
  }

  const [searchList, setSearchList] = React.useState<React.ReactNode[][]>([]);
  const [curLoadingKey, setCurLoadingKey] = React.useState<Key | null>(null);
  const [checkedKeys, setCheckedKeys] = React.useState<Key[]>(
    outerCheckedKeys || defaultCheckedKeys,
  );

  const [expandedKeys, setExpandedKeys] = React.useState<Key[]>(
    getExpandedKeys(
      traversedTreeDataRef.current,
      (outerExpandedKeys || defaultExpandedKeys) as Key[],
      // 默认展开并且不受控
      defaultExpandAll && typeof outerExpandedKeys === 'undefined',
      autoExpandParent,
    ),
  );

  const [selectedKeys, setSelectedKeys] = React.useState<Key[]>(
    outerSelectedKeys || defaultSelectedKeys,
  );
  const [halfCheckedKeys, setHalfCheckedKeys] = React.useState<Set<Key>>(
    new Set(),
  );

  const [inputValue, setInputValue] = React.useState<any>(outerSearchValue);

  const [dargoverInfo, setDargoverInfo] = React.useState<DragOverInfo>({
    dragBottom: false,
  });

  const expandedKeysSet = new Set(expandedKeys);
  const checkedKeysSet = new Set(checkedKeys);
  const selectedKeysSet = new Set(selectedKeys);

  //保存拖拽信息
  const dragDataRef = React.useRef<{
    dragStartNode: TreeNode | null;
    dragOverNode: TreeNode | null;
    dragStartPosition: number[] | null;
  }>(dragInitData);

  const updateKeys = (updateCheckedKeys: Set<Key>) => {
    const [endKeys, halfKeys] = getNodeKeys(
      updateCheckedKeys,
      keyToTreeNodeMapRef.current,
    );
    setCheckedKeys([...endKeys]);
    setHalfCheckedKeys(halfKeys);
  };

  if (
    typeof outerSearchValue !== 'undefined' &&
    outerSearchValue !== inputValue
  ) {
    setInputValue(outerSearchValue);
  }
  if (
    typeof outerSearchList !== 'undefined' &&
    outerSearchList !== searchList
  ) {
    setSearchList(outerSearchList);
  }
  if (
    typeof outerCheckedKeys !== 'undefined' &&
    outerCheckedKeys !== prevCheckedKeysRef.current
  ) {
    updateKeys(new Set([...outerCheckedKeys]));
  }
  if (
    typeof outerExpandedKeys !== 'undefined' &&
    outerExpandedKeys !== prevExpandedKeysRef.current
  ) {
    setExpandedKeys(
      getExpandedKeys(
        traversedTreeDataRef.current,
        (outerExpandedKeys || defaultExpandedKeys) as Key[],
        false,
        autoExpandParent,
      ),
    );
  }
  if (
    typeof outerSelectedKeys !== 'undefined' &&
    outerSelectedKeys !== selectedKeys
  ) {
    setSelectedKeys(outerSelectedKeys);
  }

  prevCheckedKeysRef.current = outerCheckedKeys;
  prevExpandedKeysRef.current = outerExpandedKeys;
  prevTreeDataRef.current = outerTreeData;
  checkedKeysRef.current = checkedKeys;

  const nodeExpand = (node: TreeNode) => {
    const { expanded } = node;
    if (!expanded) {
      expandedKeysSet.add(node.nodeKey);
    } else {
      expandedKeysSet.delete(node.nodeKey);
    }

    if (typeof outerExpandedKeys === 'undefined') {
      setExpandedKeys([...expandedKeysSet]);
    }
    onExpand?.([...expandedKeysSet], {
      expand: !!expanded,
      node,
    });
  };

  const onNodeExpand = (treeNode: TreeNode) => {
    const copyTreeNode = {
      ...treeNode,
      key: treeNode.nodeKey,
    };
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
        updateKeys(checkedKeysSet);
        nodeExpand(newTreeNode);
      });
      return;
    }
    nodeExpand(copyTreeNode);
  };

  const onNodeSelect = (
    e: React.MouseEvent<HTMLSpanElement>,
    node: TreeNode,
  ) => {
    const [keys, selectedTreeNodes] = onTreeNodeSelect(
      node,
      selectedKeysSet,
      endFieldNames,
      keyToTreeNodeMapRef.current,
      multiple,
    );

    if (typeof outerSelectedKeys === 'undefined') {
      setSelectedKeys(keys);
    }

    onSelect?.(keys, {
      event: 'select',
      selected: !!node.selected,
      selectedNodes: selectedTreeNodes,
      nativeEvent: e.nativeEvent,
    });
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

    if (typeof outerCheckedKeys === 'undefined') {
      setCheckedKeys([...newCheckedKeysSet]);
      setHalfCheckedKeys(halfKeysSet);
    }

    const [checkedTreeNode] = getCheckedNodes(
      treeNode,
      checkedKeysSet,
      endFieldNames,
      keyToTreeNodeMapRef.current,
    );

    onCheck?.(exportCheckedKeys, {
      checked: e.target.checked,
      checkedNodes: checkedTreeNode!,
      event: 'check',
      nativeEvent: e.nativeEvent,
      checkedChildrenKeys: exportFilterAnCheckedKeys,
    });
  };

  const clearDragState = () => {
    setDargoverInfo({});
    dragDataRef.current = dragInitData;
  };

  const onNodeDragStart: DragEventHandler = (e, node) => {
    const { clientX, clientY } = e;
    // 设置当前正在拖拽的节点
    dragDataRef.current.dragStartNode = node;
    // 记录当前位置
    dragDataRef.current.dragStartPosition = [clientX, clientY];

    onDragStart?.({
      event: e,
      node,
    });
  };

  const onNodeDragEnter: DragEventHandler = (e, node) => {
    onDragEnter?.({
      event: e,
      node,
    });
  };

  const onNodeDragLeave: DragEventHandler = (e, node) => {
    onDragLeave?.({
      event: e,
      node,
    });
  };

  const onNodeDragOver: DragEventHandler = (e, node) => {
    e.preventDefault();

    const treeData = traversedTreeDataRef.current;
    const { clientX, clientY, currentTarget } = e;
    let isDragBottom,
      isDragTop = false;
    const { dragBottom, dragTop } = dargoverInfo;
    /* eslint-disable prefer-const */
    let {
      dragOverNode,
      dragStartNode,
      dragStartPosition,
    } = dragDataRef.current;
    if (!dragStartPosition) {
      dragStartPosition = [clientX, clientY];
    }
    const [startX] = dragStartPosition;

    // 目标节点为第一个节点（treeData[0]）并且被拖拽节点期望和该节点交换位置
    const { top, height } = (e.target as HTMLElement).getBoundingClientRect();
    if (treeData[0]?.nodeKey === node.nodeKey && clientY < top + height / 2) {
      isDragTop = true;
    } else {
      isDragTop = false;
    }

    // 大于20代表当前拖动节点将作为目标元素子节点
    if (clientX - startX >= __AsTargetChildXOffset__) {
      isDragBottom = true;
    } else {
      isDragBottom = false;
    }

    // 防止dragover重复执行
    if (
      dragOverNode?.nodeKey === node.nodeKey &&
      dragBottom === isDragBottom &&
      dragTop === isDragTop
    ) {
      return;
    }

    // 检测被拖拽的节点是否是目标节点的父节点
    let currentDragNodeIsFather = false;
    let temp: TreeNode['parent'] = node;
    while (temp) {
      if (dragStartNode?.nodeKey === temp.nodeKey) {
        currentDragNodeIsFather = true;
      }
      temp = temp.parent;
    }
    if (currentDragNodeIsFather) return;

    // 目标节点显示下划线
    // setInfoKey(node.nodeKey)
    setDargoverInfo({
      targetKey: node.nodeKey,
      dragBottom: isDragBottom,
      dragTop: isDragTop,
    });
    // 当前节点未展开则展开节点
    if (!expandedKeysSet.has(node.nodeKey)) {
      onNodeExpand(node);
    }
    dragDataRef.current.dragOverNode = node;

    onDragOver?.({
      node,
      event: e,
    });
  };

  const onNodeDragEnd: DragEventHandler = (e, node) => {
    clearDragState();
    onDragEnd?.({
      event: e,
      node,
    });
  };

  const onNodeDrop: DragEventHandler = (e, node) => {
    let { dragStartNode } = dragDataRef.current;
    if (dragStartNode?.nodeKey === node.nodeKey) {
      clearDragState();
      return;
    }

    const { dragBottom, dragTop } = dargoverInfo;
    const [[exportDragNode, exportDropNode]] = handleExportNodes(
      [dragStartNode!, node],
      endFieldNames,
    );
    let dropPosition: -1 | 0 | 1 = 1;

    if (dragBottom) {
      dropPosition = 0;
    }
    if (dragTop) {
      dropPosition = -1;
    }

    onDrop?.({
      dragNode: exportDragNode,
      node: exportDropNode,
      dropPosition,
      event: e,
    });

    clearDragState();
  };

  const onInputChange = (val: string) => {
    // 无法配合按需加载使用
    if (loadData || customSearch) return;

    const eKeysSet = new Set() as Set<Key>;
    const endSearchPanelList: React.ReactNode[][] = [];

    titleToKeyMapRef.current.forEach((value, title) => {
      if (title.includes(val)) {
        const nodeKey = titleToKeyMapRef.current.get(title);
        if (nodeKey) {
          eKeysSet.add(nodeKey);
        }
      }
    });
    // 如果是展示成tree-list形式，内部逻辑
    if (searchListType === 'tree-list') {
      setExpandedKeys(
        getExpandedKeys(
          traversedTreeDataRef.current,
          [...(outerExpandedKeys || []), ...(val ? eKeysSet : [])],
          false,
          autoExpandParent,
        ),
      );
    }
    // 如果是展示成list形式，允许受控
    if (searchListType === 'list' && val) {
      const endKeysSet = new Set([...eKeysSet]);
      // 过滤数据
      eKeysSet.forEach((nodeKey) => {
        const targetNode = keyToTreeNodeMapRef.current.get(nodeKey);
        if (!targetNode) return;
        let parent = targetNode.parent;
        while (parent) {
          if (endKeysSet.has(parent.nodeKey)) {
            endKeysSet.delete(parent.nodeKey);
          }
          parent = parent.parent;
        }
      });
      endKeysSet.forEach((nodeKey) => {
        const currentPath: React.ReactNode[] = [];
        const targetNode = keyToTreeNodeMapRef.current.get(nodeKey);
        if (targetNode) {
          // 组装listpanel的数据
          currentPath.push(targetNode.title);
          let parent = targetNode.parent;
          while (parent) {
            currentPath.unshift(parent.title);
            parent = parent.parent;
          }
          let children = targetNode.children;
          traverse(
            children,
            (node) => {
              currentPath.push(node.title);
            },
            () => currentPath.pop(),
          );
          endSearchPanelList.push(currentPath);
        }
      });
    }

    if (typeof outerSearchList === 'undefined') {
      setSearchList(endSearchPanelList);
    }

    if (typeof outerSearchValue === 'undefined') {
      setInputValue(val);
    }

    onSearchChange?.(val, endSearchPanelList);
  };

  const renderSearchedTitle = (title: React.ReactNode, searchValue: string) => {
    if (
      searchValue &&
      typeof title === 'string' &&
      title.includes(searchValue)
    ) {
      const index = title.indexOf(searchValue);
      const leftStr = title.slice(0, index);
      const rightStr = title.slice(index + searchValue.length, title.length);
      const searchedStr = title.slice(index, index + searchValue.length);

      return (
        <>
          {leftStr}
          <span className={`${prefixCls}-searching`}>{searchedStr}</span>
          {rightStr}
        </>
      );
    }

    return title;
  };

  const renderSearch = () => {
    if (!showSearch) return null;
    return (
      <div className={`${prefixCls}-search-wrapper`}>
        <Input.Search
          className={`${prefixCls}-search`}
          // onSearch={onInputSearch}
          value={inputValue}
          onChange={(e) => onInputChange(e.target.value)}
          placeholder={placeholder}
          {...searchProps}
        />
      </div>
    );
  };

  React.useImperativeHandle(ref, () => ({
    onSearchChange: onInputChange,
    element: verticalTreeRef,
  }));

  /**
   * to do
   * 这里其实可以针对searchListPanel做个优化
   * searchListPanel的更新优先级较低
   * 因此依赖项都应该是deferredValue，比如searchList和inputValue
   */
  const renderSearchListPanel = () => {
    if (searchList?.length && searchListType === 'list' && inputValue !== '') {
      return (
        <div className={`${prefixCls}-searchListPanel`}>
          {searchList.map((path, outerIndex) => (
            <div
              key={outerIndex}
              className={`${prefixCls}-searchListPanel-item`}
              title={path.join('/')}
              onClick={(e) => onSearchListSelect?.(path, e)}
            >
              {path.map((title, index) => (
                <span key={index}>
                  {index === 0 ? '' : <span>&nbsp;/&nbsp;</span>}
                  {renderSearchedTitle(title, inputValue)}
                </span>
              ))}
            </div>
          ))}
        </div>
      );
    }
    return null;
  };

  const renderTreeList = () => {
    if (searchList.length) return null;

    const nodeList = [] as (TreeNode & {
      indexAtLevel: number;
      childrenLen: number;
    })[];
    const treeData = traversedTreeDataRef.current;

    const renderTreeNodes = (children?: TreeNode[]) => {
      if (!children || !children.length) return;
      children.forEach((treeNode, index) => {
        // 当前节点层级不在第一级并且父级key不展开时
        if (
          treeNode.level !== 0 &&
          treeNode.parent &&
          !expandedKeysSet.has(treeNode.parent.nodeKey)
        ) {
          return;
        }
        nodeList.push({
          indexAtLevel: index,
          childrenLen: children.length,
          ...treeNode,
        });
        renderTreeNodes(treeNode.children);
      });

      return;
    };

    renderTreeNodes(treeData);

    return (
      <VirtualList
        itemKey="key"
        itemHeight={32}
        data={nodeList}
        height={listHeight}
        virtual={virtual}
        prefixCls={`${prefixCls}-list`}
      >
        {(treeNode) => {
          return (
            <TreeNodeItem
              {...treeNode}
              fieldNames={endFieldNames}
              searchValue={inputValue}
              hover={hover}
              showIcon={showIcon}
              checkable={checkable}
              draggable={draggable}
              showLine={showLine}
              switcherIcon={switcherIcon}
              dragoverInfo={dargoverInfo}
              allLineClickable={allLineClickable}
              checked={checkedKeysSet.has(treeNode.nodeKey)}
              expanded={expandedKeysSet.has(treeNode.nodeKey)}
              selected={selectedKeysSet.has(treeNode.nodeKey)}
              indeterminate={halfCheckedKeys.has(treeNode.nodeKey)}
              numberKeysSet={numberKeysSetRef.current}
              isLeaf={getNodeIsLeaf(treeNode, !!loadData)}
              loading={
                loadData &&
                treeNode.nodeKey === curLoadingKey &&
                !treeNode.children
              }
              renderTreeNode={renderTreeNode}
              renderSearchedTitle={renderSearchedTitle}
              onNodeSelect={onNodeSelect}
              onNodeExpand={onNodeExpand}
              onNodeCheck={onNodeCheck}
              onNodeDragStart={onNodeDragStart}
              onNodeDragEnd={onNodeDragEnd}
              onNodeDragEnter={onNodeDragEnter}
              onNodeDragOver={onNodeDragOver}
              onNodeDragLeave={onNodeDragLeave}
              onNodeDrop={onNodeDrop}
            />
          );
        }}
      </VirtualList>
    );
  };

  return (
    <div {...reset} className={className} ref={verticalTreeRef}>
      {renderSearch()}
      {renderTreeList()}
      {renderSearchListPanel()}
    </div>
  );
};

const VerticalTree = React.forwardRef(VerticalTreeRenderFunction);

VerticalTree.defaultProps = {
  // direction: 'horizontal'
  searchListType: 'tree-list',
  hover: 'longtest',
  multiple: false,
  checkable: false,
  virtual: true,
  autoExpandParent: false,
};

export default VerticalTree;
