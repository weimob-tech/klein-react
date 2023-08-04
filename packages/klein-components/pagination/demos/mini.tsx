import React from 'react';
import { Pagination } from '@klein-design/klein-react';

export default () => {
  const showTotal = (totals: number, range: number[]) => {
    return (
      <p
        style={{ width: 'auto', margin: 0, whiteSpace: 'nowrap' }}
      >{`${range[0]}-${range[1]}, 共 ${totals} 条`}</p>
    );
  };

  return (
    <div>
      <Pagination size="mini" total={200} />
      <br />
      <Pagination size="mini" total={200} showQuickJumper />
      <br />
      <Pagination size="mini" total={200} showQuickJumper disabled />
      <br />
      <Pagination
        size="mini"
        total={200}
        showQuickJumper
        showTotal={showTotal}
      />
      <br />
      <Pagination size="mini" total={200} showTotal={showTotal} />
      <br />
      <Pagination size="mini" total={200} showTotal={showTotal} disabled />
    </div>
  );
};
