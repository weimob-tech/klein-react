import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Alert, Button } from 'klein';

describe('Alert', () => {
  test('display type', () => {
    const { getByText, getByRole, rerender } = render(
      <Alert message="hello world" />,
    );

    const text = getByText('hello world');
    expect(text).toBeInTheDocument();

    const alert = getByRole('alert');
    expect(alert).toHaveClass('klein-alert', 'klein-alert-info');

    rerender(<Alert type="success" />);
    expect(alert).toHaveClass('klein-alert', 'klein-alert-success');

    rerender(<Alert type="warning" />);
    expect(alert).toHaveClass('klein-alert', 'klein-alert-warning');

    rerender(<Alert type="error" />);
    expect(alert).toHaveClass('klein-alert', 'klein-alert-error');

    rerender(<Alert type="info" />);
    expect(alert).toHaveClass('klein-alert', 'klein-alert-info');
  });

  test('with description', () => {
    const { getByText } = render(
      <Alert message="message" description="desc" />,
    );

    const msg = getByText('message');
    const desc = getByText('desc');

    expect(msg).toBeInTheDocument();
    expect(desc).toBeInTheDocument();
  });

  test('show icon', () => {
    const { container, rerender } = render(
      <Alert message="message" showIcon />,
    );

    // default icon
    const icon = container.querySelector('.klein-alert-icon') as HTMLElement;
    expect(icon).toBeInTheDocument();

    // with desc
    rerender(<Alert message="message" description="desc" showIcon />);
    const descIcon = container.querySelector(
      '.klein-alert-icon-desc-svg',
    ) as HTMLElement;
    expect(descIcon).toBeInTheDocument();

    // custom icon
    rerender(
      <Alert
        message="message"
        showIcon
        icon={<i className="custom-icon" />}
       />,
    );
    const customIcon = container.querySelector('.custom-icon') as HTMLElement;
    expect(customIcon).toBeInTheDocument();

    // showIcon = false
    rerender(
      <Alert
        message="message"
        showIcon={false}
        icon={<i className="custom-icon" />}
       />,
    );
    expect(customIcon).not.toBeInTheDocument();
  });

  test('show action', () => {
    const { container, rerender } = render(
      <Alert
        message="message"
        action={
          <Button className="action-btn" size="small">
            重新认证
          </Button>
        }
       />,
    );

    const icon = container.querySelector('.klein-alert-action') as HTMLElement;
    const btn = container.querySelector('.action-btn') as HTMLElement;

    expect(icon).toBeInTheDocument();
    expect(btn).toBeInTheDocument();

    // action = false
    rerender(<Alert message="message" action={false} />);

    expect(icon).not.toBeInTheDocument();
    expect(btn).not.toBeInTheDocument();
  });

  test('closable', () => {
    const onClose = jest.fn();
    const { getByRole, getByText, container, rerender } = render(
      <Alert message="hello world" closable onClose={onClose} />,
    );

    const alert = getByRole('alert');
    const alertCloseText = getByText('关闭');
    const alertCloseBtn = container.querySelector(
      '.klein-alert-close',
    ) as HTMLElement;

    expect(alert).toBeInTheDocument();
    expect(alertCloseText).toBeInTheDocument();
    expect(alertCloseBtn).toBeInTheDocument();

    fireEvent.click(alertCloseBtn);

    expect(onClose).toHaveBeenCalledTimes(1);
    expect(alert).not.toBeInTheDocument();
    expect(alertCloseBtn).not.toBeInTheDocument();
    expect(alertCloseText).not.toBeInTheDocument();

    // alert2 closeText
    rerender(
      <Alert
        key="alert2"
        message="hello world"
        closable
        closeText="Close"
       />,
    );
    const alert2 = getByRole('alert');
    const alert2CloseText = getByText('Close');
    const alert2CloseBtn = container.querySelector(
      '.klein-alert-close',
    ) as HTMLElement;

    expect(alert2).toBeInTheDocument();
    expect(alert2CloseBtn).toBeInTheDocument();
    expect(alert2CloseText).toBeInTheDocument();

    fireEvent.click(alert2CloseBtn);

    expect(onClose).toHaveBeenCalledTimes(1);
    expect(alert2).not.toBeInTheDocument();
    expect(alert2CloseBtn).not.toBeInTheDocument();
    expect(alert2CloseText).not.toBeInTheDocument();
  });
});
