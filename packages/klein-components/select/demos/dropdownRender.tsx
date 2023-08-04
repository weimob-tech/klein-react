/**
 * title: 扩展菜单
 * description: 使用 dropdownRender 对下拉菜单进行自由扩展。
 */

import React, { useState, useRef, useEffect } from 'react';
import { Select, Divider, Input, Button } from '@klein-design/klein-react';

const { Option } = Select;

export default () => {
  const [open, setOpen] = useState(false);
  const [index, setindex] = useState(0);
  const [value, setValue] = useState('');
  const [items1, setItems1] = useState(['选项一', '选项二']);
  const [items2, setItems2] = useState(['选项一', '选项二']);
  const input1Ref = useRef<HTMLInputElement>(null);
  const input2Ref = useRef<HTMLInputElement>(null);

  const onValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist();
    setValue(event.target.value);
  };
  const addItem1 = () => {
    setMergeDropDownRender1(false);
    setindex(index + 1);
    setItems1([...items1, value || `New item ${index}`]);
    setValue('');
  };
  const addItem2 = () => {
    setMergeDropDownRender2(false);
    setindex(index + 1);
    setItems2([...items2, value || `New item ${index}`]);
    setValue('');
  };

  const btnStyle = {
    display: 'flex',
    flexWrap: 'nowrap',
    padding: '0px 4px 4px 12px',
    marginTop: '-2px',
    justifyContent: 'space-between',
  };

  // dropRender dom
  const DropdownRender1 = (menu: React.ReactNode) => {
    return (
      <div>
        {menu}
        <Divider style={{ marginBottom: 8 }} />
        <div style={btnStyle as any}>
          <Input
            ref={input1Ref}
            style={{ width: 164 }}
            bordered={false}
            value={value}
            onChange={onValueChange}
            placeholder="请输入"
          />
          <a
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '0 12px',
              cursor: 'pointer',
              color: '#006aff',
              fontSize: '14px',
            }}
            onClick={addItem1}
          >
            新增
          </a>
        </div>
      </div>
    );
  };
  const DropdownRender2 = (menu: React.ReactNode) => {
    return (
      <div>
        {menu}

        {!isShowDropDownRender2 ? (
          <Button
            style={{
              width: '100%',
              height: '32px',
              lineHeight: '32px',
              paddingLeft: 12,
              textAlign: 'left',
            }}
            type="link"
            onClick={getDropdownRenderWithResult}
          >
            新增选项
          </Button>
        ) : (
          <>
            <Divider />
            <div style={btnStyle as any}>
              <Input
                ref={input2Ref}
                style={{ width: 164 }}
                value={value}
                onChange={onValueChange}
                bordered={false}
                placeholder="请输入"
              />
              <a
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '0 12px',
                  cursor: 'pointer',
                  color: '#006aff',
                  fontSize: '14px',
                }}
                onClick={addItem2}
              >
                新增
              </a>
            </div>
          </>
        )}
      </div>
    );
  };
  // notFoundContent dom
  const notFoundContent = () => {
    return (
      <div>
        暂无数据
        {!isShowDropDownRender1 && '，'}
        {!isShowDropDownRender1 && (
          <Button
            style={{ paddingLeft: 0 }}
            type="link"
            onClick={getDropdownRenderNotFound}
          >
            新增选项
          </Button>
        )}
      </div>
    );
  };
  // =================================================================================

  /* e.g. 1. 搜索无结果-新增选择  */
  const [isShowDropDownRender1, setMergeDropDownRender1] = useState(false);
  const getDropdownRenderNotFound = () => {
    setMergeDropDownRender1(true);
  };
  useEffect(() => {
    input1Ref?.current?.focus();
  }, [isShowDropDownRender1]);
  const handleChangeSelect1 = (val) => {
    console.log('select1 value', val); // szp
  };

  /* e.g. 2. 有选项-新增选择  */
  const [itemIndex, setItemIndex] = useState(0);
  const [isShowDropDownRender2, setMergeDropDownRender2] = useState(false);
  const getDropdownRenderWithResult = () => {
    setMergeDropDownRender2(true);
  };
  useEffect(() => {
    input2Ref?.current?.focus();
  }, [isShowDropDownRender2]);

  const didMountRef = useRef(false);
  useEffect(() => {
    if (didMountRef.current) {
      setItemIndex(items2.length - 1);
    } else didMountRef.current = true;
  }, [items2.length]);

  const handleonDropdownVisibleChange = (openVal) => {
    setOpen(openVal);
  };

  return (
    <>
      <div>
        <Select
          style={{ width: 350 }}
          showSearch
          placeholder="搜索无内容添加"
          notFoundContent={notFoundContent()}
          onChange={handleChangeSelect1}
          onDropdownVisibleChange={handleonDropdownVisibleChange}
          open={open}
          dropdownRender={isShowDropDownRender1 && DropdownRender1}
        >
          {items1.map((item, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <Option key={item + i}>{item}</Option>
          ))}
        </Select>
        <p style={{margin: '20px 0 12px 0'}}>配置 itemindex 后，添加 option 时会默认选择新添加的 option 项</p>
        <Select
          style={{ width: 350 }}
          showSearch
          placeholder="有结果选项添加"
          notFoundContent={notFoundContent()}
          dropdownRender={DropdownRender2}
          itemindex={itemIndex}
        >
          {items2.map((item, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <Option key={item + i}>{item}</Option>
          ))}
        </Select>
      </div>
    </>
  );
};
