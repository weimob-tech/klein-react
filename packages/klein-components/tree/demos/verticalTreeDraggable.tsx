import React from 'react';
import { Tree } from '@klein-design/klein-react';

const initTreeData = [
  {
    title: '节点 0-0',
    key: '0-0',
    children: [
      {
        title: '节点 0-0-0',
        key: '0-0-0',
        children: [
          { title: '节点 0-0-0-0', key: '0-0-0-0', isLeaf: true },
          { title: '节点 0-0-0-1', key: '0-0-0-1', isLeaf: true },
          { title: '节点 0-0-0-2', key: '0-0-0-2', isLeaf: true },
        ],
      },
      {
        title: '节点 0-0-1',
        key: '0-0-1',
        children: [
          { title: '节点 0-0-1-0', key: '0-0-1-0', isLeaf: true },
          { title: '节点 0-0-1-1', key: '0-0-1-1', isLeaf: true },
          { title: '节点 0-0-1-2', key: '0-0-1-2', isLeaf: true },
        ],
      },
      {
        title: '节点 0-0-2',
        key: '0-0-2',
        isLeaf: true,
      },
    ],
  },
  {
    title: '节点 0-1',
    key: '0-1',
    children: [
      { title: '节点 0-1-0', key: '0-1-0-0', isLeaf: true },
      { title: '节点 0-1-1', key: '0-1-0-1', isLeaf: true },
      { title: '节点 0-1-2', key: '0-1-0-2', isLeaf: true },
    ],
  },
  {
    title: '节点 0-2',
    key: '0-2',
    isLeaf: true,
  },
];

export default () => {

  const [treeData, setTreeData] = React.useState(initTreeData)

  // React.useEffect(() => {
  //   console.log('treeData...', treeData);
  // }, []);

  return (
    <>
      <Tree
        treeData={treeData}
        checkable={false}
        direction="vertical"
        draggable
        onDrop={({ dragNode, node: dropNode, dropPosition }) => {
          console.log('dragNode....', dragNode)
          console.log('dropNode....', dropNode, dropPosition)
          const loop = (data: any[], key: any, callback: (item: any, index: number, arr: any) => void) => {
            data.some((item, index, arr) => {
              if (item.key === key) {
                callback(item, index, arr)
                return true
              }
              if (item.children) {
                return loop(item.children, key, callback)
              }
            })
          }
          const data = [...treeData]
          let dragItem: any
          loop(data, dragNode.key, (item, index, arr) => {
            arr.splice(index, 1)
            dragItem = item
          })
          // dropPosition为0代表作为子节点插入
          // dropPosition为-1代表与根节点进行交换
          // dropPosition为1代表在该节点后插入
          if (dropPosition === 0) {
            loop(data, dropNode.key, (item, index, arr) => {
              item.children = item.children || []
              item.children.unshift(dragItem)
            })
          } else {
            loop(data, dropNode.key, (item, index, arr) => {
              arr.splice(dropPosition < 0 ? index : index + 1, 0, dragItem)
            })
          }
          setTreeData([...data])
        }}
      />
    </>
  );
};
