// @ts-nocheck
/**
 * title:拖拽手柄列
 * desc:也可以使用 [react-sortable-hoc](https://github.com/clauderic/react-sortable-hoc) 来实现一个拖拽操作列。
 */
import React from 'react';
import { Table, Popover, Button } from '@klein-design/klein-react';
import {
  sortableContainer,
  sortableElement,
  sortableHandle,
} from 'react-sortable-hoc';

import arrayMove from 'array-move';
import MenuOutlined from '../../components/svg-components/NavigationLine';
import './style.less';

// const MenuOutlined = () => <div></div>;

const DragHandle = sortableHandle(() => (
  <MenuOutlined style={{ cursor: 'grab', color: '#999' }} />
));

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    index: 0,
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    index: 1,
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    index: 2,
  },
];

const SortableItem = sortableElement((props) => <tr {...props} />);
const SortableContainer = sortableContainer((props) => <tbody {...props} />);

class SortableTable extends React.Component {
  state = {
    dataSource: data,
    content: '',
  };

  onSortEnd = ({ oldIndex, newIndex }) => {
    const { dataSource } = this.state;
    if (oldIndex !== newIndex) {
      const newData = arrayMove(
        [].concat(dataSource),
        oldIndex,
        newIndex,
      ).filter((el) => !!el);
      console.log('Sorted items: ', newData);
      this.setState({ dataSource: newData });
    }
  };

  DraggableContainer = (props) => (
    <SortableContainer
      useDragHandle
      disableAutoscroll
      helperClass="row-dragging"
      onSortEnd={this.onSortEnd}
      {...props}
    />
  );

  DraggableBodyRow = ({ className, style, ...restProps }) => {
    const { dataSource } = this.state;
    // function findIndex base on Table rowKey props and should always be a right array index
    const index = dataSource.findIndex(
      (x) => x.index === restProps['data-row-key'],
    );
    return <SortableItem index={index} {...restProps} />;
  };

  columns = [
    {
      title: 'Sort',
      dataIndex: 'sort',
      width: 30,
      className: 'drag-visible',
      render: () => <DragHandle />,
    },
    {
      title: 'Name',
      dataIndex: 'name',
      className: 'drag-visible',
    },
    {
      title: 'Age',
      dataIndex: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
    },
    {
      title: 'Action',
      key: 'action',
      render: () => (
        <>
          <a style={{ color: '#006aff', marginRight: 16 }}>
            {/* <Popover
              title="popover title"
              content={this.state.content}
              style={{ marginRight: 10 }}
              // placement="top"
              overlayInnerStyle={{
                maxHeight: 240,
                overflowY: 'scroll',
              }}
              onVisibleChange={this.handleOnVisibleChange}
            >
              <a style={{ color: '#006aff' }}></a>
            </Popover> */}
            操作1
          </a>
          <a style={{ color: '#006aff' }}>操作2</a>
        </>
      ),
    },
  ];

  handleOnVisibleChange = (visible) => {
    setTimeout(() => {
      this.setState({
        content: (
          <div>
            <div>Content</div>
            <div>Content</div>
            <div>Content</div>
            <div>Content</div>
            <div>Content</div>
            <div>Content</div>
            <div>Content</div>
            <div>Content</div>
            <div>Content</div>
            <div>Content</div>
            <div>Content</div>
            <div>Content</div>
            <div>Content</div>
            <div>Content</div>
          </div>
        ),
      });
    }, 2000);
  };

  render() {
    const { dataSource } = this.state;

    return (
      <Table
        pagination={false}
        dataSource={dataSource}
        columns={this.columns}
        rowKey="index"
        outlineBordered
        components={{
          body: {
            wrapper: this.DraggableContainer,
            row: this.DraggableBodyRow,
          },
        }}
      />
    );
  }
}

export default SortableTable;
