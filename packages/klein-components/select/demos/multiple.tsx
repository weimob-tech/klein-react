/**
 * title: 多选
 * description: 多选，从已有条目中选择。
 */
import React from 'react';
import { Select } from '@klein-design/klein-react';
import DemoLayout from '@/components/demo/DemoLayout';

const { Option } = Select;
export default () => {
  function handleSelect(value: string[]) {
    console.log('select', value);
  }
  return (
    <div className='flex'>
      <DemoLayout layout='1' style={{ marginRight: '48px' }}>
        <Select placeholder="请选择" mode="multiple" >
          <Option value="标签文本1">标签文本1</Option>
          <Option value="标签文本2">标签文本2</Option>
          <Option value="标签文本3">标签文本3</Option>
          <Option value="标签文本4">标签文本4</Option>
          <Option value="标签文本5">标签文本5</Option>
          <Option value="标签文本6">标签文本6</Option>
        </Select>
        <Select
          mode="multiple"
          allowClear
          defaultValue={['标签文本3', '标签文本5']}
        >
          <Option value="标签文本1">标签文本1</Option>
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
      <DemoLayout layout='1'>
        <Select
          placeholder="请选择"
          mode="multiple"
          disabled
          allowClear
          defaultValue={['标签文本3', '标签文本5']}
        >
          <Option value="标签文本1">标签文本1</Option>
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
        <Select
          placeholder="请选择"
          mode="tags"
          allowClear
          listHeight={150}
          onChange={handleSelect}
          tokenSeparators={[',']}
        >
          <Option value="标签文本1">标签文本1</Option>
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
    </div>
  );
};
