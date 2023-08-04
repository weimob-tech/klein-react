import React from 'react';
import { Button, Icon } from '@klein-design/klein-react';
import DemoLayout from '@/components/demo/DemoLayout'

const { SaveLine } = Icon;

export default () => (
  <DemoLayout layout='2'>
    <Button
      type="primary"
      size="small"
      icon={<SaveLine />}
    >
      Primary
    </Button>
    <Button
      type="primary"
      size="medium"
      icon={<SaveLine />}
    >
      Primary
    </Button>
    <Button type="primary" size="large" icon={<SaveLine />}>
      Primary
    </Button>
  </DemoLayout>
);
