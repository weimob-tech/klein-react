import React from 'react';
import { Button, Icon } from '@klein-design/klein-react';
import DemoLayout from '@/components/demo/DemoLayout'

const { ExitFullScreenLine } = Icon;

export default () => (
  <DemoLayout layout='2'>
    <Button type="primary">Primary</Button>
    <Button type="default">
      Default
    </Button>
    <Button type="dashed">
      Dashed
    </Button>
    <Button type="link">
      Link
    </Button>
  </DemoLayout>
);
