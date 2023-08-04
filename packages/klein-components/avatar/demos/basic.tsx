import React from 'react';
import { Avatar, Button } from '@klein-design/klein-react';
import DemoLayout from '@/components/demo/DemoLayout'

export default () => {
  const defaultSrc =
    'https://cdn2.weimob.com/saas/@assets/saas-fe-group-web-stc/img/index/icon_saas_wz.png?2018041';

  const [src, setSrc] = React.useState('');

  React.useEffect(() => {
    setTimeout(() => {
      setSrc(defaultSrc);
    });
  }, []);

  return (
    <>
      <DemoLayout layout='2'>
        <Avatar src={src} shape="circle" size={60} />
        <Avatar src={src} shape="circle" size="large" />
        <Avatar src={src} shape="circle" size="medium" />
        <Avatar src={src} shape="circle" size="small" />
      </DemoLayout>
      <DemoLayout layout='2'>
        <Avatar src={src} shape="square" size={60} />
        <Avatar src={src} shape="square" size="large" />
        <Avatar src={src} shape="square" size="medium" />
        <Avatar src={src} shape="square" size="small" />
      </DemoLayout>
    </>
  );
};
