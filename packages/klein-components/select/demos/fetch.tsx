/**
 * title: 搜索远程数据
 * description: 搜索和远程数据结合。
 */
import React, { useState } from 'react';
import { Select } from '@klein-design/klein-react';

const { Option } = Select;

export default () => {
  const [optionList, setOptionList] = useState({});

  const fetchData = () => {

  };

  const handleSearch = (value: any) => {
    if (value) {
      fetchData();
    } else {
      setOptionList({});
    }
  };

  const renderOptions = () =>
    optionList?.items?.map((v: any) => (
      <Option value={v.name}>{v.name}</Option>
    ));

  return (
    <>
      <div>
        <p>异步获取数据无法显示 option 时，需要添加 filterOption 为 false。</p>
        <p style={{marginBottom: '12px' }}>mock搜索关键字: 北京，上海，广州，武汉</p>
        <Select
          showSearch
          style={{ width: 300 }}
          placeholder="请选择"
          onSearch={handleSearch}
        >
          {renderOptions()}
        </Select>
      </div>
    </>
  );
};
