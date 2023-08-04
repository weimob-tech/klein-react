/**
 * title: 基本用法
 * desc: 基本使用。
 */
import React, { useState } from 'react';
import { Drawer, Button } from '@klein-design/klein-react';

export default () => {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  return (
    <>
      <Button type="primary" style={{ width: 80 }} onClick={showDrawer}>
        Open
      </Button>
      <Drawer
        placement="right"
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
