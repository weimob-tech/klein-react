/**
 * title: 自定义选择标签
 * description: 允许自定义选择标签的样式。
 */
import React from 'react';
import { Select, Tag } from '@klein-design/klein-react';

const { Option } = Select;

export default () => {
  interface LabeledValue {
    key?: string;
    value: string | number;
    label: React.ReactNode;
  }
  const tagRender = (props: any) => {
    const { label } = props;

    return (
      <Tag type="line" color="#006aff" style={{ marginRight: 4 }}>
        {label}
      </Tag>
    );
  };

  return (
    <Select
      placeholder="请选择"
      // wSize='m'
      mode="multiple"
      showArrow
      tagRender={tagRender}
      style={{ width: 350 }}
    >
      <Option value="标签文本1">标签文本1</Option>
      <Option value="标签文本2">标签文本2</Option>
    </Select>
  );
};
