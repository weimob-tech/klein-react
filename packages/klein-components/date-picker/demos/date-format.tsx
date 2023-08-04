import React from 'react';
import moment from 'moment';
import { DatePicker } from '@klein-design/klein-react'
import DemoLayout from '@/components/demo/DemoLayout';;

const { RangePicker } = DatePicker;

const dateFormat = 'YYYY/MM/DD';
const monthFormat = 'YYYY/MM';

const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];

const customFormat = (value: any) =>
  `custom format: ${value.format(dateFormat)}`;

const Demo = () => {
  return (
    <DemoLayout layout='1'>
      <DatePicker
        defaultValue={moment('2015/01/01', dateFormat)}
        format={dateFormat}
      />
      
      <DatePicker
        defaultValue={moment('01/01/2015', dateFormatList[0])}
        format={dateFormatList}
      />
      
      <DatePicker
        defaultValue={moment('2015/01', monthFormat)}
        format={monthFormat}
        picker="month"
      />
      
      <RangePicker
        defaultValue={[
          moment('2015/01/01', dateFormat),
          moment('2015/01/01', dateFormat),
        ]}
        format={dateFormat}
      />
      
      <DatePicker
        defaultValue={moment('2015/01/01', dateFormat)}
        format={customFormat}
      />
    </DemoLayout>
  );
};

export default Demo;
