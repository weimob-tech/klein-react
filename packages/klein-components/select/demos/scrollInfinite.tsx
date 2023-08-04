/**
 * title: 远程数据下拉加载
 * description: 下拉加载远程数据。
 */
import React, { useState, useEffect } from 'react';
import { Select } from '@klein-design/klein-react';
import DemoLayout from '@/components/demo/DemoLayout';

let i = 0;
const { Option } = Select;
export default () => {
  const [optionList, setOptionList] = useState([
    { name: 'option name' },
    { name: 'option name' },
    { name: 'option name' },
    { name: 'option name' },
    { name: 'option name' },
  ]);
  const [infiniteHasMore, setInfiniteHasMore] = useState(true);

  /* eslint-disable */
  const fetchData = () => {

  };

  const addOptions = (arr: any) => {
    setOptionList([...optionList, ...arr]);
  };

  const renderOptions = () =>
    optionList?.map((v: any, index) => (
      <Option value={v?.name} key={v?.name + index}>
        {v?.name + index}
      </Option>
    ));

  return (
    <>
      <p>scrollInfinite：传入接口方法；infiniteHasMore：是否有更多的下拉选项</p>
      <DemoLayout layout='1'>
        <Select
          // wSize='sm'
          placeholder="请选择"
          scrollInfinite={fetchData}
          infiniteHasMore={infiniteHasMore}
          listHeight={100}
        >
          {renderOptions()}
        </Select>
      </DemoLayout>
    </>
  );
};
