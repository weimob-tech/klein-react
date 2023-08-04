import React from 'react';
import { DatePicker } from '@klein-design/klein-react'
import DemoLayout from '@/components/demo/DemoLayout';;
import moment from 'moment';

const { RangePicker } = DatePicker;

export default () => {
  const onChange = (date: any, dateString: any) => {
    console.log(date, dateString);
  };

  return (
    <DemoLayout layout='2'>
      <RangePicker
        ranges={{
          Today: [moment(), moment()],
          'This Month': [moment().startOf('month'), moment().endOf('month')],
        }}
        style={{marginRight: '48px'}}
        onChange={onChange}
      />
      <RangePicker
        ranges={{
          Today: [moment(), moment()],
          'This Month': [moment().startOf('month'), moment().endOf('month')],
          'This Month1': [moment().startOf('month'), moment().endOf('month')],
          'This Month2': [moment().startOf('month'), moment().endOf('month')],
          'This Month3': [moment().startOf('month'), moment().endOf('month')],
          'This Month4': [moment().startOf('month'), moment().endOf('month')],
        }}
        showTime
        format="YYYY/MM/DD HH:mm:ss"
        onChange={onChange}
      />
    </DemoLayout>
  );
};
