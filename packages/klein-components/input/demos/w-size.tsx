/**
 * title: 5种内置宽度
 */

import React from 'react';
import { Input } from '@klein-design/klein-react';

export default () => (
  <>
    <Input
      placeholder="xs"
      wSize="xs"
      style={{ marginRight: 15 }}
    />
    <Input
      style={{ marginRight: 15 }}
      wSize="sm"
      placeholder="sm"
    />

    <Input
      style={{ marginRight: 15 }}
      wSize="m"
      placeholder="m"
    />

    <Input
      placeholder="l"
      wSize="l"
      style={{ marginRight: 15 }}
    />
    <Input placeholder="xl" wSize="xl" />
  </>
);
