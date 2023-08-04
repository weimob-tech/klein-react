import React from 'react';
import { DatePicker } from '@klein-design/klein-react'
import DemoLayout from '@/components/demo/DemoLayout';
import moment from 'moment';

export default () => {
  const onChange = (date: any, dateString: string) => {
    console.log(date, dateString);
  };

  return (
    <div style={{ display: 'flex' }}>
      <DemoLayout layout='1' >
        <DatePicker onChange={onChange} style={{marginRight: '48px'}} />
        <DatePicker
          onChange={onChange}
          picker="month"
          style={{marginRight: '48px'}}
        />
        <DatePicker onChange={onChange} picker="year"  style={{marginRight: '48px'}} />
        <DatePicker onChange={onChange} picker="time"  style={{marginRight: '48px'}} />
      </DemoLayout>
      <DemoLayout layout='1' >
      
      <DatePicker onChange={onChange} picker="week"  />
      
      
      <DatePicker
        onChange={onChange}
        picker="quarter"
        
      />
      
      
      
      <DatePicker
        onChange={onChange}
        picker="month"
        
      />
      
      
      
      <DatePicker
        onChange={onChange}
        // disabledMonths={() => [1, 3]}
        // disabledDates={() => [20, 21]}
        
        placeholder="请选择月日"
        picker="colDate"
      />
      </DemoLayout>
    </div>
  );
};
