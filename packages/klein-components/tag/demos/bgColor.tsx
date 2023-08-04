/**
 * title: 多彩标签
 * desc: 我们添加了多种预设色彩的标签样式，用作不同场景使用。如果预设值不能满足你的需求，可以设置为具体的色值。。
 */
import React from 'react';
import { Tag } from '@klein-design/klein-react';

export default () => {
  const innerColorSets = [
    'gray',
    'magenta',
    'red',
    'volcano',
    'orange',
    'gold',
    'lime',
    'green',
    'cyan',
    'blue',
    'geekblue',
    'purple',
  ];
  return (
    <>
      <div>
        {innerColorSets.map((v) => (
          <Tag color={v}>{v}</Tag>
        ))}
        <div style={{ margin: '10px 0' }}>
          {innerColorSets.map((v) => (
            <Tag color={v} type="fill">
              {v}
            </Tag>
          ))}
        </div>
        {innerColorSets.map((v) => (
          <Tag color={v}>{v}</Tag>
        ))}
      </div>
    </>
  );
};
