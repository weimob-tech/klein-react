import React from 'react';
import { Image } from '@klein-design/klein-react';

const { Preview } = Image;

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

export default () => {
  const [visible, setVisible] = React.useState<boolean>(false);

  return (
    <>
      <Image
        preview={{
          visible,
          onVisibleChange: (value) => {
            console.log('value...', value);
            setVisible(value);
          },
        }}
        width={100}
        height={100}
        src="https://cdn2.weimob.com/saas/saas-fe-sirius-orion-node/production/228/tupiansucai1.jpg"
      />
    </>
  );
};
