/**
 * title: 带搜索框及添加自定义选项
 * description: 可进行搜索和添加自定义选项。
 */
import React from 'react';
import { Select } from '@klein-design/klein-react';

const { Option } = Select;

export default () => {
  const [items, setItems] = React.useState(['选项一', '选项二']);
  const [addOptionList, setAddOptionList] = React.useState<any[]>([]);
  const [addItems, setAddItems] = React.useState();
  const handleChange = (value: any) => {
    const res = items.some((v) => v === value);
    if (!res && value) {
      setItems([...items, addItems]);
    }
    setAddOptionList([]);
  };
  const handleSearch = (value: any) => {
    setAddItems(value);
    const res = items.some((v) => v === value);
    if (!res) {
      setAddOptionList([value]);
    } else {
      setAddOptionList([]);
    }
  };
  const handleBlur = (e: any) => {
    setAddOptionList([]);
  };
  return (
    <Select
      showSearch
      wSize='sm'
      placeholder="请选择"
      onChange={handleChange}
      onSearch={handleSearch}
      onBlur={handleBlur}
      showArrow={false}
      allowClear
    >
      {addItems &&
        addOptionList.map((item) => <Option key={item}>{item}</Option>)}
      {items.map((item) => (
        <Option key={item}>{item}</Option>
      ))}
    </Select>
  );
};
