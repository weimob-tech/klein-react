import React, { useState } from 'react';
import { Slider, Switch } from '@klein-design/klein-react';
export default () => {
  const [disabled, setDisabled] = useState(false);
  const onChange = (checked: boolean) => {
    setDisabled(checked);
  };
  return (
    <>
      <Slider defaultValue={10} disabled={disabled} />
      <Slider
        range
        defaultValue={[10, 30]}
        disabled={disabled}
      />
      <div>
      Disabled: <Switch size="small" checked={disabled} onChange={onChange} />
      </div>
    </>
  );
};
