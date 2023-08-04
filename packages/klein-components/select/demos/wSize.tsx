/**
 * title: wSize使用
 * desc: 通过wSize控制select宽度。
 */
import React from 'react';
import { Select } from '@klein-design/klein-react';

const { Option, OptGroup } = Select;

export default () => {
  return (
    <>
      <div>
        <Select wSize="sm" placeholder="sm">
          <Option value="选项一">选项一</Option>
          <Option value="选项二">选项二</Option>
        </Select>
      </div>
      <div>
        <Select wSize="m" placeholder="m">
          <Option value="选项一">选项一</Option>
          <Option value="选项二">选项二</Option>
        </Select>
      </div>
      <div>
        <Select wSize="l" placeholder="l">
          <Option value="选项一">选项一</Option>
          <Option value="选项二">选项二</Option>
        </Select>
      </div>
      <div>
        <Select wSize="xl" placeholder="xl">
          <Option value="选项一">选项一</Option>
          <Option value="选项二">选项二</Option>
        </Select>
      </div>
      <div>
        <Select wSize="xs" placeholder="xs">
          <Option value="选项一">选项一</Option>
          <Option value="选项二">选项二</Option>
        </Select>
      </div>
    </>
  );
};
