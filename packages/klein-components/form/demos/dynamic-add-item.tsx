import React from 'react';
import { Form, Input, Button, Icon } from '@klein-design/klein-react';

const { RemoveLine } = Icon;

const DynamicFieldSet = () => {
  const onFinish = (values: any) => {
    /* eslint-disable no-console */
    console.log('Received values of form:', values);
  };

  return (
    <Form name="dynamic_form_item" onFinish={onFinish}>
      <Form.List
        name="names"
        rules={[
          {
            validator: async (_: any, names: any) => {
              if (!names || names.length < 2) {
                return Promise.reject(new Error('At least 2 passengers'));
              }
            },
          },
        ]}
      >
        {(fields: any, { add, remove }: any) => (
          <>
            {fields.map((field: any) => (
              <Form.Item
                // label={index === 0 ? '新增商品' : ''}
                required={false}
                key={field.key}
              >
                <Form.Item
                  {...field}
                  labelWidth={0}
                  validateTrigger={['onChange', 'onBlur']}
                  rules={[
                    {
                      required: true,
                      whitespace: true,
                      message:
                        "Please input passenger's name or delete this field.",
                    },
                  ]}
                  noStyle
                >
                  <Input
                    placeholder="passenger name"
                    wSize='m'
                  />
                </Form.Item>
                {fields.length >= 1 ? (
                  <RemoveLine
                    style={{
                      marginLeft: 12,
                      fontSize: 21,
                      color: '#a2a2a2',
                      // lineHeight: 0,
                      cursor: 'pointer',
                      verticalAlign: 'text-top'
                    }}
                    className="dynamic-delete-button"
                    onClick={() => remove(field.name)}
                  />
                ) : null}
              </Form.Item>
            ))}
            <Form.Item>
              <Button
                type="dashed"
                onClick={() => add()}
                style={{ width: '352px' }}
              >
                Add field
              </Button>
              <br />
              <Button
                type="dashed"
                onClick={() => {
                  add('The head item', 0);
                }}
                style={{ marginTop: 20, width: '352px' }}
              >
                Add field at head
              </Button>
              {/* <Form.ErrorList errors={errors} /> */}
            </Form.Item>
          </>
        )}
      </Form.List>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default DynamicFieldSet;
