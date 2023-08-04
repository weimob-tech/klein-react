/**
 * title: 范围选择
 * description: 通过设置 picker 属性，指定范围选择器类型。
 */
import React from 'react';
import { DatePicker } from '@klein-design/klein-react'
import DemoLayout from '@/components/demo/DemoLayout';;
import moment from 'moment';

const { RangePicker } = DatePicker;

export default () => {
  const marginStyle = {
    marginLeft: 8,
    marginRight: 8,
    color: '#bfbfbf',
  };
  const onChange = (values: any, formatString: any) => {
    console.log(values, formatString);
  };
  const rangeOption = {
    Today: [moment(), moment()],
    'This Month': [moment().startOf('month'), moment().endOf('month')],
  };
  return (
    <DemoLayout layout='1'>
      <RangePicker />
      
      <RangePicker
        placeholder={['开始月日', '结束月日']}
        picker="colDate"
      />
      
      <RangePicker
        placeholder={['开始时间', '结束时间']}
        format={'HH:mm'}
        picker="time"
      />
      
      <RangePicker showTime style={{ marginTop: 10 }} ranges={rangeOption} />
      
      <RangePicker
        onChange={onChange}
        picker="week"
      />
      
      <RangePicker picker="month" style={{ marginTop: 10 }} />
      
      <RangePicker picker="year" style={{ marginTop: 10 }} />
    </DemoLayout>
  );
};
