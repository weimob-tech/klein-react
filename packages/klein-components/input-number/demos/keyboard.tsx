import React from 'react';
import { InputNumber, Checkbox } from '@klein-design/klein-react';

export default () => {
  const [keyboard, setKeyboard] = React.useState(true);
  return (
    <>
      <InputNumber
        min={1}
        max={10}
        keyboard={keyboard}
        defaultValue={5}
        style={{ width: 232 }}
      />
      <Checkbox
        onChange={() => {
          setKeyboard(!keyboard);
        }}
        checked={keyboard}
      >
        Toggle keyboard
      </Checkbox>
    </>
  );
};
