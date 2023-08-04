import React from 'react';
import { Pagination } from '@klein-design/klein-react';

export default () => {
  return (
    <div>
      <Pagination simple total={200} />
      <br />
      <Pagination simple total={200} disabled />
    </div>
  );
};
