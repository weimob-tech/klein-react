import React from 'react';
import { Divider } from '@klein-design/klein-react';

export default () => {
  const aStyle = {
    textDecoration: 'none',
    color: '#006aff',
    fontSize: 12,
  };
  return (
    <div>
      第一
      <Divider direction="col"  />
      第二
    </div>
  );
};
