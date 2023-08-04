import React from 'react';
import { Grid } from '@klein-design/klein-react';
import './basic.less';

const { Row, Col } = Grid;

export default () => {
  return (
    <div className="grid-wrapper">
      <Row>
        <Col style={{ background: '#4fa7ff' }} span={6}>
          col-6
        </Col>
        <Col style={{ background: '#78c0ff' }} span={6}>
          col-6
        </Col>
        <Col style={{ background: '#4fa7ff' }} span={6}>
          col-6
        </Col>
        <Col style={{ background: '#78c0ff' }} span={6}>
          col-6
        </Col>
      </Row>
      <Row>
        <Col style={{ background: '#4fa7ff' }} span={8}>
          col-8
        </Col>
        <Col style={{ background: '#78c0ff' }} span={8}>
          col-8
        </Col>
        <Col style={{ background: '#4fa7ff' }} span={8}>
          col-8
        </Col>
      </Row>
      <Row>
        <Col style={{ background: '#4fa7ff' }} span={12}>
          col-12
        </Col>
        <Col style={{ background: '#78c0ff' }} span={12}>
          col-12
        </Col>
      </Row>
      <Row>
        <Col style={{ background: '#4fa7ff' }} span={24}>
          col-24
        </Col>
      </Row>
    </div>
  );
};
