/**
 * title: 自定义校验规则
 * description: 用于自定义规则。
 */
import React from 'react';
import { Form, Input, Button, InputNumber } from '@klein-design/klein-react';

const { Item } = Form;

export default () => {
  const onFinish = (values: any) => {
    console.log('values...', values);
  };

  const validateEmail = (rule: any, value: any) => {
    if (!value) {
      return Promise.reject(new Error('请填写email'));
    }
    if (!/@qq\.com$/.test(value)) {
      return Promise.reject(new Error('请填写qq email'));
    }
    return Promise.resolve();
  };

  return (
    <>
      <Form name="basic" onFinish={onFinish}>
        <Item
          name={['user', 'email']}
          label="邮箱"
          rules={[
            {
              validator: (rule, value) => validateEmail(rule, value),
            },
          ]}
        >
          <Input wSize='sm' />
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
    </>
  );
};
