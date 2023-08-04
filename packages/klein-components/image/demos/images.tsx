import React from 'react';
import { Image } from '@klein-design/klein-react';
import DemoLayout from '@/components/demo/DemoLayout'

export default () => {
  const fileList = [
    {
      uid: 1,
      url:
        'https://cdn2.weimob.com/saas/saas-fe-sirius-orion-node/production/228/tupiansucai1.jpg',
    },
    {
      uid: 2,
      url:
        'https://cdn2.weimob.com/saas/saas-fe-sirius-orion-node/production/228/tupiansucai2.jpg',
    },
  ];
  return (
    <DemoLayout layout="2">
      {fileList.map((v) => (
        <Image
          key={v.uid}
          width={100}
          height={100}
          src={v.url}
          multiple
          images={fileList}
          id={v.uid}
        />
      ))}
    </DemoLayout>
  );
};
