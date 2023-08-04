/**
 * title: 三种大小
 * description: 三种大小的选择框，当 size 分别为 large 和 small 时，输入框高度为 38px 和 22px ，默认高度为 30px。
 */
import React, { useState } from 'react';
import { Select, Radio } from '@klein-design/klein-react';
import DemoLayout from '@/components/demo/DemoLayout';

const { Option } = Select;

export default () => {
  const [size, setsize] = useState('medium');

  const handleSizeChange = (e: any) => {
    setsize(e.target.value);
  };

  return (
    <>
      <Radio.Group value={size} onChange={handleSizeChange}>
        <Radio.Button value="large">大</Radio.Button>
        <Radio.Button value="medium">中</Radio.Button>
        <Radio.Button value="small">小</Radio.Button>
      </Radio.Group>
      <DemoLayout layout='1'>
        <Select
          // wSize='sm'
          placeholder="请选择"
          size={size}
          allowClear
        >
          <Option value="标签文本1">标签文本一</Option>
          <Option value="标签文本2">标签文本二</Option>
          <Option value="标签文本3">标签文本三</Option>
        </Select>
        <Select
          // wSize='sm'
          mode="tags"
          placeholder="请选择标签"
          size={size}
          allowClear
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
    </>
  );
};
