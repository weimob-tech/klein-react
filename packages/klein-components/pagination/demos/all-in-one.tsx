import React, { useState } from 'react';
import { Pagination, Switch } from '@klein-design/klein-react';

export default () => {
  const [current, handleCurrentChange] = useState(6);
  const [isMini, handleSizeChange] = useState(false);
  const [disabled, handleDisabledChange] = useState(false);
  const [showQuickJumper, handleShowQuickJumperChange] = useState(false);
  const [simple, handleSimpleChange] = useState(false);
  const [isCustomerItemRender, handleIsCustomerItemRender] = useState(false);
  const [pageSize, handlePageSize] = useState(10);
  const [total, handleTotal] = useState(200);
  const pageData = {
    size: isMini ? 'mini' : '', // ('' || default) or (small || mini)
    simple,
    total,
    defaultPageSize: 10,
    pageSize,
    showQuickJumper,
    disabled,
    current,
    // showSizeChanger: false,
  };

  const onChange = (page: number, pagesize: number) => {
    console.log(page, pagesize); // eslint-disable-line no-console
    handleCurrentChange(page);
  };

  // const onShowSizeChange = (page: number, size: number) => {
  //   console.log(page, size); // eslint-disable-line no-console
  // };

  const showTotal = (totals: number, range: number[]) => {
    return (
      <p
        style={{ width: 'auto', margin: 0, whiteSpace: 'nowrap' }}
      >{`${range[0]}-${range[1]}, 共 ${totals} 条`}</p>
    );
  };

  const sty = {
    fontSize: '12px',
  };
  const itemRender = (
    currentPage: number,
    type: string,
    originalElement: React.ReactNode,
  ) => {
    if (isCustomerItemRender) {
      if (type === 'prev') {
        return <a style={sty}>Prev</a>;
      }
      if (type === 'next') {
        return <a style={sty}>Next</a>;
      }
      if (type === 'jump-prev') {
        return <a style={sty}>JPrev</a>;
      }
      if (type === 'jump-next') {
        return <a style={sty}>JNext</a>;
      }
      return originalElement;
    }
    return originalElement;
  };

  const switchRender = (
    target: any,
    targetVal: any,
    targetHandler: Function,
  ) => {
    return (
      <div style={{ color: '#666', display: 'flex', margin: '10px 0' }}>
        <div style={{ color: '#666', minWidth: 180, lineHeight: '24px' }}>
          {target}
          {targetVal ? ' ✅' : ''}
        </div>
        <Switch
          defaultChecked={targetVal}
          onChange={(val: string) => {
            targetHandler(val);
          }}
        />
      </div>
    );
  };

  const inputRender = (
    target: any,
    targetVal: any,
    targetHandler: Function,
  ) => {
    return (
      <div style={{ color: '#666', display: 'flex', margin: '10px 0' }}>
        <div style={{ color: '#666', minWidth: 180, lineHeight: '24px' }}>
          {target}
        </div>
        <input
          type="number"
          value={targetVal}
          step="10"
          onChange={(e: any) => {
            console.log('e.target.value:', e.target.value); // eslint-disable-line no-console
            targetHandler(e.target.value);
          }}
        />
      </div>
    );
  };

  return (
    <div>
      <div>
        {inputRender('数据总量', total, handleTotal)}
        {inputRender('每页大小', pageSize, handlePageSize)}
        <hr />
        {switchRender('迷你', isMini, handleSizeChange)}
        {switchRender('禁用', disabled, handleDisabledChange)}
        {switchRender('简单分页', simple, handleSimpleChange)}
        {switchRender('快速跳转', showQuickJumper, handleShowQuickJumperChange)}
        {switchRender(
          '自定义itemRender',
          isCustomerItemRender,
          handleIsCustomerItemRender,
        )}
      </div>
      <br />
      <br />
      <Pagination
        {...(pageData as any)}
        itemRender={itemRender}
        onChange={onChange}
        showTotal={showTotal}
        // onShowSizeChange={onShowSizeChange}
        className="extend-pagination-cls"
      />
    </div>
  );
};
