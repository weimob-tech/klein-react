/**
 * title: 多选包含按钮
 * description: 多选并且可以操作按钮进行逻辑编写。
 */
import React from 'react';
import { Select, Button, Divider } from '@klein-design/klein-react';

const { Option } = Select;
export default () => {
  const btnStyle = {
    display: 'flex',
    flexWrap: 'nowrap',
    padding: '0px 12px 4px 12px',
    marginTop: '-2px',
    justifyContent: 'flex-end',
  };
  const handleConfirm = () => {
    console.log('confirm');
  };
  const handleCancel = () => {
    console.log('cancel');
  };
  const DropdownRender = (menu: React.ReactNode) => {
    return (
      <div>
        {menu}
        <Divider />
        <div style={btnStyle as any}>
          <Button onClick={handleCancel}>辅助按钮</Button>
          <Button
            style={{ marginLeft: '12px' }}
            type="primary"
            onClick={handleConfirm}
          >
            {' '}
            主按钮
          </Button>
        </div>
      </div>
    );
  };
  return (
    <div>
      <Select
        placeholder="请选择"
        mode="multiple"
        wSize='m'
        dropdownRender={DropdownRender}
      >
        <Option value="标签文本1">标签文本1</Option>
        <Option value="标签文本2">标签文本2</Option>
        <Option value="标签文本3">标签文本3</Option>
        <Option value="标签文本4">标签文本4</Option>
        <Option value="标签文本5">标签文本5</Option>
        <Option value="标签文本6">标签文本6</Option>
      </Select>
    </div>
  );
};
