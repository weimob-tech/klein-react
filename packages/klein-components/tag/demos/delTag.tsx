/**
 * title: 删除标签
 * desc: 配置closable 属性；配合事件进行标签删除
 */
import React from 'react';
import { Tag } from '@klein-design/klein-react';
import DemoLayout from '@/components/demo/DemoLayout'

export default () => {
  const [iconVisible, setVisible] = React.useState(true);
  return (
    <DemoLayout layout='2'>
      <Tag closable size="large">
        默认删除
      </Tag>
      <Tag visible={iconVisible} closable onClose={() => setVisible(false)}>
        默认删除
      </Tag>
      <Tag
        size="small"
        closable
        onClose={(e: React.MouseEvent<HTMLElement>) => console.log(e, '444')}
      >
        默认删除
      </Tag>
    </DemoLayout>
  );
};
