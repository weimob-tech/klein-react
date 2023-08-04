import React from 'react';
import { Image } from '@klein-design/klein-react';
import DemoLayout from '@/components/demo/DemoLayout'

export default () => {
  const [fits, setFits] = React.useState<any>([
    'fill',
    'contain',
    'cover',
    'none',
    'scale-down',
  ]);

  const [src, setSrc] = React.useState('');

  React.useEffect(() => {
    setTimeout(() => {
      setSrc(
        'https://cdn2.weimob.com/saas/saas-fe-sirius-orion-node/production/228/tupiansucai1.jpg',
      );
    });
  }, []);

  return (
    <DemoLayout layout="2">
      {fits.map((val: any, index: number) => (
        <div key={index}>
          <Image
            width={100}
            height={100}
            fit={val}
            style={{ background: '#ccc' }}
            src={src}
          />
          <p style={{ textAlign: 'center' }}>{val}</p>
        </div>
      ))}
    </DemoLayout>
  );
};
