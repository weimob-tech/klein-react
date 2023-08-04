/*
 * title: 动态加载选项
 * desc: 使用 loadData 实现动态加载选项。
 */

import React from 'react';
import { Cascader } from '@klein-design/klein-react'
import DemoLayout from '@/components/demo/DemoLayout';
// import Cascader from '../index';

const optionLists = [
  {
    value: '浙江',
    label: '浙江',
    isLeaf: false,
  },
  {
    value: '江苏',
    label: '江苏',
    isLeaf: false,
  },
];

const LazyOptions = () => {
  const [options, setOptions] = React.useState(optionLists);

  const onChange = (value, selectedOptions) => {
    console.log(value, selectedOptions);
  };

  const loadData = (selectedOptions) => {
    const targetOption = selectedOptions[selectedOptions.length - 1];

    targetOption.loading = true;

    // load options lazily
    setTimeout(() => {
      targetOption.loading = false;
      targetOption.children = [
        {
          label: `${targetOption.label} Dynamic 1`,
          value: 'dynamic1',
        },
        {
          label: `${targetOption.label} Dynamic 2`,
          value: 'dynamic2',
        },
      ];
      setOptions([...options]);
    }, 1000);
  };

  return (
    <DemoLayout layout='1'>
    <Cascader
      style={{ width: 232 }}
      options={options}
      loadData={loadData}
      onChange={onChange}
      changeOnSelect
    />
    </DemoLayout>
  );
};

export default LazyOptions;
