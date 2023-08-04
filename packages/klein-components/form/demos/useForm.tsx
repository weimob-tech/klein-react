/**
 * title: 表单方法调用
 * desc: 通过Form.useForm进行表单数据交互。
 */

import React from 'react';
import { Input, Button, Switch, Form } from '@klein-design/klein-react';

const { Item } = Form;

export default () => {
  const [form] = Form.useForm();

  const onReset = () => {
    form.resetFields();
  };

  const onFill = () => {
    form.setFieldsValue({
      username: 'weimob',
      password: 'weimob1234',
      switch: 'true',
    });
  };
  const handleOnFinish = (val) => {
    console.log(val, 'onfinish');
  };

  return (
    <Form name="basic" form={form} onFinish={handleOnFinish}>
      <Item
        label="姓名"
        name="username"
        rules={[{ required: true, message: '请填写用户名' }]}
        extra="请输入真实姓名"
      >
        <Input wSize='m' placeholder="请输入用户名" />
      </Item>
      <Item
        label="密码"
        name="password"
        rules={[{ required: true, message: '请填写密码' }]}
      >
        <Input wSize='m' placeholder="请输入密码" />
      </Item>
      <Item
        label="开关"
        name="switch"
        rules={[{ required: true, message: '请选择状态' }]}
        valuePropName="checked"
      >
        <Switch />
      </Item>
      <Item
        wrapperCol={{
          offset: '120px',
        }}
        style={{ marginBottom: 0 }}
      >
        <Button style={{ width: 72 }} type="primary" htmlType="submit">
          Submit
        </Button>
        <Button
          style={{ width: 72, marginLeft: 12 }}
          htmlType="button"
          onClick={onReset}
        >
          Reset
        </Button>
        <Button
          style={{
            marginLeft: 10,
          }}
          type="link"
          htmlType="button"
          onClick={onFill}
        >
          Fill form
        </Button>
      </Item>
    </Form>
  );
};
