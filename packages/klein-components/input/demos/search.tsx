/**
 * title: 搜索框
 * desc: 通过导入`Search`组件来使用。
 */

import React from 'react';
import { Input, Button, Icon } from '@klein-design/klein-react';
import DemoLayout from '@/components/demo/DemoLayout';

const { Search } = Input;
const { SearchLine } = Icon;

export default () => {
  // state
  const [value, setValue] = React.useState();

  // handle
  const handleChange = (evt?: any) => {
    console.log('onChange', evt.target.value); // eslint-disable-line no-console
    setValue(evt.target.value);
  };
  const handleSearch = (val?: any, evt?: any) =>
    console.log('onSearch', val, evt); // eslint-disable-line no-console
  const handleBtnClick = (evt?: any) => console.log('onEnterClick', value, evt); // eslint-disable-line no-console

  // render
  const inputStyle = { marginRight: 15, width: 350 };

  return (
    <div style={{display: 'flex'}}>
      <DemoLayout layout='1' style={{ marginRight: '48px'}}>
      <Input
        style={inputStyle}
        placeholder="请输入搜索关键字"
        suffix={<SearchLine />}
      />
      <Search
        style={inputStyle}
        placeholder="请输入内容"
        value={value}
        onChange={handleChange}
        onSearch={handleSearch}
        size="small"
      />

      <Search
        style={inputStyle}
        placeholder="请输入内容"
        value={value}
        onChange={handleChange}
        onSearch={handleSearch}
        size="medium"
      />

      <Search
        style={inputStyle}
        placeholder="请输入内容"
        value={value}
        onChange={handleChange}
        onSearch={handleSearch}
        size="large"
      />
      </DemoLayout>
      <DemoLayout layout='1'>
      <Search
        style={inputStyle}
        placeholder="请输入内容"
        value={value}
        onChange={handleChange}
        onSearch={handleSearch}
        loading
      />

      <Search
        style={inputStyle}
        placeholder="请输入内容"
        value={value}
        enterButton="Search"
        onChange={handleChange}
        onSearch={handleSearch}
      />

      <Search
        style={inputStyle}
        placeholder="请输入内容"
        value={value}
        onChange={handleChange}
        onSearch={handleSearch}
        enterButton={
          <Button
            type="default"
            onClick={handleBtnClick}
            style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
          >
            Search
          </Button>
        }
      />
    </DemoLayout>
    </div>
  );
};
