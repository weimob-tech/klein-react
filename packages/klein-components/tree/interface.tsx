import { CheckboxChangeEvent } from '../checkbox/checkbox';

export { CheckboxChangeEvent };

export interface DragInfo {
  node: TreeNode;
  event: React.DragEvent<HTMLDivElement>;
}

export interface SearchItem {
  title: string[];
  key: Key[];
}

export interface DropInfo extends DragInfo {
  dragNode: TreeNode;
  dropPosition: Number;
}

export type DragEventHandler = (e: DragInfo['event'], node: TreeNode) => void;

export type Key = string | number | undefined;

export type KeyToTreeNodeMap = Map<Key, TreeNode>;
export type TitleToKeyMap = Map<string, Key>;

export type Hover = 'longtest' | 'medium' | 'shortest';

// 记录dragover时的信息
export interface DragOverInfo {
  // 作为目标节点子节点还是同级节点
  dragBottom?: boolean;
  // 是否和第一个节点进行交换
  dragTop?: boolean;
  // 目标节点key值
  targetKey?: Key;
}

export interface CheckedInfo {
  event: 'check';
  checked: boolean;
  // halfCheckedKeys: Key[];
  checkedNodes: TreeNode[];
  nativeEvent: CheckboxChangeEvent['nativeEvent'];
  // checkedNodesPositions: TreeNode[];
  checkedChildrenKeys?: Key[][] | Key[];
}

export interface SelectedInfo {
  event: 'select';
  selected: boolean;
  selectedNodes: TreeNode[];
  nativeEvent: MouseEvent;
  // node: EventDataNode;
}

export interface DataNode {
  key?: string | number;
  title?: React.ReactNode;
  disabled?: boolean;
  disableCheckbox?: boolean;
  children?: DataNode[];
  switcherIcon?: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
  isLeaf?: boolean;
  lineClickable?: boolean;
}

export interface TreeNode extends DataNode {
  nodeKey: Key;
  parent?: TreeNode | null;
  showIcon?: boolean;
  level?: number;
  selected?: boolean;
  checked?: boolean;
  expanded?: boolean;
  indeterminate?: boolean;
  children?: TreeNode[];
  loading?: boolean;
  checkable?: boolean;
  onNodeSelect?: (
    e: React.MouseEvent<HTMLSpanElement>,
    treeNode: TreeNode,
    key?: Key,
  ) => void;
  onNodeCheck?: (e: CheckboxChangeEvent, treeNode: TreeNode, key?: Key) => void;
}

export interface FieldNames {
  title?: string;
  key?: string;
  children?: string;
}

export interface TreeProps
  extends Omit<
    React.HTMLAttributes<HTMLDivElement>,
    | 'onSelect'
    | 'onDrop'
    | 'onDragEnd'
    | 'onDragEnter'
    | 'onDragLeave'
    | 'onDragOver'
    | 'onDragStart'
  > {
  /** 是否显示自定义icon	*/
  showIcon?: boolean;
  /** 节点前添加 Checkbox 复选框	*/
  checkable?: boolean;
  /** 自定义节点 title、key、children 的字段 */
  fieldNames?: FieldNames;
  /** treeNodes 数据 */
  treeData?: DataNode[];
  /** 树节点展开的方向 */
  direction?: 'horizontal' | 'vertical';
  /** 支持点选多个节点 */
  multiple?: boolean;
  /** 自定义树节点的展开/折叠图标 */
  switcherIcon?: React.ReactNode | React.ReactNode[];
  /** 自定义树节点图标 */
  // icon?: React.ReactNode;
  /** （受控）设置选中的树节点（横向树形组件不存在该属性） */
  selectedKeys?: Key[];
  /** （受控）选中复选框的树节点 */
  checkedKeys?: Key[];
  /** （受控）展开的树节点 */
  expandedKeys?: Key[];
  /** 默认选中的树节点（横向树形组件不存在该属性） */
  defaultSelectedKeys?: Key[];
  /** 默认选中复选框的树节点 */
  defaultCheckedKeys?: Key[];
  /** 默认展开的树节点 */
  defaultExpandedKeys?: Key[];
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
  /** 异步加载数据 */
  loadData?: (node: TreeNode, level: number) => Promise<any>;
  /** 点击树节点触发 */
  onSelect?: (
    selectedKeys: Key[],
    info: SelectedInfo,
    checkedKeys?: Key[][],
  ) => void;
  /** 展开树节点触发 */
  onExpand?: (
    expandedKeys: Key[],
    info: {
      expand: boolean;
      node: TreeNode;
    },
  ) => void;
  /** drop 触发时调用	 */
  onDrop?: (info: DropInfo) => void;
  /** dragend 触发时调用 */
  onDragEnd?: (info: DragInfo) => void;
  /** dragenter 触发时调用 */
  onDragEnter?: (info: DragInfo) => void;
  /** dragleave 触发时调用 */
  onDragLeave?: (info: DragInfo) => void;
  /** dragover 触发时调用	*/
  onDragOver?: (info: DragInfo) => void;
  /** 开始拖拽时调用 */
  onDragStart?: (info: DragInfo) => void;
}
