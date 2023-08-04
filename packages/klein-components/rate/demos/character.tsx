import React from 'react';
import { Rate, Icon } from '@klein-design/klein-react';

const { ExpressionFill } = Icon;

export default () => {
  return (
    <>
      <div style={{ marginBottom: '20px' }}>
        <Rate character="好" />
      </div>
      <div style={{ marginBottom: '20px' }}>
        <Rate character="A" />
      </div>
      <div style={{ marginBottom: '20px' }}>
        <Rate character={({ index }) => index + 1} />
      </div>
      <div>
        <Rate character={<ExpressionFill />} />
      </div>
    </>
  );
};
