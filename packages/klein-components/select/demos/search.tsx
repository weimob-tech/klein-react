/**
 * title: 带搜索框
 * description: 展开后可对选项进行搜索。
 */
import React from 'react';
import { Select } from '@klein-design/klein-react';
import DemoLayout from '@/components/demo/DemoLayout'

const { Option } = Select;

export default () => {
  return (
    <div style={{ display: 'flex' }}>
      <DemoLayout layout='1' style={{marginRight: '48px'}}>
          <Select showSearch placeholder="请选择" allowClear>
            <Option value="标签文本1">标签文本1</Option>
            <Option value="标签文本2">标签文本2</Option>
            <Option value="标签文本3">标签文本3</Option>
          </Select>
      </DemoLayout>
      <DemoLayout layout='1'>
        <Select
          showSearch
          placeholder="请选择"
          optionFilterProp="children"
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
          filterSort={(optionA, optionB) =>
            optionA.children
              .toLowerCase()
              .localeCompare(optionB.children.toLowerCase())
          }
        >
          <Option value="1">Not Identified</Option>
          <Option value="2">Closed</Option>
          <Option value="3">Communicated</Option>
          <Option value="4">Identified</Option>
          <Option value="5">Resolved</Option>
          <Option value="6">Cancelled</Option>
        </Select>
      </DemoLayout>
    </div>
  );
};
