import React, { useState } from 'react';
import { Rate } from '@klein-design/klein-react';

const desc = ['一星差评', '二星差评', '三星中评', '四星中评', '五星好评'];

export default () => {
  const [value1, setValue1] = useState(3);

  const [value2, setValue2] = useState(3);
  const [hoverValue2, setHoverValue2] = useState(3);

  return (
    <div>
      <div style={{ marginBottom: '20px' }}>
        <Rate value={value1} onChange={(value) => setValue1(value)} />
        {<span style={{ marginLeft: 12 }}>{desc[value1 - 1]}</span>}
      </div>
      <div>
        <Rate
          value={value2}
          onChange={(value) => setValue2(value)}
          onShowChange={(value) => setHoverValue2(value)}
        />
        {<span style={{ marginLeft: 12 }}>{desc[hoverValue2 - 1]}</span>}
      </div>
    </div>
  );
};
