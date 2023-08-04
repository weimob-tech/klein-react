/**
 * title: 基本用法
 * desc: 一个简单的常见标签。
 */
import React from 'react';
import { Tag, Icon } from '@klein-design/klein-react';
import DemoLayout from '@/components/demo/DemoLayout'

const { SettingLine } = Icon;

export default () => {
  return (
    <DemoLayout layout='2'>
      <Tag size="xSmall" iconNode={<SettingLine />} color="#006aff">
        小标签
      </Tag>
      <Tag size="small" iconNode={<SettingLine />} color="#006aff">
        中标签
      </Tag>
      <Tag iconNode={<SettingLine />} color="#006aff">
        大标签
      </Tag>
      <Tag size="large" iconNode={<SettingLine />} color="#006aff">
        偏大标签
      </Tag>
    </DemoLayout>
  );
};
