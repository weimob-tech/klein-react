import {
  TreeNode,
  Key,
  DataNode,
  FieldNames,
  KeyToTreeNodeMap,
  TitleToKeyMap,
} from '../interface';
import { _HTREE_SPLIT_ } from './_utils';

export function traverse(
  treeData?: TreeNode[],
  callback?: (treeNode: TreeNode) => void,
  afterCallback?: (treeNode: TreeNode) => void,
) {
  function dfs(data?: TreeNode[]) {
    if (!data || !data.length) return;
    for (let i = 0; i < data.length; i += 1) {
      const node = data[i];
      callback?.(node);
      dfs(node.children);
      afterCallback?.(node);
    }
  }
  dfs(treeData);
}

export function findNodeInTreeData(
  key: Key,
  treeData: TreeNode[],
  fieldName = 'nodeKey',
): null | TreeNode {
  let target: null | TreeNode = null;
  traverse(treeData, (node) => {
    if (node[fieldName as keyof TreeNode] === key) {
      target = node;
    }
  });
  return target;
}

function getNodeKey(horizontal: boolean, currentNode: TreeNode, path = '') {
  let nodeKey =
    typeof currentNode.key !== 'undefined' && currentNode.key !== null
      ? currentNode.key
      : +new Date();
  if (horizontal) {
    // 横向树所有的key全部转换为string
    nodeKey = path + nodeKey;
  }
  // return nodeKey.toString();
  return nodeKey;
}

export function traverseTreeNode(
  treeData: TreeNode[],
  fieldNames: FieldNames,
  keyToTreeNodeMap: KeyToTreeNodeMap,
  numberKeysSet: Set<Key>,
  horizontal?: boolean,
  // callback?: (node: TreeNode) => void,
  titleToKeyMap?: TitleToKeyMap,
): TreeNode[] {
  if (!treeData || !treeData.length) return [];

  function dfs(
    data: TreeNode[],
    prevNode: TreeNode | null,
    level: number,
    path?: string,
  ) {
    return data.map((node) => {
      if (node) {
        let tempNode = {} as TreeNode;
        Object.keys(fieldNames).forEach((key) => {
          tempNode[key as keyof FieldNames] = (node as any)[
            fieldNames[key as keyof FieldNames]!
          ];
        });
        tempNode = { ...node, ...tempNode };

        const newNode = {
          ...tempNode,
          level,
          isLeaf: tempNode.isLeaf,
          nodeKey: getNodeKey(Boolean(horizontal), tempNode, path),
          parent: prevNode,
        };
        // 保存每个节点的节点信息，方便节点查询，减少时间复杂度
        keyToTreeNodeMap.set(newNode.nodeKey, newNode);

        // 保存title到key的映射
        // ReactNode形式的title无法解析，除了string
        if (titleToKeyMap && typeof newNode.title === 'string') {
          titleToKeyMap.set(newNode.title, newNode.key);
        }
        // 如果输入的key为number类型，则存起来，保证输出的key也是number
        if (typeof newNode.key === 'number' && horizontal) {
          numberKeysSet.add(newNode.key.toString());
          // numberKeysSet.add(newNode.key);
        }
        // callback?.(newNode);
        if (newNode.children) {
          newNode.children = dfs(
            newNode.children,
            newNode,
            level + 1,
            newNode.nodeKey + _HTREE_SPLIT_,
          );
        }
        return newNode;
      }
      return node;
    });
  }

  const result = dfs(treeData, null, 0);

  return result;
}
