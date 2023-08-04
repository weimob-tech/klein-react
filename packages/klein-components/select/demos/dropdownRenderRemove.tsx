/**
 * title: 扩展菜单
 * description: 使用 dropdownRender 对下拉菜单允许删除。
 */

import React, { useState } from 'react';
import { Select, Divider, Input, Button } from '@klein-design/klein-react';

const { Option } = Select;

export default () => {
  const [index, setindex] = useState(0);
  const [value, setValue] = useState('');
  const [items, setItems] = useState(['选项一', '选项二']);

  const onValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist();
    setValue(event.target.value);
  };
  const addItem2 = () => {
    setindex(index + 1);
    setItems([...items, value || `New item ${index}`]);
    setValue('');
  };

  const removeOption = () => {};

  // dropRender dom
  const DropdownRender2 = (menu: React.ReactNode) => {
    return (
      <div>
        {menu}
        <Divider />
        <div
          style={{
            display: 'flex',
            flexWrap: 'nowrap',
            padding: '4px 4px 10px 12px',
            justifyContent: 'space-between',
          }}
        >
          <Input
            style={{ width: 168 }}
            value={value}
            onChange={onValueChange}
          />
          <a
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '0 12px',
              cursor: 'pointer',
              color: '#006aff',
              fontSize: '12px',
            }}
            onClick={addItem2}
          >
            新增
          </a>
        </div>
      </div>
    );
  };
  // notFoundContent dom
  const notFoundContent = () => {
    return (
      <div>
        暂无数据
        {
          <Button style={{ paddingLeft: 0 }} type="link">
            新增选项
          </Button>
        }
      </div>
    );
  };

  const handleRemove = (e: any) => {
    console.log(e, 'activeOption');
  };

  const [isShowAddItem, setIsShowAddItem] = useState('block');
  const [isShowDropDownRender2, setMergeDropDownRender2] = useState(false);
  const getDropdownRenderWithResult = () => {
    setIsShowAddItem('none');
    setMergeDropDownRender2(true);
  };

  return (
    <Select
      mode="multiple"
      style={{ width: 350 }}
      showSearch
      placeholder="有结果选项添加"
      notFoundContent={notFoundContent()}
      dropdownRender={isShowDropDownRender2 && DropdownRender2}
      removeOption={handleRemove}
    >
      {items.map((item, i) => (
        <Option key={item}>{item}</Option>
      ))}
      <Option style={{ display: isShowAddItem, paddingLeft: 0 }} disabled>
        <Button
          style={{ width: '100%', paddingLeft: 12, textAlign: 'left' }}
          type="link"
          onClick={getDropdownRenderWithResult}
        >
          新增选项
        </Button>
      </Option>
    </Select>
  );
};
