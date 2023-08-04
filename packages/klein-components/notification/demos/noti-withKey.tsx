import React from 'react';
import { Notification, Button } from '@klein-design/klein-react';

export default () => {
  const handleClick = () => {
    Notification.open({
      message: 'Message',
      description: 'notification description',
      key: 'NotificationKey',
    });
    setTimeout(() => {
      Notification.open({
        message: 'Message changed',
        description: 'notification description changed',
        key: 'NotificationKey',
      });
    }, 3000);
  };

  return (
    <div>
      <Button type="primary" onClick={handleClick}>
        Notify with key
      </Button>
    </div>
  );
};
