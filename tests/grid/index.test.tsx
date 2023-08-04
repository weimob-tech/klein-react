import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Grid } from 'klein';

const { Col, Row } = Grid;

describe('Gird', () => {
  test('should render col', () => {
    const { asFragment } = render(<Col />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('should render row', () => {
    const { asFragment } = render(<Row />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('should render wrapped row correctly', () => {
    const { asFragment } = render(
      <Row>
        <div>
          <Col />
        </div>
      </Row>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('when typeof gutter is number', () => {
    render(<Row gutter={8} />);
    expect(document.querySelector('.klein-row')).toHaveStyle(
      'margin-left: -4px; margin-right: -4px;',
    );
    const { getByText } = render(
      <Row gutter={8}>
        <Col>col-8</Col>
      </Row>,
    );
    expect(getByText('col-8')).toHaveStyle(
      'padding-left: 4px; padding-right: 4px;',
    );
  });

  test('when typeof gutter is object', () => {
    render(<Row gutter={{ xs: 8, sm: 16 }}>gutter</Row>);
    expect(document.querySelector('.klein-row')).toHaveStyle(
      'margin-left: -4px; margin-right: -4px;',
    );
    const { getByText } = render(
      <Row gutter={8}>
        <Col>col-8</Col>
      </Row>,
    );
    expect(getByText('col-8')).toHaveStyle(
      'padding-left: 4px; padding-right: 4px;',
    );
  });

  it('when typeof gutter is object array', () => {
    render(
      <Row
        gutter={[
          { xs: 8, sm: 16, md: 24, lg: 32, xl: 40 },
          { xs: 8, sm: 16, md: 24, lg: 32, xl: 40 },
        ]}
      />,
    );
    expect(document.querySelector('.klein-row')).toHaveStyle(
      'margin-left: -4px; margin-right: -4px;',
    );
  });

  it('when typeof gutter is array', () => {
    render(<Row gutter={[8, 16]} />);
    expect(document.querySelector('.klein-row')).toHaveStyle(
      'margin-left: -4px; margin-right: -4px;',
    );
  });
});
