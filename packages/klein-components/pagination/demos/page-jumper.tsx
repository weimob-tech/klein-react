import React from 'react';
import { Pagination } from '@klein-design/klein-react';

export default () => {
  return (
    <div>
      <Pagination total={200} showQuickJumper />
    </div>
  );
};
