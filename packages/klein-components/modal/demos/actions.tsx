/**
 * title: 通过方法调用弹窗
 * description: 提供成功，错误，警告，信息提示等四种状态的弹窗。
 */
import React from 'react';
import { Modal, Button } from '@klein-design/klein-react';
import DemoLayout from '@/components/demo/DemoLayout'

type TypeProp = 'info' | 'success' | 'warning' | 'error';

export default () => {
  const modalRef = React.useRef<any>(null);

  const handleClick = (type: TypeProp) => {
    modalRef.current = Modal[type]({
      title: 'This is a notification message',
      closable: true,
      maskClosable: true,
      content: (
        <div>
          适合内容较多的情况下使用，如果内容较少可根据实际情况，考虑使用默认宽度或最小宽度。使用前请先了解各个宽度对话框的最大的内容承载量，再选择符合规则的对话框，其它无法满足的情况可在最小和做大宽度范围内进行调整。
        </div>
      ),
    });
  };

  return (
    <DemoLayout layout='2'>
      <Button onClick={() => handleClick('info')}>info</Button>
      <Button onClick={() => handleClick('success')}>
        success
      </Button>
      <Button onClick={() => handleClick('warning')}>
        warning
      </Button>
      <Button onClick={() => handleClick('error')}>
        error
      </Button>
    </DemoLayout>
  );
};
