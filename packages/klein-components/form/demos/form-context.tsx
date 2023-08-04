import React, { useState, useEffect, useRef } from 'react';
import { Form, Input, Modal, Button, Upload, Radio } from '@klein-design/klein-react';

// const { Number } = Input

// reset form fields when modal is form, closed
const useResetFormOnCloseModal = ({ form, visible }: any) => {
  const prevVisibleRef = useRef();
  useEffect(() => {
    prevVisibleRef.current = visible;
  }, [visible]);
  const prevVisible = prevVisibleRef.current;
  useEffect(() => {
    if (!visible && prevVisible) {
      form.resetFields();
    }
  }, [visible]);
};

const ModalForm = ({ visible, onCancel }: any) => {
  const [form] = Form.useForm();
  useResetFormOnCloseModal({
    form,
    visible,
  });

  const onOk = () => {
    form.submit();
  };

  return (
    <Modal
      title="Basic Drawer"
      visible={visible}
      onOk={onOk}
      onCancel={onCancel}
    >
      <Form style={{ marginTop: 10 }} form={form} name="userForm">
        <Form.Item
          name="name"
          label="用户名"
          labelCol={{
            flex: '64px',
          }}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};

const Demo = () => {
  const [visible, setVisible] = useState(false);

  const showUserModal = () => {
    setVisible(true);
  };

  const hideUserModal = () => {
    setVisible(false);
  };

  const onFinish = (values: any) => {
    console.log('Finish:', values);
  };

  return (
    <>
      <Form.Provider
        onFormFinish={(name: any, { values, forms }: any) => {
          if (name === 'userForm') {
            const { basicForm } = forms;
            const users = basicForm.getFieldValue('users') || [];
            basicForm.setFieldsValue({
              users: [...users, values],
            });
            setVisible(false);
          }
        }}
      >
        <Form name="basicForm" onFinish={onFinish}>
          <Form.Item
            name="username"
            label="用户名"
            rules={[
              {
                required: true,
                message: '请填写用户名',
              },
            ]}
          >
            <Input wSize='m' />
          </Form.Item>
          <Form.Item
            label="使用者"
            itemCenter={false}
            shouldUpdate={(prevValues: any, curValues: any) =>
              prevValues.users !== curValues.users
            }
          >
            {({ getFieldValue }: any) => {
              const users = getFieldValue('users') || [];
              return users.length ? (
                <ul
                  style={{
                    margin: 0,
                    padding: 0,
                  }}
                >
                  {users.map((user: any, index: number) => (
                    /* eslint-disable react/no-array-index-key */
                    <li
                      style={{
                        listStyle: 'none',
                      }}
                      key={index}
                      className="user"
                    >
                      {/* <Avatar icon={<UserOutlined />} /> */}
                      {user.name} - {user.age}
                    </li>
                  ))}
                </ul>
              ) : (
                <div
                  className="ant-form-text"
                  style={{
                    color: '#a2a2a2',
                  }}
                >
                  没有添加用户
                </div>
              );
            }}
          </Form.Item>
          <Form.Item
            wrapperCol={{
              offset: '120px',
            }}
          >
            <Button style={{ width: 80 }} htmlType="submit" type="primary">
              提交
            </Button>
            <Button
              htmlType="button"
              style={{
                margin: '0 12px',
              }}
              onClick={showUserModal}
            >
              添加用户
            </Button>
          </Form.Item>
        </Form>

        <ModalForm visible={visible} onCancel={hideUserModal} />
      </Form.Provider>
    </>
  );
};

export default Demo;
