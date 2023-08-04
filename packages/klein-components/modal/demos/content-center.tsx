import React from 'react';
import { Modal, Button } from '@klein-design/klein-react';
import DemoLayout from '@/components/demo/DemoLayout'

export default () => {
  const [modalVisible, setVisible] = React.useState<boolean>(false);
  const [modalNoTitleVisible, setVisibleNoTitle] = React.useState<boolean>(
    false,
  );
  const [
    modalNoBodyVisibleVisible,
    setVisibleNoBodyVisible,
  ] = React.useState<boolean>(false);

  const handleClick = () => {
    setVisible(true);
  };

  const handleNoTitleClick = () => {
    setVisibleNoTitle(true);
  };

  const handleNoBodyClick = () => {
    setVisibleNoBodyVisible(true);
  };

  const handleModalCancel = () => {
    setVisible(false);
  };

  const handleNoTitleModalCancel = () => {
    setVisibleNoTitle(false);
  };

  const handleNoBodyModalCancel = () => {
    setVisibleNoBodyVisible(false);
  };

  const handleNoBodyModalOk = () => {
    setVisibleNoBodyVisible(false);
  };

  const handleNoTitleModalOk = () => {
    setVisibleNoTitle(false);
  };

  const handleModalOk = () => {
    setVisible(false);
  };

  return (
    <DemoLayout layout='2'>
      <Button onClick={handleClick}>content centered</Button>
      <Button style={{ marginLeft: 10 }} onClick={handleNoTitleClick}>
        centered && noTitle
      </Button>
      <Button style={{ marginLeft: 10 }} onClick={handleNoBodyClick}>
        centered && noBody
      </Button>
      <Modal
        title="居中的Modal对话框标题"
        visible={modalVisible}
        onCancel={handleModalCancel}
        onOk={handleModalOk}
        closable={false}
        contentCentered
      >
        <div>您有 1 笔直播订单未扣点，已全额付款到您的账号</div>
        <div>若7天内未完成支付将影响您使用直播功能。</div>
      </Modal>

      <Modal
        visible={modalNoTitleVisible}
        onCancel={handleNoTitleModalCancel}
        onOk={handleNoTitleModalOk}
        closable={false}
        contentCentered
      >
        <div>您有 1 笔直播订单未扣点，已全额付款到您的账号</div>
        <div>若7天内未完成支付将影响您使用直播功能。</div>
      </Modal>

      <Modal
        title="居中的Modal对话框标题"
        visible={modalNoBodyVisibleVisible}
        onCancel={handleNoBodyModalCancel}
        onOk={handleNoBodyModalOk}
        closable={false}
        contentCentered
      >
        {/* <div>您有 1 笔直播订单未扣点，已全额付款到您的账号</div>
        <div>若7天内未完成支付将影响您使用直播功能。</div> */}
      </Modal>
    </DemoLayout>
  );
};
