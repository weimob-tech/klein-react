import React from 'react';
import { Pagination } from '@klein-design/klein-react';

export default () => (
  <Pagination
    size="mini"
    total={200}
    showSizeChanger
    onShowSizeChange={(current, pageSize) => {
      console.log(current, pageSize);
    }}
  />
);
