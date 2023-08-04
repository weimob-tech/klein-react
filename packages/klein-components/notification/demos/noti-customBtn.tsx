import React from 'react';
import { Notification, Button } from '@klein-design/klein-react';

export default () => {
  const handleClick = () => {
    Notification.open({
      message: 'Message',
      description: 'notification description',
      showBtns: true,
      duration: null,
      btn: (
        <a
          href="###"
          style={{
            display: 'inline-block',
            textDecoration: 'none',
            fontSize: 12,
            color: '#006aff',
            lineHeight: '20px',
          }}
        >
          自定义按钮
        </a>
      ),
    });
  };

  return (
    <div>
      <Button type="primary" onClick={handleClick}>
        Notify with customButton
      </Button>
    </div>
  );
};
