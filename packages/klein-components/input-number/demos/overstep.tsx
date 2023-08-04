import React from 'react';
import { InputNumber, Button } from '@klein-design/klein-react';

export default () => {
  const [value, setValue] = React.useState<number | string>(99);
  return (
    <>
      <InputNumber
        min={1}
        max={10}
        value={value}
        onChange={(val) => {
          setValue(val);
        }}
        style={{ width: 232 }}
      />
      <Button
        type="primary"
        style={{ width: 80 }}
        onClick={() => {
          setValue(99);
        }}
      >
        Reset
      </Button>
    </>
  );
};
