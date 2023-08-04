import React, { useState } from 'react';
import { AutoComplete, Input } from '@klein-design/klein-react';

function getRandomInt(max: number, min: number = 0) {
  return Math.floor(Math.random() * (max - min + 1)) + min; // eslint-disable-line no-mixed-operators
}
const titleStyle = {
  display: 'flex',
  justifyContent: 'space-between',
};
const resStyle = {
  fontSize: 10,
  fontWeight: 400,
  color: '#006aff',
};

const searchResult = (query: string) =>
  new Array(getRandomInt(1))
    .join('.')
    .split('.')
    .map((_, idx) => {
      const category = `${query}${idx}`;
      return {
        value: category,
        label: (
          <div style={titleStyle}>
            <span>
              搜索on <span style={resStyle}>{category}</span>
            </span>
            <span>搜索结果一</span>
          </div>
        ),
      };
    });
export default () => {
  const [options, setOptions] = useState<any>([]);

  const handleSearch = (value: string) => {
    setOptions(value ? searchResult(value) : []);
  };

  const onSelect = (value: string) => {
    console.log('onSelect', value);
  };

  return (
    <AutoComplete
      dropdownMatchSelectWidth={252}
      style={{ width: 232 }}
      options={options}
      onSelect={onSelect}
      onSearch={handleSearch}
      notFoundContent={null}
    >
      <Input.Search placeholder="请输入内容" enterButton="搜索" />
    </AutoComplete>
  );
};
