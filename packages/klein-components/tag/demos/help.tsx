/**
 * title: 包含辅助文案
 * desc: 通过help属性定义辅助文案。
 */
import React from 'react';
import { Tag } from '@klein-design/klein-react';
import DemoLayout from '@/components/demo/DemoLayout'

const { CheckAbleTag } = Tag;

export default () => {
  return (
    <DemoLayout layout='2'>
      <CheckAbleTag help="辅助文案">选中项</CheckAbleTag>
      <CheckAbleTag help="辅助文案" disabled>
        选中项
      </CheckAbleTag>
      <CheckAbleTag help="辅助文案" disabled checked>
        选中项
      </CheckAbleTag>
      <CheckAbleTag help="辅助文案" checked>选中项</CheckAbleTag>
    </DemoLayout>
  );
};
