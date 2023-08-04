/**
 * title: 基本用法
 * desc: 一个简单的常见标签。
 */
import React, { useState } from 'react';
import { Tag } from '@klein-design/klein-react';
import DemoLayout from '@/components/demo/DemoLayout'

const { CheckAbleTag } = Tag;

export default () => {
  const [status, setStatus] = useState(true);
  return (
    <DemoLayout layout='2'>
      <CheckAbleTag
        onChange={(tag, checked) => {
          console.log('tag:', tag, 'checked:', checked);
        }}
        closable
      >
        可选不受控
      </CheckAbleTag>
      <CheckAbleTag
        checked={status}
        onChange={(tag, checked) => {
          setStatus(checked);
          console.log('tag:', tag, 'checked:', checked);
        }}
        closable
      >
        可选受控
      </CheckAbleTag>
    </DemoLayout>
  );
};
