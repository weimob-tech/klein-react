/**
 * title: 自定义关闭按钮
 * desc: 通过`closable`和`closeText`可自定义关闭按钮为文字或其他符号。
 */

/* eslint-disable no-alert */
import React from 'react';
import { Alert } from '@klein-design/klein-react';
import './closable.less';

const msgContent = (
  <div>
    带链接的关闭按钮
    <a href="#代码演示" className='closeable-link'>
      查看详情
    </a>
  </div>
);

export default () => (
  <>
    <Alert message="不可关闭的提示" type="success" />
    <Alert
      message="自定义closeText"
      type="info"
      closable
      closeText="知道了"
    />
    <Alert
      message={msgContent}
      type="warning"
      closable
    />
    <Alert
      message="设置关闭回调onClose"
      type="error"
      closable
      onClose={() => alert('关闭Alert')}
    />
  </>
);
