import React from 'react';
import { Notification, Button } from '@klein-design/klein-react';

export default () => {
  const handleClick = () => {
    Notification.open({
      message: 'Message',
      description: 'notification description',
    });
  };

  return (
    <div>
      <Button type="primary" onClick={handleClick}>
        Basic notify
      </Button>
    </div>
  );
};
