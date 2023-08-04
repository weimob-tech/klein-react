import React from 'react';
import { Modal, Button } from '@klein-design/klein-react';
import DemoLayout from '@/components/demo/DemoLayout'

export default () => {
  const [modalVisible, setVisible] = React.useState<boolean>(false);
  const [noContentModalVisible, setNoConModalVisible] = React.useState<boolean>(
    false,
  );

  const handleClick = () => {
    setVisible(true);
  };

  const handleModalCancel = () => {
    setVisible(false);
  };

  const handleModalOk = () => {
    setVisible(false);
  };

  const handleNoConClick = () => {
    setNoConModalVisible(true);
  };

  const handleNoConModalCancel = () => {
    setNoConModalVisible(false);
  };

  const handleNoConModalOk = () => {
    setNoConModalVisible(false);
  };

  return (
    <DemoLayout layout='2'>
      <Button onClick={handleClick}>no title</Button>
      <Button onClick={handleNoConClick}>
        no content
      </Button>
      <Modal
        visible={modalVisible}
        onCancel={handleModalCancel}
        onOk={handleModalOk}
        closable={false}
      >
        <div>content1...</div>
        <div>content2...</div>
        <div>content3...</div>
      </Modal>
      <Modal
        visible={noContentModalVisible}
        onCancel={handleNoConModalCancel}
        onOk={handleNoConModalOk}

        closable={false}
        title="仅有标题的Modal对话框标题-默认宽度，最多不超过2行，超过两行换大宽度对话框"
       />
    </DemoLayout>
  );
};
