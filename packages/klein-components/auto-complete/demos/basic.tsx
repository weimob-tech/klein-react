import React, { useState } from 'react';
import { AutoComplete } from '@klein-design/klein-react';

const mockVal = (str: string, repeat: number = 1) => ({
  value: str.repeat(repeat),
});
export default () => {
  const [options, setOptions] = useState<{ value: string }[]>([]);
  const onSearch = (searchText: string) => {
    setOptions(
      !searchText
        ? []
        : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)],
    );
  };
  const onSelect = (value: string) => {
    console.log('onSelect', value);
  };
  return (
    <AutoComplete
      style={{ width: 232 }}
      options={options}
      onSelect={onSelect}
      onSearch={onSearch}
      placeholder="请输入内容"
      notFoundContent={null}
    />
  );
};
