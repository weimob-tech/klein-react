import React from 'react';
import { Notification, Button } from '@klein-design/klein-react';
import DemoLayout from '@/components/demo/DemoLayout'

export default () => {
  const handleClick = (placement: string) => {
    Notification.open({
      message: `${placement} message`,
      description: `${placement} description`,
      duration: null,
      placement,
    });
  };

  return (
    <DemoLayout layout='2'>
      <Button type="primary" onClick={() => handleClick('topLeft')}>
        TopLeft
      </Button>
      <Button
        type="primary"
        onClick={() => handleClick('topRight')}
      >
        TopRight
      </Button>
      <Button
        type="primary"
        onClick={() => handleClick('bottomLeft')}
      >
        BottomLeft
      </Button>
      <Button
        type="primary"
        onClick={() => handleClick('bottomRight')}
      >
        BottomRight
      </Button>
    </DemoLayout>
  );
};
