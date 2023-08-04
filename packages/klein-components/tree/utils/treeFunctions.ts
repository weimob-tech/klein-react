import { TreeNode, Key, FieldNames, KeyToTreeNodeMap } from '../interface';
import { handleExportNodes, getTrulyKey } from './_utils';
import { traverse } from './traverseUtils';

/**
 * 计算当前应该选中的节点
 * @param treeNode 当前节点
 * @param checked 当前节点的选中状态
 * @param checkedKeysSet 选中的节点key集合
 */
export function getCheckedKeysSet(
  treeNode: TreeNode,
  checked: boolean,
  checkedKeysSet: Set<Key>,
) {
  if (checked) {
    checkedKeysSet.add(treeNode.nodeKey);
    let parentNode = treeNode.parent;
    while (parentNode && !checkedKeysSet.has(parentNode.nodeKey)) {
      // 父节点的子节点是否全部选中
      if (
        parentNode.children?.every((child) => checkedKeysSet.has(child.nodeKey))
      ) {
        checkedKeysSet.add(parentNode.nodeKey);
      }
      parentNode = parentNode.parent;
    }
    // 改变子节点状态
    traverse(treeNode.children, (currentNode) => {
      checkedKeysSet.add(currentNode.nodeKey);
    });
  } else {
    checkedKeysSet.delete(treeNode.nodeKey);
    // 父节点状态也需要改变
    let parentNode = treeNode.parent;
    while (parentNode && checkedKeysSet.has(parentNode.nodeKey)) {
      checkedKeysSet.delete(parentNode.nodeKey);
      parentNode = parentNode.parent;
    }
    // 改变子节点状态
    traverse(treeNode.children, (currentNode) => {
      checkedKeysSet.delete(currentNode.nodeKey);
    });
  }
}

/**
 * @param checkedKeys 选中的节点key值集合
 * @param keyToTreeNodeMap key->treeNode的映射
 * @returns 半选的节点key值
 */
function getHalfCheckedKeysSet(
  checkedKeysSet: Set<Key>,
  keyToTreeNodeMap: KeyToTreeNodeMap,
) {
  const halfKeysSet: Set<Key> = new Set();
  checkedKeysSet.forEach((fKey) => {
    let node = keyToTreeNodeMap.get(fKey);

    while (node && node.parent) {
      const curParentNode = node.parent;
      // 父节点的子节点任意一个选中或者子节点任意一个为半选状态
      if (
        (!curParentNode.children?.every((child) =>
          checkedKeysSet.has(child.nodeKey),
        ) &&
          curParentNode.children?.some((child) =>
            checkedKeysSet.has(child.nodeKey),
          )) ||
        curParentNode.children?.some((child) => halfKeysSet.has(child.nodeKey))
      ) {
        halfKeysSet.add(curParentNode.nodeKey);
      }
      node = curParentNode;
    }
  });
  return halfKeysSet;
}

/**
 * 根据传入的checkedKeys计算出所有应该半选和全选的key
 * 传入的checkedKeys不一定就是全部选中的节点，可能只是部分
 * @param checkedKeys
 */
export function getNodeKeys(
  checkedKeys: Set<Key>,
  keyToTreeNodeMap: KeyToTreeNodeMap,
): [Set<Key>, Set<Key>] {
  const endCheckedKeys = new Set([...checkedKeys]);
  checkedKeys.forEach((key) => {
    const node = keyToTreeNodeMap.get(key);
    if (node) {
      getCheckedKeysSet(node, true, endCheckedKeys);
    }
  });
  const halfKeys = getHalfCheckedKeysSet(endCheckedKeys, keyToTreeNodeMap);
  return [endCheckedKeys, halfKeys];
}

export function getExportCheckedKeys(
  checkedKeysSet: Set<Key>,
  keyToTreeNodeMap: KeyToTreeNodeMap,
) {
  const filterChildrenCheckedKeys = new Set();
  const filterAncestorCheckedKeys = new Set();
  const allCheckedKeysArr = Array.from(checkedKeysSet);

  checkedKeysSet.forEach((checkedKey) => {
    const tNode = keyToTreeNodeMap.get(checkedKey);
    // 检查父节点是否选中
    let treeNodeParent = tNode?.parent;
    while (treeNodeParent) {
      // 如果父节点选中，则子节点不再作为结果输出
      // 即只输出最大公共祖先节点
      if (checkedKeysSet.has(treeNodeParent.nodeKey)) {
        filterChildrenCheckedKeys.add(checkedKey);
        filterAncestorCheckedKeys.add(treeNodeParent.nodeKey);
      }
      treeNodeParent = treeNodeParent.parent;
    }
  });

  // 保证只返回选中根节点，比如0-1，0-1-0，0-1-1都选中，则只返回0-1
  const exportCheckedKeys = allCheckedKeysArr.filter(
    (key) => !filterChildrenCheckedKeys.has(key),
  );
  const exportFilterAnCheckedKeys = allCheckedKeysArr.filter(
    (key) => !filterAncestorCheckedKeys.has(key),
  );

  return [exportCheckedKeys, exportFilterAnCheckedKeys];
}

/**
 *
 * @param treeNode 当前选中的节点
 * @param checked 是否选中
 * @param checkedKeysSet 选中节点key集合
 * @param keyToTreeNodeMap key -> node映射
 * @returns []
 */
export function onTreeNodeCheck(
  treeNode: TreeNode,
  checked: boolean,
  checkedKeysSet: Set<Key>,
  keyToTreeNodeMap: KeyToTreeNodeMap,
): [Key[], Key[], Set<Key>] {
  getCheckedKeysSet(treeNode, checked, checkedKeysSet);

  const halfKeysSet = getHalfCheckedKeysSet(checkedKeysSet, keyToTreeNodeMap);
  const [exportCheckedKeys, exportFilterAnCheckedKeys] = getExportCheckedKeys(
    checkedKeysSet,
    keyToTreeNodeMap,
  );

  return [exportCheckedKeys, exportFilterAnCheckedKeys, halfKeysSet];
}

export function onTreeNodeSelect(
  treeNode: TreeNode,
  selectedKeysSet: Set<Key>,
  fieldNames: FieldNames,
  keyToTreeNodeMap: KeyToTreeNodeMap,
  multiple?: boolean,
  numberKeysSet?: Set<Key>,
): [Key[], TreeNode[], TreeNode] {
  const { selected, nodeKey } = treeNode;

  if (!selected) {
    if (!multiple) {
      selectedKeysSet.clear();
    }
    selectedKeysSet.add(nodeKey);
  } else {
    selectedKeysSet.delete(nodeKey);
  }
  const temp = [...selectedKeysSet];

  const selectedNodes = temp.map((key) => keyToTreeNodeMap.get(key)!);

  return [
    temp,
    ...handleExportNodes(selectedNodes, fieldNames, treeNode, numberKeysSet),
  ];
}
