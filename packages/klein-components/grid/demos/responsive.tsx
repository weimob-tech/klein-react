import React from 'react';
import { Grid } from '@klein-design/klein-react';

const { Row, Col } = Grid;

export default () => {
  const style = { background: '#0092ff', padding: '8px 0' };

  return (
    <div className="grid-wrapper">
      <div
        style={{
          marginBottom: 12,
        }}
      >
        Horizontal
      </div>
      <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32, xl: 40 }]}>
        <Col span={6}>
          <div style={style}>col-6</div>
        </Col>
        <Col span={6}>
          <div style={style}>col-6</div>
        </Col>
        <Col span={6}>
          <div style={style}>col-6</div>
        </Col>
        <Col span={6}>
          <div style={style}>col-6</div>
        </Col>
      </Row>
      <div
        style={{
          marginBottom: 12,
        }}
      >
        Vertical
      </div>
      <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32, xl: 40 }, { xs: 8, sm: 16, md: 24, lg: 32, xl: 40 }]}>
        <Col span={6}>
          <div style={style}>col-6</div>
        </Col>
        <Col span={6}>
          <div style={style}>col-6</div>
        </Col>
        <Col span={6}>
          <div style={style}>col-6</div>
        </Col>
        <Col span={6}>
          <div style={style}>col-6</div>
        </Col>
        <Col span={6}>
          <div style={style}>col-6</div>
        </Col>
        <Col span={6}>
          <div style={style}>col-6</div>
        </Col>
        <Col span={6}>
          <div style={style}>col-6</div>
        </Col>
        <Col span={6}>
          <div style={style}>col-6</div>
        </Col>
      </Row>
    </div>
  );
};
