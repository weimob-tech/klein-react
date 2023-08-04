/**
 * title: 基本用法
 * desc: 基本使用。
 */
import React, { useState } from 'react';
import { Select } from '@klein-design/klein-react';

const { Option, OptGroup } = Select;

/* 错误提示颜色在form中设置，不在select组件中体现 */
export default () => {
  const [value, setValue] = useState('');
  const handleDropDown = (open) => {
    console.log(open);

    setValue('选项二');
  };
  return (
    <div style={{display: 'flex'}}>
      <div style={{marginRight: '48px', width: '350px' }}>
        <Select style={{ width: 350, marginRight: 10, marginBottom: 10 }}>
          <Option value="选项一">选项一</Option>
          <Option value="选项二">选项二很长很长很长很长</Option>
        </Select>
        <Select
          style={{ width: 350, marginRight: 10, marginBottom: 10 }}
          defaultValue="选项一"
          disabled
        >
          <Option value="选项一">选项一</Option>
          <Option value="选项二">选项二</Option>
        </Select>
        <Select
          placeholder="请选择"
          style={{ width: 350, marginRight: 10, marginBottom: 10 }}
          loading
        >
          <Option value="选项一">选项一</Option>
          <Option value="选项二">选项二</Option>
        </Select>
      </div>
      <div style={{ width: '350px' }}> 
        <Select
          placeholder="请选择"
          style={{ width: 350, marginRight: 10, marginBottom: 10 }}
          allowClear
        >
          <Option value="选项一">选项一</Option>
          <Option value="选项二">选项二</Option>
        </Select>
        <Select
          style={{ width: 350, marginRight: 10, marginBottom: 10 }}
          placeholder="请选择"
          allowClear
          value={value}
          onDropdownVisibleChange={handleDropDown}
        >
          <OptGroup label="分类一">
            <Option value="选项一">选项一</Option>
          </OptGroup>
          <OptGroup label="分类二">
            <Option value="选项二">选项二</Option>
          </OptGroup>
        </Select>
        <Select
          style={{ width: 350, marginRight: 10, marginBottom: 10 }}
          placeholder="请选择"
          bordered={false}
          allowClear
        >
          <Option value="选项一">选项一</Option>
          <Option value="选项二">选项二</Option>
        </Select>
      </div>
    </div>
  );
};
