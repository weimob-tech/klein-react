/**
 * title: Input.Group
 * desc: 通过导入`Group`组件来使用。
 */

import React from 'react';
import {
  Input,
  Grid,
  Select,
  DatePicker,
  InputNumber,
  Cascader,
} from '@klein-design/klein-react';

const { Option } = Select;
const { Group } = Input;
const { Row, Col } = Grid;
const { RangePicker } = DatePicker;
const options = [
  {
    value: '浙江',
    label: '浙江',
    children: [
      {
        value: '杭州',
        label: '杭州',
        children: [
          {
            value: '西湖',
            label: '西湖',
          },
        ],
      },
    ],
  },
  {
    value: '江苏',
    label: '江苏',
    children: [
      {
        value: '南京',
        label: '南京',
        children: [
          {
            value: '中华门',
            label: '中华门',
          },
        ],
      },
    ],
  },
];
export default () => {
  // render
  const Style = { width: 350 };

  // state
  const [inputValue, setInputValue] = React.useState('Hello World!');

  // handle
  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(evt.target.value);
  };
  return (
    <>
      <Group style={Style}>
        <Row gutter={8}>
          <Col span={8}>
            <Input placeholder="请输入" />
          </Col>
          <Col span={8}>
            <Input
              style={{ width: 100 }}
              placeholder="请输入内容"
              value={inputValue}
              onChange={handleChange}
              title={inputValue}
            />
          </Col>
        </Row>
      </Group>
      <Group style={Style}>
        <Row gutter={8}>
          <Col>
            <Select defaultValue="1">
              <Option value="1">选项1</Option>
            </Select>
          </Col>
          <Col>
            <Select defaultValue="1">
              <Option value="1">选项2</Option>
            </Select>
          </Col>
        </Row>
      </Group>
      <Input.Group compact>
        <Input style={{ width: 100 }} placeholder="请输入" />
        <Input style={{ width: 100 }} placeholder="请输入" />
      </Input.Group>
      <Input.Group compact>
        <Select defaultValue="1">
          <Option value="1">选项1</Option>
        </Select>
        <Select defaultValue="1">
          <Option value="1">选项2</Option>
        </Select>
      </Input.Group>
      <Input.Group compact>
        <Select defaultValue="1" style={{ width: '106px' }}>
          <Option value="1">全部渠道道</Option>
        </Select>
        <Input.Search style={{ width: '20%' }} placeholder="请输入商品名称" />
      </Input.Group>
      <Input.Group compact>
        <Select defaultValue="1">
          <Option value="1">全部渠道</Option>
        </Select>
        <Input style={{ width: '20%' }} placeholder="请输入" />
      </Input.Group>
      <Input.Group compact>
        <Select defaultValue="1">
          <Option value="1">下单时间</Option>
          <Option value="2">退款时间</Option>
        </Select>
        <DatePicker style={{ width: 300 }} />
      </Input.Group>
      <Input.Group compact>
        <Select defaultValue="1">
          <Option value="1">下单时间</Option>
          <Option value="2">退款时间</Option>
        </Select>
        <RangePicker style={{ width: 300 }} />
      </Input.Group>
      <Input.Group compact>
        <Select defaultValue="1">
          <Option value="1">下单时间</Option>
          <Option value="2">退款时间</Option>
        </Select>
        <Cascader options={options} style={{ width: 300 }} />
      </Input.Group>
      <Input.Group compact style={{ width: 300 }}>
        <Select defaultValue="1">
          <Option value="1">下单时间</Option>
          <Option value="2">退款时间</Option>
        </Select>
        <InputNumber style={{ width: '50%' }} />
      </Input.Group>
      <Input.Group compact style={{ width: 300 }}>
        <Cascader options={options} style={{ width: '50%' }} />
        <InputNumber style={{ width: '50%' }} />
      </Input.Group>
    </>
  );
};
