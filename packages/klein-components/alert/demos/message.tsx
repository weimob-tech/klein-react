/**
 * title: 自定义消息格式
 * desc: 支持给`message`属性支持传入`ReactNode`。
 */

import React from 'react';
import { Alert } from '@klein-design/klein-react';
import './message.less';

export default () => (
  <Alert
    showIcon
    closable
    className="messageAlert"
    message={
      <>
        您今日还能群发<b className='messageAlert-num'>4</b>
        次消息给所有粉丝，若分目标人群发送消息，则还能群发
        <b className='messageAlert-num'>10</b>次 注意，每个粉丝每月只能收到
        <b className='messageAlert-num'>4</b>次消息。
      </>
    }
    type="warning"
  />
);
