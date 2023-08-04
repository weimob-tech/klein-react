import React from 'react';
import { Upload } from '@klein-design/klein-react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

export default () => {
  const [fileList, setFileList] = React.useState([
    {
      uid: '1',
      name: 'test.png',
      status: 'done',
      showMain: true,
      url:
        'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
      uid: '2',
      name: 'test2.png',
      status: 'done',
      url:
        'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
      uid: '3',
      name: 'test2.png',
      status: 'done',
      replace: true,
      url:
        'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
      uid: '4',
      name: 'test3.png',
      status: 'done',
      url:
        'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
  ]);

  const type = 'dragableFileItemRender';

  const handleChange = (res: any) => {
    const files = res.fileList?.filter(Boolean);
    const endFileList = files?.map((file: any) => {
      if (file.status === 'uploading') {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file.originFileObj)
        fileReader.onload = () => {
          file.url = fileReader.result;
        }
      } 
      if (file?.response?.data) {
        file.url = file.response.data.url;
      }
      if (file.response && file.response.errcode !== 0) {
        file.status = 'done';
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file.originFileObj)
        fileReader.onload = () => {
          file.url = fileReader.result;
        }
      }
      return file;
    });
    setFileList(endFileList);
  };

  const moveFileItem = (dropedItemIndex: number, targetItemIndex: number) => {
    console.log('dropedItemIndex...', dropedItemIndex, targetItemIndex);
    const clonedFileList = [...fileList];
    const preDropedFile = clonedFileList[dropedItemIndex];
    const preTargetFile = clonedFileList[targetItemIndex];
    clonedFileList[dropedItemIndex] = preTargetFile;
    clonedFileList[targetItemIndex] = preDropedFile;
    setFileList(clonedFileList);
  };

  const ItemRenderComponent: React.FC<any> = ({
    itemChild: innerNode,
    index,
    fileList: theFileList,
  }: any) => {
    const ref = React.useRef<any>();
    const [, drop] = useDrop(
      () => ({
        accept: type,
        canDrop: () => true,
        collect: (monitor) => {
          const { index: dragIndex } = monitor.getItem() || {};
          if (dragIndex === index) {
            return {};
          }
          return {
            isOver: monitor.isOver(),
            dropClassName:
              dragIndex < index ? ' drop-over-downward' : ' drop-over-upward',
          };
        },
        drop: (item: any) => {
          moveFileItem(item.index, index);
        },
      }),
      [index, theFileList],
    );
    const [, drag] = useDrag(
      () => ({
        type,
        item: { index },
        canDrag: () => true,
        collect: (monitor) => ({
          isDragging: monitor.isDragging(),
        }),
      }),
      [index],
    );
    drop(drag(ref));
    return (
      <div
        style={{
          display: 'inline-block',
          cursor: 'move',
        }}
        ref={ref}
      >
        {innerNode}
      </div>
    );
  };

  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <Upload
          listType="picture-card"
          onChange={handleChange}
          name="multipartFile"
          fileList={fileList}
          maxCount={4}
          fileItemComponent={ItemRenderComponent}
        />
      </DndProvider>
    </>
  );
};
