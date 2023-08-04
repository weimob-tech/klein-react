/**
 * title: 受控的页码
 * desc: 当提供current参数时，需通过 <code>onChange</code> 事件更新<code>current</code>达到切换分页功能。
 */
import React, { useState } from 'react';
import { Pagination } from '@klein-design/klein-react';

export default () => {
  const [current, handleCurrentChange] = useState(6);
  const onChange = (page: number) => {
    console.log('page', page);
    handleCurrentChange(page);
  };
  return <Pagination current={current} total={200} onChange={onChange} />;
};
