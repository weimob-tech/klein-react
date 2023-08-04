/**
 * title: 内容为image
 * desc: 内容设置为image时。
 */
import React from 'react';
import { Tag } from '@klein-design/klein-react';
import DemoLayout from '@/components/demo/DemoLayout'

const { CheckAbleTag } = Tag;

export default () => {
  const imageProps = {
    src:
      'https://cdn2.weimob.com/saas/saas-fe-sirius-orion-node/production/228/tupiansucai1.jpg',
    width: 100,
    height: 100,
  };

  return (
    <DemoLayout layout='2'>
      <CheckAbleTag imageProps={imageProps} width={200} />
      <span style={{ marginLeft: 10 }} />
      <CheckAbleTag disabled imageProps={imageProps} />
      {/* <span style={{ marginLeft: 10 }}></span>
       <CheckAbleTag help="辅助文案" disabled checked>选中项</CheckAbleTag> */}
      {/* <span style={{ marginLeft: 10 }}></span>
       <CheckAbleTag help="辅助文案辅助文案辅助文案">选中项</CheckAbleTag> */}
    </DemoLayout>
  );
};
