import React from 'react';
import { Empty } from '@klein-design/klein-react';

import image from './icon/empty.png';

const imageStyle = {
  width: '200px',
  height: '162px',
};
export default () => {
  return (
    <>
      <Empty
        type="fail"
        description={
          <>
            <div style={{ fontSize: 14, color: '#23242b', fontWeight: 'bold' }}>
              恭喜您通过微盟分销中心·供货商入住审核
            </div>
            <div style={{ fontSize: 14, color: '#626973', marginTop: '8px' }}>
              欢迎您的加入，现在您可以将供货商品上架至分销中心供货市场啦！
            </div>
          </>
        }
      />
    </>
  );
};
