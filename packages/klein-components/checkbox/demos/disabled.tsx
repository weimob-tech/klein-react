/**
 * title: 不可用
 * desc: checkbox 不可用。
 */
import React from 'react';
import { Checkbox } from '@klein-design/klein-react';
import DemoLayout from '@/components/demo/DemoLayout'

export default () => {
  return (
    <DemoLayout layout='2'>
      <Checkbox defaultChecked={false} disabled>
        未选失效
      </Checkbox>
      <Checkbox defaultChecked disabled>
        选中失效
      </Checkbox>
    </DemoLayout>
  );
};
