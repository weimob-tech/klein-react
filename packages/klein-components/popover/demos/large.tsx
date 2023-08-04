import React from 'react';
import { Popover, Button } from '@klein-design/klein-react';
import DemoLayout from '@/components/demo/DemoLayout'

export default () => {
  const content = (
    <>
      <div>1.认证后的服务号才可以</div>
      <div>2.群发会占用公众号的模板消息调用</div>
      <div>3.请合理设置消息推送频率</div>
    </>
  );

  const content2 = (
    <>
      <div>
        1.认证后的服务号才可以进行模板消息群发，认证后的服务号才可以进行模板消息群发认证后的服务号才可以进行模板消息群发
      </div>
      <div>
        2.群发会占用公众号的模板消息调用次数（日10万次），群发会占用公众号的模板消息调用次数
      </div>
      <div>3.请合理设置消息推送频率，防止骚扰用户被举报</div>
    </>
  );

  return (
    <DemoLayout layout='2'>
      <Popover title="认证要求" content={content} size="large">
        <Button>min-width</Button>
      </Popover>
      <Popover title="认证要求" content={content2} size="large">
        <Button>max-width</Button>
      </Popover>
    </DemoLayout>
  );
};
