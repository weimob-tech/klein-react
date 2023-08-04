import React from 'react';
import { message, Button } from '@klein-design/klein-react';

export default () => {
  const handleClick = (type: string) => {
    message[type]('这是一条成功消息，会主动消失。', 10);
  };

  return (
    <div>
      <Button type="primary" onClick={() => handleClick('info')}>
        info
      </Button>
    </div>
  );
};
