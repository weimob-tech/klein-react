import React from 'react';
import { Notification, Button } from '@klein-design/klein-react';

export default () => {
  const handleClick = () => {
    Notification.open({
      message: 'Message',
      description: 'notification description',
      showBtns: true,
      duration: null,
      /* eslint-disable no-console */
      confirm: () => console.log('confirm'),
      /* eslint-disable no-console */
      cancel: () => console.log('cancel'),
      key: +new Date(),
    });
  };

  return (
    <div>
      <Button type="primary" onClick={handleClick}>
        Notify with button
      </Button>
    </div>
  );
};
