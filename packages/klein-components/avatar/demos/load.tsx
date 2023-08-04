/**
 * title: 加载完成和失败回调
 * desc: 当设置`src`属性时，可以通过`onLoad`和`onError`捕获到图片加载成功和失败的回调。
 */

import React from 'react';
import { Avatar } from '@klein-design/klein-react';
import DemoLayout from '@/components/demo/DemoLayout'

export default () => {
  const [state, setState] = React.useState(['加载中', '加载中']);

  const handleError = (id: number) => setState({ ...state, [id]: '加载失败' });
  const handleLoad = (id: number) => setState({ ...state, [id]: '加载完成' });

  return (
    <DemoLayout layout='2'>
      <div>
        <Avatar
          size={60}
          onError={() => handleError(0)}
          onLoad={() => handleLoad(0)}
          src="https://cdn2.weimob.com/saas/@assets/saas-fe-group-web-stc/img/index/icon_saas_wz.png?2018041"
        />
        <div
          style={{
            color: 'green',
            marginTop: 10
          }}
        >
          {state[0]}
        </div>
      </div>
      <div>
        <Avatar
          size={60}
          onError={() => handleError(1)}
          onLoad={() => handleLoad(1)}
          src="https://empty.png"
        />
        <div
          style={{
            color: '#666',
            marginTop: 10,
            textAlign: 'center'
          }}
        >
          {state[1]}
        </div>
      </div>
    </DemoLayout>
  );
};
