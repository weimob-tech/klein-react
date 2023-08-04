import React from 'react';
import { AutoComplete, Input } from '@klein-design/klein-react';
import './searchWithCategory.less';

const titleStyle = {
  fontSize: 10,
  fontWeight: 400,
  color: '#006aff',
  float: 'right',
  textDecoration: 'none',
};
const renderTitle = (title: string) => (
  <span>
    {title}
    <a
      style={titleStyle as any}
      href="http://klein.show.hsmob.com/"
      target="_blank"
      rel="noopener noreferrer"
    >
      更多
    </a>
  </span>
);

const renderItem = (title: string, count: number) => ({
  value: title,
  label: (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      {title}
      <span>{count}</span>
    </div>
  ),
});

const options = [
  {
    label: renderTitle('目录一'),
    options: [renderItem('选项一', 10000), renderItem('选项一 UI', 10600)],
  },
  {
    label: renderTitle('目录二'),
    options: [
      renderItem('选项一 UI FAQ', 60100),
      renderItem('选项一 FAQ', 30010),
    ],
  },
  {
    label: renderTitle('目录三'),
    options: [renderItem('选项一 design language', 100000)],
  },
];

export default () => {
  return (
    <AutoComplete
      dropdownClassName="dropdownClass"
      dropdownMatchSelectWidth={272}
      style={{ width: 232 }}
      options={options}
    >
      <Input.Search placeholder="请输入内容" />
    </AutoComplete>
  );
};
