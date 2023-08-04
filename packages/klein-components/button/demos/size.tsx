import React from 'react';
import { Button } from '@klein-design/klein-react';
import DemoLayout from '@/components/demo/DemoLayout'

export default () => (
  <DemoLayout layout='2'>
    <Button type="primary" size="small">
      Small
    </Button>
    <Button type="primary" size="medium">
      Medium
    </Button>
    <Button type="primary" size="large">
      Large
    </Button>
  </DemoLayout>
);
