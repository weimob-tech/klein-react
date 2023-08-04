import React from 'react';
import { Button } from '@klein-design/klein-react';
import DemoLayout from '@/components/demo/DemoLayout'

export default () => (
  <DemoLayout layout='2'>
    <Button danger type="primary">
      Primary
    </Button>
    <Button danger type="default">
      Default
    </Button>
    <Button danger type="dashed">
      Dashed
    </Button>
    <Button danger type="link">
      Link
    </Button>
    {/* <Button disabled type="dashed" style={{marginLeft: 10}}>Dashed Button</Button>
    <Button disabled type="dashed" style={{marginLeft: 10}}>Dashed Button</Button> */}
  </DemoLayout>
);
