import React from 'react';
import { Image } from '@klein-design/klein-react';

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
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Image
          width={100}
          height={100}
          functions={(funcs: React.ReactNode[]) => {
            // funcs.splice(1, 1, <div>按钮</div>)
            // return funcs
            return funcs
          }}
          style={{ background: '#ccc' }}
          src={src}
        />
      </div>
    </>
  );
};
