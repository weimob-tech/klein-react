/**
 * title: 前、后缀
 * description: 自定义的选择框前、后缀图标。
 */
import React from 'react';
import { Select } from '@klein-design/klein-react';

const { Option } = Select;

export default () => {
  return (
    <>
      <Select
        showSearch
        placeholder="请选择"
        prefix="尺码"
        suffix="GB"
        allowClear
        style={{ width: 350 }}
      >
        <Option value="选项一">选项一</Option>
        <Option value="选项二">选项二</Option>
      </Select>
    </>
  );
};
