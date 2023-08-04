/**
 * title: 基本用法
 * desc: 一个简单的常见标签。
 */
import React from 'react';
import { Tag } from '@klein-design/klein-react';
import './style.less';

export default () => {
  return (
    <>
      <div>
        <Tag
          type="fill"
          style={{ transform: 'scale(0.9)', height: 18, lineHeight: '18px' }}
          color="#006aff"
          size="small"
        >
          默认
        </Tag>
        <span style={{ marginLeft: 14 }} className="small">小标签与12号文字搭配</span>
      </div>
      <div>
        <Tag type="fill" style={{ height: 20 }} color="#006aff">
          默认
        </Tag>
        <span style={{ marginLeft: 14 }} className="middle">中标签与14号文字搭配</span>
      </div>
      <div>
        <Tag type="fill" size="large" color="#006aff">
          默认
        </Tag>
        <span style={{ marginLeft: 14, lineHeight: '30px' }} className="large">
          大标签与16号文字搭配
        </span>
      </div>
    </>
  );
};
