/**
 * title: options配置使用
 * desc: Radio.Group配合使用options。
 */
import React from 'react';
import { Radio, Input } from '@klein-design/klein-react';

const plainOptions = ['苹果', '香蕉', '橙子'];
const options = [
  { label: '苹果', value: 'Apple' },
  { label: '香蕉', value: 'Pear' },
  { label: '橙子', value: 'Orange' },
];
const optionsWithDisabled = [
  { label: '苹果', value: 'Apple' },
  { label: '香蕉', value: 'Pear' },
  { label: '橙子', value: 'Orange', disabled: true },
];

export default () => {
  const [value1, setValue1] = React.useState('苹果');
  const [value2, setValue2] = React.useState('Apple');
  const [value3, setValue3] = React.useState('Apple');
  const [value4, setValue4] = React.useState('Apple');
  // handle
  const handleChange1 = (evt?: any) => {
    console.log('radio1', evt.target.value); // eslint-disable-line no-console
    setValue1(evt.target.value);
  };
  const handleChange2 = (evt?: any) => {
    console.log('radio2', evt.target.value); // eslint-disable-line no-console
    setValue2(evt.target.value);
  };
  const handleChange3 = (evt?: any) => {
    console.log('radio3', evt.target.value); // eslint-disable-line no-console
    setValue3(evt.target.value);
  };
  const handleChange4 = (evt?: any) => {
    console.log('radio4', evt.target.value); // eslint-disable-line no-console
    setValue4(evt.target.value);
  };

  return (
    <>
      <Radio.Group
        options={plainOptions}
        onChange={handleChange1}
        value={value1}
        direction="horizontal"
      />
      <Radio.Group
        options={optionsWithDisabled}
        onChange={handleChange2}
        value={value2}
      />
      <Radio.Group
        options={options}
        onChange={handleChange3}
        value={value3}
        optionType="button"
      />
      <Radio.Group
        options={optionsWithDisabled}
        onChange={handleChange4}
        value={value4}
        optionType="button"
        buttonStyle="solid"
      />
    </>
  );
};
