import React from 'react';
import { render } from '@testing-library/react';
import { Switch } from 'klein';

describe('Switch', () => {
  test('display size', () => {
    const { rerender, container } = render(<Switch size="large" />);

    const $switch = container.firstChild as HTMLElement;
    expect($switch).toBeInTheDocument();

    expect($switch).toHaveClass('klein-switch', 'klein-switch-lg');

    rerender(<Switch size="small" />);
    expect($switch).toHaveClass('klein-switch', 'klein-switch-sm');

    rerender(<Switch size="medium" />);
    expect($switch).not.toHaveClass('klein-switch-sm', 'klein-switch-lg');

    rerender(<Switch size="default" />);
    expect($switch).not.toHaveClass('klein-switch-sm', 'klein-switch-lg');
  });
});
