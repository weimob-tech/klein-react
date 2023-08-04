/**
 * title: 上一步和下一步
 * desc: 通过设置 <code>itemRender</code> 修改上一步，下一步，前后5页为自定义内容。
 */
import React from 'react';
import { Pagination } from '@klein-design/klein-react';

export default () => {
  const sty = {
    fontSize: '12px',
  };

  const itemRender = (
    currentPage: number,
    type: string,
    originalElement: React.ReactNode,
  ) => {
    if (type === 'prev') {
      return <span style={sty}>上一步</span>;
    }
    if (type === 'next') {
      return <a style={sty}>下一步</a>;
    }
    if (type === 'jump-prev') {
      return <a style={sty}>自定义上一步</a>;
    }
    if (type === 'jump-next') {
      return <a style={sty}>自定义下一步</a>;
    }
    return originalElement;
  };

  return (
    <div id="demo-3">
      <Pagination total={200} itemRender={itemRender} />
      <br />
      <Pagination total={200} itemRender={itemRender} disabled />
      <br />
      <Pagination total={200} itemRender={itemRender} simple size="mini" />
    </div>
  );
};
