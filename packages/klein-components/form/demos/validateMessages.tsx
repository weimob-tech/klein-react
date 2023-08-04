/**
 * title: 基础示例
 * description: 表单基础用法。
 */
import React from 'react';
import { Form, Input, Button, InputNumber } from '@klein-design/klein-react';

const { Item } = Form;

export default () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log('values...', values);
  };

  const validateMessages = {
    /* eslint-disable */
    required: '${label} is required!',
    types: {
      /* eslint-disable */
      email: '${label} is not a valid email!',
    },
  };

  return (
    <>
      <Form
        name="basic"
        form={form}
        onFinish={onFinish}
        validateMessages={validateMessages}
      >
        <Item
          label="姓名"
          name={['user', 'name']}
          rules={[{ required: true }]}
          tooltip="大家好大家好大家好大家好大家好大家好大家好大家好大家好大家好"
        >
          <Input placeholder="请输入用户名" wSize='m' />
        </Item>
        <Item label="年龄" name={['user', 'age']}>
          <Input wSize='m' />
        </Item>
        <Item label="手机" name={['user', 'phone']}>
          <Input wSize='m' />
        </Item>
        <Item label="邮箱" name={['user', 'email']}>
          <Input wSize='m' />
        </Item>
        <Item
          wrapperCol={{
            offset: '120px',
          }}
        >
          <Button
            onClick={() => {
              form.scrollToField(['user', 'age']);
            }}
            type="primary"
          >
            确认
          </Button>
        </Item>
      </Form>
    </>
  );
};
