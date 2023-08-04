import React from 'react';
import { message, Button } from '@klein-design/klein-react';
import DemoLayout from '@/components/demo/DemoLayout'

export default () => {
  const handleClick = (type: string, tip) => {
    message[type]('这是一条成功消息, 这是一条成功消息');
  };

  return (
    <DemoLayout layout='2'>
      <Button onClick={() => handleClick('info', '这是一条info消息, 这是一条info消息')}>info</Button>
      <Button onClick={() => handleClick('success', '这是一条成功消息, 这是一条成功消息')}>
        success
      </Button>
      <Button onClick={() => handleClick('warning', '这是一条警告消息, 这是一条警告消息')}>
        warning
      </Button>
      <Button onClick={() => handleClick('error', '这是一条错误消息, 这是一条错误消息')}>
        error
      </Button>
    </DemoLayout>
  );
};
