/**
 * title: 弹窗存在最大高度
 * description: 当内容超出最大高度时，弹窗body区域出现滚动条
 */
import React from 'react';
import { Modal, Button, Form, Upload, Checkbox, Input } from '@klein-design/klein-react';

const { Item } = Form;
const plainOptions = ['男', '女'];

export default () => {
  const [modalVisible, setVisible] = React.useState<boolean>(false);
  const [modalStyle, setModalStyle] = React.useState<any>();

  const handleClick = () => {
    setModalStyle('default');
    setVisible(true);
  };

  const handleExClick = () => {
    setModalStyle('expansion');
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
      <Button onClick={handleExClick}>内容超出弹窗最大高度</Button>
      <Modal
        title="弹窗标题"
        visible={modalVisible}
        onCancel={handleModalCancel}
        onOk={handleModalOk}
        modalStyle={modalStyle}
        maxHeight
        size="large"
        width={484}
      >
        <Form name="basic" labelCol={{ 
            flex: '0 0 62px'
          }}>
          <Item
            label="用户名"
            name="username"
            rules={[{ required: true, message: '请填写用户名' }]}
          >
            <Input placeholder="请输入用户名" wSize='m' />
          </Item>
          <Item
            label="性别"
            name="sex"
            itemCenter={false}
            rules={[{ required: true, message: '请选择性别' }]}
            popover={{ title: '性别', content: '请选择性别' }}
            initialValue={['Apple', 'Pear']}
          >
            <Checkbox.Group options={plainOptions}>
              <Checkbox value="man">男</Checkbox>
              <Checkbox value="female">女</Checkbox>
            </Checkbox.Group>
          </Item>
          <Item
            label="密码"
            name="password"
            rules={[{ required: true, message: '请填写密码' }]}
          >
            <Input placeholder="请输入密码" wSize='m' />
          </Item>
          <Item
            name="头像"
            label="Avatar"
            style={{ marginBottom: 0 }}
            itemCenter={false}
            rules={[
              {
                required: true,
              },
            ]}
            valuePropName="fileList"
          >
            <Upload listType="picture-card" />
          </Item>
        </Form>
      </Modal>
    </div>
  );
};
