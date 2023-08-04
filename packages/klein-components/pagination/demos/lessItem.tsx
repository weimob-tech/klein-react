import React from 'react';
import { Pagination } from '@klein-design/klein-react';

export default () => {
  return (
    <div>
      <Pagination total={100} showLessItems />
      <br />
      <Pagination total={100} showLessItems leftRightItemOne />
    </div>
  );
};
