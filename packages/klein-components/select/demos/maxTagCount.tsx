/**
 * title: 响应式 maxTagCount
 * description: 多选下通过响应式布局让选项自动收缩。该功能对性能有所消耗，不推荐在大表单场景下使用。
 */
import React from 'react';
import { Select } from '@klein-design/klein-react';
import DemoLayout from '@/components/demo/DemoLayout';

const { Option } = Select;

export default () => {
  return (
    <DemoLayout layout='1'>
      <Select
        placeholder="请选择"
        mode="multiple"
        maxTagCount={3}
        style={{ width: '100%' }}
        allowClear
        onMouseEnter={(val) => {
          console.log(val, 'onMouseEnter');
        }}
      >
        <Option value="标签文本1">标签文本</Option>
        <Option value="标签文本2">标签文本2</Option>
        <Option value="标签文本3">标签文本3</Option>
        <Option value="标签文本4">标签文本4</Option>
        <Option value="标签文本5">标签文本5</Option>
        <Option value="标签文本6">标签文本6</Option>
        <Option value="标签文本7">标签文本7</Option>
        <Option value="标签文本8">标签文本8</Option>
        <Option value="标签文本9">标签文本9</Option>
        <Option value="标签文本10">标签文本10</Option>
        <Option value="标签文本11">标签文本11</Option>
        <Option value="标签文本12">标签文本12</Option>
      </Select>
    </DemoLayout>
  );
};
