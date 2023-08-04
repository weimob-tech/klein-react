/**
 * title: 基础示例
 * description: 基本弹框
 */
import React from 'react';
import { Modal, Button } from '@klein-design/klein-react';
import DemoLayout from '@/components/demo/DemoLayout'

type modalSize = 'small' | 'medium' | 'large';

export default () => {
  const [modalVisible, setVisible] = React.useState<boolean>(false);
  const [curSize, setCurSize] = React.useState<modalSize>('medium');

  const handleClick = (size: modalSize) => {
    setVisible(true);
    setCurSize(size);
  };

  const handleModalCancel = () => {
    setVisible(false);
  };

  const handleModalOk = () => {
    setVisible(false);
  };

  return (
    <DemoLayout layout='2'>
      <Button onClick={() => handleClick('small')}>show small modal</Button>
      <Button onClick={() => handleClick('medium')}>show medium modal</Button>
      <Button onClick={() => handleClick('large')}>show large modal</Button>
      <Modal
        title="modal title"
        visible={modalVisible}
        onCancel={handleModalCancel}
        onOk={handleModalOk}
        size={curSize}
      >
        <div>content1...</div>
        <div>content2...</div>
        <div>content3...</div>
      </Modal>
    </DemoLayout>
  );
};
