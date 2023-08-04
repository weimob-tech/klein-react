import React from 'react';
import { Notification, Button } from '@klein-design/klein-react';
import DemoLayout from '@/components/demo/DemoLayout'

export default () => {
  const handleClick = (type: string) => {
    Notification[type]({
      message: 'Message',
      description: 'notification description',
      duration: null,
    });
  };

  return (
    <DemoLayout layout='2'>
      <Button type="primary" ghost onClick={() => handleClick('info')}>
        Info
      </Button>
      <Button
        danger
        ghost
        onClick={() => handleClick('error')}
      >
        Error
      </Button>
      <Button
        warning
        ghost
        onClick={() => handleClick('warning')}
      >
        Warn
      </Button>
      <Button
        success
        ghost
        onClick={() => handleClick('success')}
      >
        Success
      </Button>
    </DemoLayout>
  );
};
