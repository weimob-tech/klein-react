import React from 'react';
import { Button } from '@klein-design/klein-react';
import DemoLayout from '@/components/demo/DemoLayout'

export default () => (
  <DemoLayout layout='2'>
    <Button loading type="primary">
      Primary
    </Button>
    <Button loading type="default">
      Default
    </Button>
    <Button loading type="dashed">
      Dashed
    </Button>
  </DemoLayout>
);
