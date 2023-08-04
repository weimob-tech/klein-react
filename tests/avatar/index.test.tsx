import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Avatar } from 'klein';

describe('Avatar', () => {
  test('display size', () => {
    const { rerender, container } = render(<Avatar size="large" />);

    const avatar = container.firstChild as HTMLElement;
    expect(avatar).toBeInTheDocument();

    expect(avatar).toHaveClass('klein-avatar', 'klein-avatar-lg');

    rerender(<Avatar size="small" />);
    expect(avatar).toHaveClass('klein-avatar', 'klein-avatar-sm');

    rerender(<Avatar size="medium" />);
    expect(avatar).not.toHaveClass('klein-avatar-sm', 'klein-avatar-lg');

    rerender(<Avatar size="default" />);
    expect(avatar).not.toHaveClass('klein-avatar-sm', 'klein-avatar-lg');

    rerender(<Avatar size={100} />);
    expect(avatar).not.toHaveClass('klein-avatar-sm', 'klein-avatar-lg');
    expect(avatar).toHaveStyle('height: 100px; width: 100px');
  });

  test('display shape', () => {
    const { rerender, container } = render(<Avatar shape="circle" />);

    const avatar = container.firstChild;
    expect(avatar).toBeInTheDocument();

    expect(avatar).toHaveClass('klein-avatar', 'klein-avatar-circle');

    rerender(<Avatar shape="square" />);
    expect(avatar).toHaveClass('klein-avatar', 'klein-avatar-square');

    rerender(<Avatar />);
    expect(avatar).toHaveClass('klein-avatar', 'klein-avatar-circle');
  });

  test('children is string', () => {
    const { getByText, container } = render(<Avatar>User</Avatar>);

    const avatar = container.firstChild;
    const text = getByText('User');

    expect(avatar).toBeInTheDocument();
    expect(avatar).toHaveClass('klein-avatar', 'klein-avatar-string');
    expect(text).toBeInTheDocument();
  });

  test('children is ReactNode', () => {
    const { getByText } = render(
      <Avatar>
        <a href="#">Custom Child</a>
      </Avatar>,
    );

    const child = getByText('Custom Child');

    expect(child).toBeInTheDocument();
  });

  test('has src', () => {
    const { getByRole } = render(<Avatar src="https://weimob.com/test.png" />);

    const img = getByRole('img');

    expect(img).toBeInTheDocument();
  });

  test('load error', () => {
    const onError = jest.fn();
    const onLoad = jest.fn();

    const { getByRole } = render(
      <Avatar
        src="https://weimob.com/test.png"
        onError={onError}
        onLoad={onLoad}
      />,
    );

    const img = getByRole('img');

    fireEvent.error(img);

    expect(img).not.toBeInTheDocument();
    expect(onError).toBeCalledTimes(1);
    expect(onLoad).toBeCalledTimes(0);
  });

  test('load success', () => {
    const onError = jest.fn();
    const onLoad = jest.fn();

    const { getByRole, container } = render(
      <Avatar
        src="https://weimob.com/test.png"
        onError={onError}
        onLoad={onLoad}
      />,
    );

    const avatar = container.firstChild;
    const img = getByRole('img');

    fireEvent.load(img);

    expect(avatar).toHaveClass('klein-avatar-image');
    expect(img).toBeInTheDocument();
    expect(onError).toBeCalledTimes(0);
    expect(onLoad).toBeCalledTimes(1);
  });
});
