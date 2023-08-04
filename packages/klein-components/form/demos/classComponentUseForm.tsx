import React from 'react';
import { Form, Input, Button, Select } from '@klein-design/klein-react';

const { Item } = Form;
const { Option } = Select;

class ClassFormDemo extends React.Component {
  formRef = React.createRef<any>();

  onFinish = (values: any) => {
    console.log('values...', values);
  };

  onReset = () => {
    this.formRef.current!.resetFields();
  };

  onFill = () => {
    this.formRef.current!.setFieldsValue({
      username: 'weimob',
      password: 'weimob123',
      sex: '男',
    });
  };

  render() {
    return (
      <Form name="basic" onFinish={this.onFinish} ref={this.formRef}>
        <Item
          label="姓名"
          name="username"
          rules={[{ required: true, message: '请填写用户名' }]}
        >
          <Input wSize='sm' placeholder="请输入用户名" />
        </Item>
        <Item
          label="密码"
          name="password"
          rules={[{ required: true, message: '请填写密码' }]}
        >
          <Input wSize='sm' placeholder="请输入密码" />
        </Item>
        <Item
          label="性别"
          name="sex"
          rules={[{ required: true, message: '请选择性别' }]}
        >
          <Select style={{ width: 112 }} placeholder="请选择性别">
            <Option value="男">男</Option>
            <Option value="女">女</Option>
          </Select>
        </Item>
        <Item
          wrapperCol={{
            offset: '120px',
          }}
        >
          <Button style={{ width: 72 }} type="primary" htmlType="submit">
            Submit
          </Button>
          <Button
            style={{ width: 72, marginLeft: 12 }}
            htmlType="button"
            onClick={this.onReset}
          >
            Reset
          </Button>
          <Button 
            style={{ marginLeft: 12 }} type="link" htmlType="button" onClick={this.onFill}>
            Fill form
          </Button>
        </Item>
      </Form>
    );
  }
}

export default ClassFormDemo;
