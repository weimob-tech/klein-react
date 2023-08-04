import React from 'react';
import { Empty } from '@klein-design/klein-react';

export default () => {
  return (
    <>
      <div style={{ display: 'flex' }}>
        <Empty type="activity" description={false} size="small" />
        <Empty type="goods" description={false} size="small" />
        <Empty type="data" description={false} size="small" />
      </div>
      <div style={{ display: 'flex' }}>
        {/* <Empty type="success" description={false} /> */}
        <Empty type="fail" description={false} />
        {/* <Empty type="organization" description={false} />
        <Empty type="rule" description={false} /> */}
      </div>
    </>
  );
};
