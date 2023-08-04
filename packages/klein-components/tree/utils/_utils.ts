import { Key, TreeNode, FieldNames, KeyToTreeNodeMap } from '../interface';
import { traverse } from './traverseUtils';

export const _HTREE_SPLIT_ = '__HTREE_SPLIT__';

// 拖拽时，被拖拽元素横向移动大于20px时，作为目标节点子节点
export const __AsTargetChildXOffset__ = 20;

// 和第一个节点互换位置
export const __AsTargetSblingYOffset__ = 20;

export const __DEFAULT_FIELDNAMES__ = {
  title: 'title',
  key: 'key',
  children: 'children',
};

export function getNodeIsLeaf(treeNode: TreeNode, loadData: boolean) {
  const { isLeaf } = treeNode;
  if (typeof isLeaf === 'boolean') return isLeaf;
  if (treeNode.children) {
    return false;
  }
  return true;
}

export function calcEndCheckedKeys(checkedKeys: Key[][]) {
  return new Set(
    checkedKeys
      .map((keyArr) => {
        if (keyArr && keyArr.length) {
          return keyArr.join(_HTREE_SPLIT_);
        }
        return '';
      })
      .filter(Boolean),
  );
}

export function getExpandedKeys(
  treeData: TreeNode[],
  expandedKeys: Key[],
  expandAll?: boolean,
  autoExpandParent?: boolean,
) {
  traverse(treeData, (node) => {
    // 全部默认展开
    if (
      expandAll &&
      node.children?.length &&
      !expandedKeys.includes(node.nodeKey)
    ) {
      expandedKeys.push(node.nodeKey);
      return;
    }

    let nParent = node.parent;
    while (
      !expandAll &&
      autoExpandParent &&
      nParent &&
      expandedKeys.includes(node.nodeKey)
    ) {
      expandedKeys.push(nParent.nodeKey);
      nParent = nParent.parent;
    }
  });

  return [...expandedKeys];
}

export function getNumberKey(numberKeysSet: Set<Key>, key: string) {
  const isNumber = numberKeysSet.has(key);
  return isNumber ? parseInt(key, 10) : key;
}

export function getTrulyKey(key: Key, numberKeysSet?: Set<Key>): [Key[], Key] {
  if (!numberKeysSet) return [[key], key];
  if (typeof key !== 'string') return [[key], key];
  const path = (key as string).split(_HTREE_SPLIT_);
  const endPath = path.map((p) => getNumberKey(numberKeysSet, p));
  return [endPath, endPath[endPath.length - 1]];
}

// 根据选中的key值输出选中的节点
export function getCheckedNodes(
  treeNode: TreeNode,
  checkedKeys: Set<Key>,
  fieldNames: FieldNames,
  keyToTreeNodeMap: KeyToTreeNodeMap,
  numberKeysSet?: Set<Key>,
) {
  const checkedNodes = Array.from(checkedKeys)
    .map((key) => keyToTreeNodeMap.get(key)!)
    .filter(Boolean);
  return handleExportNodes(checkedNodes, fieldNames, treeNode, numberKeysSet);
}

// 处理输出的checkedNodes或者selectedNodes
export function handleExportNodes(
  target: TreeNode[],
  fieldNames: FieldNames,
  targetNode?: TreeNode,
  numberKeysSet?: Set<Key>,
): [TreeNode[], TreeNode] {
  const result: TreeNode[] = [];
  function getNewTreeNode(node: TreeNode) {
    const obj: any = {
      level: node.level,
      [fieldNames.title!]: node.title,
      [fieldNames.key!]: getTrulyKey(node.nodeKey, numberKeysSet)?.[1],
      [fieldNames.children!]: node.children,
    };

    helper(obj, node);
    return obj;
  }

  function helper(newNode: TreeNode, node: TreeNode) {
    if (!node.children) return;
    newNode.children = node.children.map((item) => {
      const newItem = getNewTreeNode(item);
      if (item.children) {
        helper(newItem, item);
      }
      return newItem;
    });
  }

  target?.forEach((node) => {
    const newNode = getNewTreeNode(node);
    result.push(newNode);
  });
  return [result, targetNode && getNewTreeNode(targetNode)];
}
