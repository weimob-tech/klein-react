import React from 'react';
import { message, Button } from '@klein-design/klein-react';

export default () => {
  const handleClick = () => {
    message.info({
      className: 'custom-class',
      content: '这是一条成功消息，会主动消失。',
      duration: 5,
      style: {
        marginTop: 100,
      },
    });
  };

  return (
    <div>
      <Button onClick={handleClick}>info</Button>
    </div>
  );
};
