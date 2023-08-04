/**
 * title: 省略用法
 * desc: 超出长度省略
 */
import React from 'react';
import { Tag, Icon } from '@klein-design/klein-react';

const { SettingLine } = Icon;

export default () => {
  return (
    <Tag iconNode={<SettingLine />} maxWidth={150} closable>
      我是一个长标签，你看不到底
    </Tag>
  );
};
