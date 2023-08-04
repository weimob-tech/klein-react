import React from 'react';
import { message, Button } from '@klein-design/klein-react';

export default () => {
  const handleClick = (type: string) => {
    message[type](`这是一条成功消息，会主动消失。${new Date()}`);
  };

  message.config({
    maxCount: 3,
  });

  return (
    <div>
      <Button style={{ marginLeft: 10 }} onClick={() => handleClick('success')}>
        success
      </Button>
    </div>
  );
};
