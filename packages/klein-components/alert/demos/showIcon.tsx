/**
 * title: 显示图标
 * desc: 通过设置`showIcon`属性来显示`Alert`的`icon`，这能更有效地向用户展示你的显示意图。
 */

import React from 'react';
import { Alert, Icon } from '@klein-design/klein-react';

const { ContainerLine } = Icon;

export default () => (
  <>
    <Alert
      message="成功的提示文案成功的提示文案成功的提示文案成功的提示文案成功的提示文案成功的提示文案成功的提示文案"
      type="success"
      showIcon
      closable
    />
    <Alert
      message="消息提示的文案"
      type="info"
      showIcon
      closable
    />
    <Alert
      message="警告的提示文案"
      type="warning"
      showIcon
      closable
    />
    <Alert
      message="错误的提示文案"
      type="error"
      showIcon
      closable
    />
    <Alert
      message="自定义图标"
      showIcon
      icon={<ContainerLine />}
      closable
    />
  </>
);
