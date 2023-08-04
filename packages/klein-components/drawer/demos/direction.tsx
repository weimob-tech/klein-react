/**
 * title: 自定义方向
 * desc: 自定义方向。
 */
import React, { useState } from 'react';
import { Drawer, Button, Radio } from '@klein-design/klein-react';

export default () => {
  const [visible, setVisible] = useState(false);
  const [placement, setPlacement] = useState('right');
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  const onChange = (e) => {
    setPlacement(e.target.value);
  };
  return (
    <>
      <Radio.Group value={placement} onChange={onChange}>
        <Radio value="top">top</Radio>
        <Radio value="right">right</Radio>
        <Radio value="bottom">bottom</Radio>
        <Radio value="left">left</Radio>
      </Radio.Group>
      <Button
        type="primary"
        onClick={showDrawer}
        style={{ width: 80 }}
      >
        Open
      </Button>
      <Drawer
        placement={placement}
        title="Basic Drawer"
        onClose={onClose}
        visible={visible}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};
