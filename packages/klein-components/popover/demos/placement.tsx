import React from 'react';
import { Popover, Button } from '@klein-design/klein-react';

export default () => {
  const text = 'popover title';
  const content = 'popover content';
  const buttonWidth = 70;
  return (
    <div className="demo">
      <div style={{ marginLeft: buttonWidth, whiteSpace: 'nowrap' }}>
        <Popover placement="topLeft" title={text} content={content}>
          <Button  style={{ marginRight: 20 }}>TL</Button>
        </Popover>
        <Popover placement="top" title={text} content={content}>
          <Button style={{ marginRight: 20 }}>Top</Button>
        </Popover>
        <Popover placement="topRight" title={text} content={content}>
          <Button>TR</Button>
        </Popover>
      </div>
      <div style={{ width: buttonWidth, float: 'left' }}>
        <Popover placement="leftTop" title={text} content={content}>
          <Button style={{ marginTop: 20 }}>LT</Button>
        </Popover>
        <Popover placement="left" title={text} content={content}>
          <Button style={{ marginTop: 20 }}>Left</Button>
        </Popover>
        <Popover placement="leftBottom" title={text} content={content}>
          <Button style={{ marginTop: 20 }}>LB</Button>
        </Popover>
      </div>
      <div style={{ width: buttonWidth, marginLeft: 328, marginTop: 20 }}>
        <Popover placement="rightTop" title={text} content={content}>
          <Button>RT</Button>
        </Popover>
        <Popover placement="right" title={text} content={content}>
          <Button style={{ marginTop: 20 }}>Right</Button>
        </Popover>
        <Popover placement="rightBottom" title={text} content={content}>
          <Button style={{ marginTop: 20 }}>RB</Button>
        </Popover>
      </div>
      <div
        style={{ marginLeft: buttonWidth, clear: 'both', whiteSpace: 'nowrap', marginTop: 20 }}
      >
        <Popover placement="bottomLeft" title={text} content={content}>
          <Button style={{ marginRight: 20 }} >BL</Button>
        </Popover>
        <Popover placement="bottom" title={text} content={content}>
          <Button style={{ marginRight: 20, width: 72 }}>Bottom</Button>
        </Popover>
        <Popover placement="bottomRight" title={text} content={content}>
          <Button style={{ marginRight: 20 }}>BR</Button>
        </Popover>
      </div>
    </div>
  );
};
