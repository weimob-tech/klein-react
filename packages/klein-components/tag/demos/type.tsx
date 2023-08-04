/**
 * title: 类型
 * desc: 根据type 去设置相关的样式类型。
 */
import React from 'react';
import { Tag } from '@klein-design/klein-react';
import DemoLayout from '@/components/demo/DemoLayout'

export default () => {
  return (
    <>
      <DemoLayout layout='1'>
        <h3 style={{ fontWeight: 'bold' }}>线性标签</h3>
        <DemoLayout layout='2'>
          <Tag type="line" closable>
            默认标签
          </Tag>
          <Tag type="line" color="#006aff">
            标签文本
          </Tag>
          <Tag type="line" color="#52C41A">
            标签文本
          </Tag>
          <Tag type="line" color="#FAAD14">
            标签文本
          </Tag>
          <Tag type="line" color="#FF4C50">
            标签文本
          </Tag>
        </DemoLayout>
      </DemoLayout>
      <DemoLayout layout='1'>
        <h3 style={{ fontWeight: 'bold' }}>面性标签</h3>
        <DemoLayout layout='2'>
          <Tag type="fill">默认标签</Tag>
          <Tag type="fill" color="#006aff" closable>
            标签文本
          </Tag>
          <Tag type="fill" color="#52C41A">
            标签文本
          </Tag>
          <Tag type="fill" color="#FAAD14">
            标签文本
          </Tag>
          <Tag type="fill" color="#FF4C50">
            标签文本
          </Tag>
        </DemoLayout>
      </DemoLayout>
      <DemoLayout layout='1'>
        <h3 style={{ fontWeight: 'bold' }}>面性+线性标签（仅支持内置的几种色值）</h3>
        <DemoLayout layout='2'>
          <Tag color="gray" closable>
            标签文本
          </Tag>
          <Tag color="blue" closable>
            标签文本
          </Tag>
          <Tag color="green">标签文本</Tag>
          <Tag color="orange">标签文本</Tag>
          <Tag color="red">标签文本</Tag>
        </DemoLayout>
      </DemoLayout>
    </>
  );
};
