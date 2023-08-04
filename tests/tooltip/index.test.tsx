import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Tooltip } from 'klein';
import type { TooltipProps } from '../../src/tooltip/tooltip';

describe('Tooltip', () => {
  test('title should be rendered correctly', () => {
    const { getByText } = render(
      <Tooltip title="tooltip info" defaultVisible>
        <span>test</span>
      </Tooltip>,
    );
    const text = getByText('tooltip info');
    expect(text).toBeInTheDocument();
  });

  test('onVisibleChange should be called correctly', async () => {
    const mockOnVisibleChange = jest.fn();
    const ref = React.createRef<any>();
    const baseProps = {
      title: 'tooltip info',
      onVisibleChange: mockOnVisibleChange,
      mouseEnterDelay: 0,
      mouseLeaveDelay: 0,
      ref,
    };
    const { getByRole, container } = render(
      <Tooltip {...baseProps}>
        <button type="button">鼠标移入显示提示信息</button>
      </Tooltip>,
    );

    const updateProps = (props: TooltipProps) =>
      render(<Tooltip {...props} />, { container });

    const target = getByRole('button');
    fireEvent.mouseEnter(target);
    expect(mockOnVisibleChange).toBeCalledWith(true);
    expect(ref.current.props.visible).toBe(true);
    fireEvent.mouseLeave(target);
    expect(mockOnVisibleChange).toBeCalledWith(false);
    expect(ref.current.props.visible).toBe(false);

    // visible: false
    updateProps({
      visible: false,
      ...baseProps,
    });
    fireEvent.mouseEnter(target);
    expect(mockOnVisibleChange).toBeCalledWith(true);
    expect(ref.current.props.visible).toBe(false);

    // visible: true
    updateProps({
      visible: true,
      ...baseProps,
    });
    fireEvent.mouseLeave(target);
    expect(mockOnVisibleChange).toBeCalledWith(false);
    expect(ref.current.props.visible).toBe(true);
  });

  // test('its placement is correctly', async() => {

  // })

  test('its background color can be changed', async () => {
    const bgColor = '#2589ff';
    const { getByRole } = render(
      <Tooltip title="tooltip info" color={bgColor} mouseEnterDelay={0}>
        <button type="button">test</button>
      </Tooltip>,
    );
    fireEvent.mouseEnter(getByRole('button'));
    expect(document.querySelector('.klein-tooltip-inner')).toHaveStyle({
      background: bgColor,
    });
  });

  test('it should be mounted in the container', async () => {
    const { container } = render(
      <div className="container" data-testid="custom-container" />,
    );

    // Tooltip props
    const { getByRole } = render(
      <Tooltip
        title="tooltip info"
        mouseEnterDelay={0}
        getPopupContainer={() => container}
      >
        <button type="button">test</button>
      </Tooltip>,
    );
    fireEvent.mouseEnter(getByRole('button'));
    expect(container).toContainElement(
      document.querySelector('.klein-tooltip'),
    );
  });
});
