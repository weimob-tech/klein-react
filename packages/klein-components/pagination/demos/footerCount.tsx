/**
 * title: 不展示总页数
 * desc: 当数据量较大页数较多时，部分业务可以采用。
 */
import React, { useState } from 'react';
import { Pagination } from '@klein-design/klein-react';

export default () => {
  const [current, handleCurrentChange] = useState(6);
  const onChange = (page: number) => {
    console.log('page', page);
    handleCurrentChange(page);
  };
  return (
    <Pagination
      current={current}
      total={200}
      onChange={onChange}
      footerCount={9}
    />
  );
};
