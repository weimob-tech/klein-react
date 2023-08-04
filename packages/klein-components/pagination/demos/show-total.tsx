/**
 * title: 总数
 * desc: 通过设置 <code>showTotal</code> 展示总共有多少数据。
 */
import React from 'react';
import { Pagination } from '@klein-design/klein-react';

export default () => {
  const showTotal = (totals: number, range: number[]) => {
    return (
      <p
        style={{ margin: 0, padding: 0, whiteSpace: 'nowrap' }}
      >{`${range[0]}-${range[1]}, 共 ${totals} 条`}</p>
    );
  };

  return (
    <div>
      <Pagination total={200} showTotal={showTotal} />
      <br />
      <Pagination total={200} showTotal={showTotal} showQuickJumper />
      <br />
      <Pagination
        total={200}
        showTotal={(total: number) => `共 ${total} 条`}
        disabled
      />
      <br />
      <Pagination
        total={200}
        showTotal={(total: number) => `共 ${total} 条`}
        showQuickJumper
        disabled
      />
    </div>
  );
};
