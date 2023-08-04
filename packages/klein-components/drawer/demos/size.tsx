/**
 * title: 可选大小
 * desc: 可选用不同尺寸。
 */
import React, { useState } from 'react';
import { Drawer, Button, Radio } from '@klein-design/klein-react';

export default () => {
  const [visible, setVisible] = useState(false);
  const [size, setSize] = useState('medium');
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  const onChange = (e) => {
    setSize(e.target.value);
  };
  return (
    <>
      <Radio.Group value={size} onChange={onChange}>
        <Radio value="small">small</Radio>
        <Radio value="medium">medium</Radio>
        <Radio value="large">large</Radio>
      </Radio.Group>
      <Button
        type="primary"
        onClick={showDrawer}
        style={{ width: '80px' }}
      >
        Open
      </Button>
      <Drawer
        size={size}
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
