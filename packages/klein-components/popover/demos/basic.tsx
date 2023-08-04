/**
 * title: 基础示例
 * description:
 */
import React from 'react';
import { Popover, Button, Select } from '@klein-design/klein-react';

const content = (
  <div>
    <span>Content</span>
    <br />
    <span>Content</span>
  </div>
);

export default () => {
  return (
    <div>
      <Popover
        title="popover title"
        content="this is popover content"
        style={{ marginRight: 10 }}
        placement="bottomRight"
      >
        <Button>popover</Button>
      </Popover>
      {/* <Popover content={content}>
        <Button type="primary" style={{ marginLeft: 10 }}>
          content node
        </Button>
      </Popover> */}
    </div>
  );
};
