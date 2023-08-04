import React, { useState, useRef } from 'react';
import { AutoComplete, Input } from '@klein-design/klein-react';

// const { Option } = AutoComplete;
const { TextArea } = Input;

export default () => {
  const areaRef = useRef(null);

  const [options, setOptions] = useState<{ value: string }[]>([]);
  const handleSearch = (value: string) => {
    setOptions(
      !value
        ? []
        : [
            { value },
            { value: value + value },
            { value: value + value + value },
          ],
    );
  };

  const handleKeyPress = (ev: React.KeyboardEvent<HTMLTextAreaElement>) => {
    console.log('handleKeyPress', ev);
  };

  const onSelect = (value: string) => {
    console.log('onSelect', value);
  };

  const areaStyle = { marginBottom: 3, width: 232, height: 80 };
  return (
    <AutoComplete
      options={options}
      style={{ width: 232 }}
      onSelect={onSelect}
      onSearch={handleSearch}
    >
      <TextArea
        ref={areaRef}
        style={areaStyle}
        onKeyPress={handleKeyPress}
        placeholder="请输入内容"
      />
    </AutoComplete>
  );
};
