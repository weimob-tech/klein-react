import React, { useState } from 'react';
import { DatePicker, Select, Input } from '@klein-design/klein-react'
import DemoLayout from '@/components/demo/DemoLayout';;

const { Option } = Select;

function SwitchablePicker() {
  const [type, setType] = useState<any>('date');
  const marginStyle = {
    marginLeft: 8,
    marginRight: 8,
    color: '#bfbfbf',
  };
  return (
    <DemoLayout layout='1'>
      <Input.Group className="date-picker-group" compact>
        <Select value={type} onChange={(value) => setType(value)}>
          <Option value="date">日期选择器</Option>
          <Option value="time">时间选择器</Option>
        </Select>
        <DatePicker picker={type} />
      </Input.Group>
    </DemoLayout>
  );
}

export default SwitchablePicker;
