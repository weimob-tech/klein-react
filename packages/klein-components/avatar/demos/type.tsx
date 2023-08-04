/**
 * title: 头像展示类型
 * desc: 通过设置`src`和`children`可改变展示类型。
 */

import React from 'react';
import { Avatar, Icon } from '@klein-design/klein-react';
import DemoLayout from '@/components/demo/DemoLayout'

const { UserLine } = Icon 

export default () => {

  return (
    <DemoLayout layout='2'>
      <Avatar
        alt="头像"
        size="large"
        src="https://cdn2.weimob.com/saas/@assets/saas-fe-group-web-stc/img/index/icon_saas_wz.png?2018041"
      />

      <Avatar alt="头像" size="large">
        User
      </Avatar>
    </DemoLayout>
  );
};
