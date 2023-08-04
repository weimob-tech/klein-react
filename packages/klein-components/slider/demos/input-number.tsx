import React, { useState } from 'react';
import { Slider, InputNumber } from '@klein-design/klein-react';
export default () => {
  const IntegerStep = () => {
    const [inputValue, setInputValue] = useState(1);

    const onChange = (newValue: number) => {
      setInputValue(newValue);
    };

    return (
      <>
        <Slider
          min={1}
          max={20}
          onChange={onChange}
          value={typeof inputValue === 'number' ? inputValue : 0}
        />
        <InputNumber
          min={1}
          max={20}
          style={{ margin: '0 16px' }}
          value={inputValue}
          onChange={onChange}
        />
      </>
    );
  };

  const DecimalStep = () => {
    const [inputValue, setInputValue] = useState(0);
    const onChange = (value: number) => {
      if (isNaN(value)) {
        return;
      }
      setInputValue(value);
    };
    return (
      <div style={{ display: 'flex',marginTop: 10 }}>
        <div style={{ width: '300px' }}>
          <Slider
            min={0}
            max={1}
            onChange={onChange}
            value={typeof inputValue === 'number' ? inputValue : 0}
            step={0.01}
          />
        </div>
        <div>
          <InputNumber
            min={0}
            max={1}
            style={{ margin: '0 16px' }}
            step={0.01}
            value={inputValue}
            onChange={onChange}
          />
        </div>
      </div>
    );
  };

  return (
    <>
      <IntegerStep />
      <DecimalStep />
    </>
  );
};
