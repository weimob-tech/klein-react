import React from 'react';
import { Tooltip, Button } from '@klein-design/klein-react';

export default () => {
  const text = <span>prompt text</span>;
  const buttonWidth = 70;
  return (
    <div className="demo">
      <div style={{ marginLeft: buttonWidth, whiteSpace: 'nowrap' }}>
        <Tooltip placement="topLeft" title={text}>
          <Button style={{ marginRight: 20 }}>TL</Button>
        </Tooltip>
        <Tooltip placement="top" title={text}>
          <Button style={{ marginRight: 20 }}>Top</Button>
        </Tooltip>
        <Tooltip placement="topRight" title={text}>
          <Button style={{ marginRight: 20 }}>TR</Button>
        </Tooltip>
      </div>
      <div style={{ width: buttonWidth, float: 'left' }}>
        <Tooltip placement="leftTop" title={text}>
          <Button style={{ marginTop: 20 }}>LT</Button>
        </Tooltip>
        <Tooltip placement="left" title={text}>
          <Button style={{ marginTop: 20 }}>Left</Button>
        </Tooltip>
        <Tooltip placement="leftBottom" title={text}>
          <Button style={{ marginTop: 20 }}>LB</Button>
        </Tooltip>
      </div>
      <div style={{ width: buttonWidth, marginLeft: 327 }}>
        <Tooltip placement="rightTop" title={text}>
          <Button style={{ marginTop: 20 }}>RT</Button>
        </Tooltip>
        <Tooltip placement="right" title={text}>
          <Button style={{ marginTop: 20 }}>Right</Button>
        </Tooltip>
        <Tooltip placement="rightBottom" title={text}>
          <Button style={{ marginTop: 20 }}>RB</Button>
        </Tooltip>
      </div>
      <div
        style={{ marginLeft: buttonWidth, clear: 'both', whiteSpace: 'nowrap', marginTop: 20 }}
      >
        <Tooltip placement="bottomLeft" title={text}>
          <Button style={{ marginRight: 20 }}>BL</Button>
        </Tooltip>
        <Tooltip placement="bottom" title={text}>
          <Button style={{ marginRight: 20, width: 72 }}>Bottom</Button>
        </Tooltip>
        <Tooltip placement="bottomRight" title={text}>
          <Button style={{ marginRight: 20 }}>BR</Button>
        </Tooltip>
      </div>
    </div>
  );
};
