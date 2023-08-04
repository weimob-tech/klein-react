/**
 * title: 带有提示辅助内容
 * desc: 可设置`description`让`Alert`包含标题和辅助内容。
 */

import React from 'react';
import { Alert } from '@klein-design/klein-react';

export default () => (
  <>
    <Alert
      message="成功的提示文案"
      description="提示的辅助说明文字说明文字说明文字，提示的辅助说明文字说明文字说明文字，提示的辅助说明文字说明文字说明文字"
      type="success"
    />
    <Alert
      message="成功的提示文案"
      description="提示的辅助说明文字说明文字说明文字，提示的辅助说明文字说明文字说明文字，提示的辅助说明文字说明文字说明文字"
      type="success"
      closable
      showIcon
    />
    <Alert
      message="消息提示的文案"
      description="提示的辅助说明文字说明文字说明文字，提示的辅助说明文字说明文字说明文字，提示的辅助说明文字说明文字说明文字"
      type="info"
      closable
      showIcon
    />
    <Alert
      message="警告的提示文案"
      description="提示的辅助说明文字说明文字说明文字，提示的辅助说明文字说明文字说明文字，提示的辅助说明文字说明文字说明文字"
      showIcon
      type="warning"
    />
    <Alert
      message="错误的提示文案"
      description="提示的辅助说明文字说明文字说明文字，提示的辅助说明文字说明文字说明文字，提示的辅助说明文字说明文字说明文字"
      showIcon
      type="error"
    />
  </>
);
