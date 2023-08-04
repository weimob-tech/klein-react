/**
 * title: 横向分割线
 * description: 横向分割线
 */
import React from 'react';
import { Divider } from '@klein-design/klein-react';
import DemoLayout from '@/components/demo/DemoLayout'

export default () => {
  return (
    <DemoLayout layout='1' style={{ gap: 0 }}>
      桌面端全场景组件库，服务SaaS行业生态
      <Divider dashed style={{ borderColor: '#e9ecf0' }} />
      桌面端全场景组件库，服务SaaS行业生态
      <Divider style={{ borderColor: '#e9ecf0' }} />
      桌面端全场景组件库，服务SaaS行业生态
    </DemoLayout>
  );
};
