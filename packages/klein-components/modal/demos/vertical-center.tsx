import React from 'react';
import { Modal, Button } from '@klein-design/klein-react';

export default () => {
  const [modalVisible, setVisible] = React.useState<boolean>(false);

  const handleClick = () => {
    setVisible(true);
  };

  const handleModalCancel = () => {
    setVisible(false);
  };

  const handleModalOk = () => {
    setVisible(false);
  };

  return (
    <div>
      <Button onClick={handleClick}>show vertical centered modal</Button>
      <Modal
        title="modal title"
        visible={modalVisible}
        onCancel={handleModalCancel}
        onOk={handleModalOk}
        centered
      >
        <div>content1...</div>
        <div>content2...</div>
        <div>content3...</div>
      </Modal>
    </div>
  );
};
