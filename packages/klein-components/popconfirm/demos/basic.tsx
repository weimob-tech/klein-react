import React from 'react';
import { Popconfirm, Button, ConfigProvider, Radio } from '@klein-design/klein-react';

export default () => {
  return (
    <div>
      <div className="top" style={{ marginLeft: 100 }}>
        <Popconfirm
          placement="topLeft"
          // color="red"
          onCancel={() => console.log('cancel')}
          onConfirm={() => console.log('confirm')}
          content="买家已提交了退款申请，确定要发货吗？"
        >
          <Button style={{ width: 100, marginRight: 20 }}>TL</Button>
        </Popconfirm>
        <Popconfirm
          placement="top"
          content="买家已提交了退款申请，确定要发货吗？"
        >
          <Button style={{ width: 100, marginRight: 20 }}>Top</Button>
        </Popconfirm>
        <Popconfirm
          placement="topRight"
          content="买家已提交了退款申请，确定要发货吗？"
        >
          <Button style={{ width: 100, marginRight: 20 }}>TR</Button>
        </Popconfirm>
      </div>
      <div className="left" style={{ float: 'left', width: 100 }}>
        <Popconfirm
          placement="leftTop"
          content="买家已提交了退款申请，确定要发货吗？"
        >
          <Button style={{ width: 100, marginTop: 20 }}>LT</Button>
        </Popconfirm>
        <Popconfirm
          placement="left"
          content="买家已提交了退款申请，确定要发货吗？"
        >
          <Button style={{ width: 100, marginTop: 20 }}>Left</Button>
        </Popconfirm>
        <Popconfirm
          placement="leftBottom"
          content="买家已提交了退款申请，确定要发货吗？"
        >
          <Button style={{ width: 100, margin: '20px 0 20px 0' }}>LB</Button>
        </Popconfirm>
      </div>
      <div className="right" style={{ marginLeft: 440, width: 100 }}>
        <Popconfirm
          placement="rightTop"
          content="买家已提交了退款申请，确定要发货吗？"
        >
          <Button style={{ width: 100, marginTop: 20 }}>RT</Button>
        </Popconfirm>
        <Popconfirm
          placement="right"
          content="买家已提交了退款申请，确定要发货吗？"
        >
          <Button style={{ width: 100, marginTop: 20 }}>Right</Button>
        </Popconfirm>
        <Popconfirm
          placement="rightBottom"
          content="买家已提交了退款申请，确定要发货吗？"
        >
          <Button style={{ width: 100, marginTop: 20 }}>RB</Button>
        </Popconfirm>
      </div>
      <div className="bottom" style={{ clear: 'both', marginLeft: 100 }}>
        <Popconfirm
          placement="bottomLeft"
          content="买家已提交了退款申请，确定要发货吗？"
        >
          <Button style={{ width: 100, marginRight: 20 }}>BL</Button>
        </Popconfirm>
        <Popconfirm
          placement="bottom"
          content="买家已提交了退款申请，确定要发货吗？"
        >
          <Button style={{ width: 100, marginRight: 20 }}>Bottom</Button>
        </Popconfirm>
        <Popconfirm
          placement="bottomRight"
          content="买家已提交了退款申请，确定要发货吗？"
        >
          <Button style={{ width: 100, marginRight: 20 }}>BR</Button>
        </Popconfirm>
      </div>
    </div>
  );
};
