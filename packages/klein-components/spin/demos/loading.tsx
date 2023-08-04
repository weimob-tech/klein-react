/**
 * title: 加载中
 * desc: 加载状态改变。
 */
import React, { useState } from 'react';
import { Spin, Button, Input } from '@klein-design/klein-react';

export default () => {
  const [status, setStatus] = useState(false);
  return (
    <>
      <Button
        onClick={() => {
          setStatus(!status);
        }}
      >
        change state
      </Button>
      <br />
      <br />
      <Spin spinning={status} delay={2000}>
        <Input placeholder="请输入" style={{ width: 320 }} onBlur={()=>{
          setStatus(true);
        }}/>
        <p style={{ marginTop: '20px' }}>
          看似十分简单的标题截断效果，但是竟然没有一个统一 CSS
          属性实现标准，需要用到一些奇淫妙计来实现，一般来说，在做这样文字截断效果时我们更多是希望：
          兼容性好，对各大主流浏览器有好的支持 响应式截断，根据不同宽度做出调整
          文本超出范围才显示省略号，否则不显示省略号 省略号位置显示刚好
        </p>
      </Spin>
    </>
  );
};
