import React from 'react';
import { Modal, Button } from '@klein-design/klein-react';

function countDown() {
  let secondsToGo = 3;
  const modal = Modal.success({
    title: 'This is a notification message',
    content: `This modal will be destroyed after ${secondsToGo} second.`,
  });
  const timer = setInterval(() => {
    secondsToGo -= 1;
    modal.update({
      content: `This modal will be destroyed after ${secondsToGo} second.`,
      confirmLoading: true,
    });
  }, 1000);
  setTimeout(() => {
    clearInterval(timer);
    modal.destroy();
  }, secondsToGo * 1000);
}

export default () => {
  return <div><Button onClick={countDown}>Open modal to close in 3s</Button></div>;
};
