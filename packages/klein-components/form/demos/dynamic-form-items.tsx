import React from 'react';
import { Form, Input, Button, Icon, Grid } from '@klein-design/klein-react';

const { RemoveLine } = Icon;
const { Row, Col } = Grid;

const Demo = () => {
  const onFinish = (values: any) => {
    console.log('Received values of form:', values);
  };

  return (
    <Form name="dynamic_form_nest_item" onFinish={onFinish}>
      <Form.List
        name="users"
        rules={[
          {
            validator: async (_, names) => {
              console.log('names.....', names);
              if (!names || names.length < 2) {
                return Promise.reject(new Error('At least 2 passengers'));
              }
            },
          },
        ]}
      >
        {(fields: any, { add, remove }: any, { errors }) => {
          console.log('errors....', errors);
          return (
            <>
              {fields.map(({ key, name, fieldKey, ...restField }: any) => (
                <div>
                  <Form.Item
                    {...restField}
                    name={[name, 'first']}
                    fieldKey={[fieldKey, 'first']}
                    rules={[
                      { required: true, message: 'Missing first name' },
                    ]}
                    style={{ display: 'inline-block', marginRight: 12 }}
                  >
                    <Input placeholder="First Name" wSize='sm' />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    name={[name, 'last']}
                    fieldKey={[fieldKey, 'last']}
                    rules={[{ required: true, message: 'Missing last name' }]}
                    style={{ display: 'inline-block', marginRight: 12 }}
                  >
                    <Input placeholder="Last Name" wSize='sm' />
                  </Form.Item>
                  <RemoveLine
                    style={{
                      marginTop: 5,
                      fontSize: 21,
                      color: '#a2a2a2',
                      lineHeight: 0,
                      cursor: 'pointer',
                    }}
                    onClick={() => remove(name)}
                  />
                </div>
              ))}
              <Form.Item>
                <Button type="dashed" onClick={() => add()}>
                  Add field
                </Button>
                <Form.ErrorList errors={errors} />
              </Form.Item>
            </>
          );
        }}
      </Form.List>
      <Form.Item noStyle>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Demo;
