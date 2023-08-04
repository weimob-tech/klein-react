/**
 * title: 基础示例
 * description: 表单基础用法。
 */
import React from 'react';
import {
  Form,
  Input,
  Button,
  Upload,
  Divider,
  Checkbox,
  DatePicker,
  InputNumber,
} from '@klein-design/klein-react';

const { Item } = Form;

const plainOptions = ['男', '女'];

export default () => {
  const onFinish = (values: any) => {
    console.log('values...', values);
  };

  const normFile = (e: any) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  const formItemLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 20 },
  };
  return (
    <>
      <Form name="basic" onFinish={onFinish}>
        <Item
          label="姓名"
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
          rightExtra="sex info"
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
          name="上传图片"
          label="Avatar"
          itemCenter={false}
          rules={[
            {
              required: true,
            },
          ]}
          getValueFromEvent={normFile}
          valuePropName="fileList"
        >
          <Upload listType="picture-card" />
        </Item>
        <Item
          wrapperCol={{
            offset: '120px',
          }}
        >
          <Button htmlType="submit" type="primary">
            确认
          </Button>
        </Item>
      </Form>
      {/* <br /> */}
      {/* <Divider />
      <br />
      <Form name="basicTwo" onFinish={onFinish} {...formItemLayout}>
        <Item
          label="Username"
          name="username"
          rules={[{ required: true, message: '请填写用户名' }]}
          tooltip="大家好"
        >
          <Input placeholder="请输入用户名" />
        </Item>
        <Item
          label="Password"
          name="password"
          rules={[{ required: true, message: '请填写密码' }]}
        >
          <Input placeholder="请输入密码" />
        </Item>
        <Item
          label="Price"
          name="Price"
          rules={[{ required: true, message: '请填写价格' }]}
        >
          <InputNumber
            defaultValue="1"
            min={0.01}
            max={10}
            precision={2}
            step={0.01}
          />
        </Item>
        <Item
          label="Number"
          name="Number"
          rules={[{ required: true, message: '请填写号码' }]}
        >
          <InputNumber defaultValue="1" />
        </Item>
        <Item
          name="avatar"
          label="Avatar"
          itemCenter={false}
          rules={[
            {
              required: true,
            },
          ]}
          valuePropName="fileList"
          getValueFromEvent={normFile}
        >
          <Upload listType="picture-card" />
        </Item>
        <Item
          wrapperCol={{
            offset: 4,
            span: 12,
          }}
        >
          <Button htmlType="submit" type="primary">
            确认
          </Button>
        </Item>
      </Form> */}
    </>
  );
};
