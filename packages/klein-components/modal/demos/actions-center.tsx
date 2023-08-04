import React from 'react';
import { Modal, Button } from '@klein-design/klein-react';
import DemoLayout from '@/components/demo/DemoLayout'

export default () => {
  const handleClick = (type: string) => {
    Modal[type]({
      title: 'This is a notification message',
      content: (
        <div>
          <div>notification message....</div>
          <div>notification message....</div>
        </div>
      ),
      // centered: true,
      contentCentered: true,
      // onOk() {},
    });
  };

  return (
    <DemoLayout layout='2'>
      <Button onClick={() => handleClick('info')}>info</Button>
      <Button onClick={() => handleClick('success')}>success</Button>
      <Button onClick={() => handleClick('warning')}>warning</Button>
      <Button onClick={() => handleClick('error')}>error</Button>
    </DemoLayout>
  );
};
