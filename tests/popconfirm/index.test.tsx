import React from 'react';
import { render, screen } from '@testing-library/react';
import { Popconfirm, Button } from 'klein';
import userEvent from '@testing-library/user-event';
import type { PopconfirmProps } from '../../src/popconfirm/popconfirm';

describe('Popconfirm', () => {
  test('default popconfirm renders correctly', () => {
    const { getByText } = render(
      <Popconfirm title="title" content="content">
        <Button>popconfirm</Button>
      </Popconfirm>,
    );

    expect(screen.getByText('popconfirm')).toBeInTheDocument();
    expect(screen.queryByText('确定')).toBeNull();
    expect(screen.queryByText('取消')).toBeNull();
    expect(screen.queryByText('title')).toBeNull();
    expect(screen.queryByText('content')).toBeNull();

    userEvent.click(getByText('popconfirm'));
    expect(screen.queryByText('确定')).toBeInTheDocument();
    expect(screen.queryByText('取消')).toBeInTheDocument();
    expect(screen.queryByText('title')).toBeInTheDocument();
    expect(screen.queryByText('content')).toBeInTheDocument();
  });
  test('popconfirm basic use', async () => {
    const cancelFn = jest.fn();
    const confirmFn = jest.fn();
    const { getByText } = render(
      <Popconfirm
        title="Popconfirm title"
        onCancel={cancelFn}
        onConfirm={confirmFn}
      >
        <Button>popconfirm</Button>
      </Popconfirm>,
    );
    userEvent.click(getByText('popconfirm'));
    expect(screen.getByText('Popconfirm title')).toBeInTheDocument();
    userEvent.click(getByText('取消'));
    expect(cancelFn).toBeCalled();
    expect(document.querySelector('.klein-tooltip-hidden')).toBeInTheDocument();

    userEvent.click(getByText('popconfirm'));
    expect(screen.getByText('Popconfirm title')).toBeInTheDocument();
    userEvent.click(getByText('确定'));
    expect(confirmFn).toBeCalled();
    expect(document.querySelector('.klein-tooltip-hidden')).toBeInTheDocument();
    // screen.debug(getByText(''))
  });
  test('popconfirm async events', async () => {
    const onCancel = jest.fn();
    const onConfirm = jest.fn();
    const onPopconfirmClick = jest.fn();
    const baseProps = {
      visible: false,
      onCancel,
      onConfirm,
    };
    const { getByText, container } = render(
      <Popconfirm {...baseProps}>
        <Button onClick={onPopconfirmClick}>popconfirm</Button>
      </Popconfirm>,
    );
    const updateProps = (props: PopconfirmProps) =>
      render(<Popconfirm {...props} />, { container });

    userEvent.click(getByText('popconfirm'));
    expect(onPopconfirmClick).toBeCalled();
    updateProps({ ...baseProps, visible: true });
    expect(document.querySelector('.klein-tooltip-hidden')).toBeNull();
    userEvent.click(getByText('取消'));
    expect(onCancel).toBeCalled();
    expect(document.querySelector('.klein-tooltip-hidden')).toBeNull();
    updateProps({ ...baseProps, visible: false });
    expect(document.querySelector('.klein-tooltip-hidden')).toBeInTheDocument();
  });
});
