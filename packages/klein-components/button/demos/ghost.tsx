import React from 'react';
import { Button } from '@klein-design/klein-react';
import DemoLayout from '@/components/demo/DemoLayout'

export default () => (
  <DemoLayout layout='2'>
    <Button ghost type="primary">
      Primary
    </Button>
    {/* <Button ghost type="default" style={{ marginLeft: 10 }}>
      Default
    </Button> */}
    <Button ghost success type="dashed">
      Dashed
    </Button>
    <Button ghost danger type="dashed">
      Dashed
    </Button>
    <Button ghost warning type="dashed">
      Dashed
    </Button>
  </DemoLayout>
);
