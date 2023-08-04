import React from 'react';
import { Modal, Button } from '@klein-design/klein-react';

export default () => {
  const handleClick = () => {
    Modal.info({
      title: 'This is a notification message',
      content: (
        <div>
          <div>notification message....</div>
          <div>notification message....</div>
        </div>
      ),
      onOk() {
        return new Promise((resolve, reject) => {
          setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
        }).catch(() => console.log('Oops errors!'));
      },
    });
  };

  return (
    <div>
      <Button onClick={handleClick}>trigger</Button>
    </div>
  );
};
