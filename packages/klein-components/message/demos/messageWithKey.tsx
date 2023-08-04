import React from 'react';
import { message, Button } from '@klein-design/klein-react';

export default () => {
  const handleClick = () => {
    message.info({
      className: 'custom-class',
      content: '这是一条成功消息，会主动消失。',
      key: 'curMsg',
    });
    setTimeout(() => {
      message.info({
        className: 'custom-class',
        content: '改变message的值。',
        duration: 10,
        key: 'curMsg',
      });
    }, 1000);
  };

  return (
    <div>
      <Button onClick={handleClick}>unique key</Button>
    </div>
  );
};
