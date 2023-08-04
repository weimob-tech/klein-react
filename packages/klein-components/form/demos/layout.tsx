/**
 * title: 表单布局
 * description: 三种布局方式。
 */
import React from 'react';
import { Form, Input, Button } from '@klein-design/klein-react';
import DemoLayout from '@/components/demo/DemoLayout'

const { Item } = Form;

export default () => {
  const [curLayout, setCurLayout] = React.useState('horizontal');

  return (
    <>
      <DemoLayout layout='2'>  
        <Button onClick={() => setCurLayout('horizontal')}>horizontal</Button>
        <Button onClick={() => setCurLayout('vertical')}>vertical</Button>
        <Button onClick={() => setCurLayout('inline')}>inline</Button>
      </DemoLayout>
      <Form name="basic" layout={curLayout}>
        <Item
          label="左侧垂直居中"
          name="title"
          // rules={[{ required: true, message: '请填写用户名' }]}
        >
          <Input wSize='sm' />
        </Item>
        <Item required label="左侧顶部对齐">
          <Input wSize='sm' />
        </Item>
      </Form>
    </>
  );
};
