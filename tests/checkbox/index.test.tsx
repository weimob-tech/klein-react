import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react'; // eslint-disable-line @typescript-eslint/no-unused-vars
import { Checkbox } from 'klein';

describe('Checkbox', () => {
  test('render correct', () => {
    const { getByText, rerender, container } = render(
      <Checkbox>Test</Checkbox>,
    );

    const $checkbox = container.firstChild as HTMLElement;
    const $text = getByText('Test');
    expect($text).toBeInTheDocument();
    expect($checkbox).toBeInTheDocument();
    expect($checkbox).toHaveClass('klein-checkbox-wrapper');

    rerender(<Checkbox disabled>禁用状态</Checkbox>);
    expect($checkbox).toHaveClass('klein-checkbox-wrapper-disabled');

    rerender(<Checkbox checked>选中状态</Checkbox>);
    expect($checkbox).toHaveClass('klein-checkbox-wrapper-checked');

    rerender(<Checkbox indeterminate>半选状态</Checkbox>);
    expect($checkbox).not.toHaveClass('klein-checkbox-wrapper-checked');
    expect($checkbox.firstChild).toHaveClass(
      'klein-checkbox-checked',
      'klein-checkbox-indeterminate',
    );
  });
  test('onChange', () => {
    const onChange = jest.fn();
    const { container } = render(<Checkbox onChange={onChange}>Test</Checkbox>);

    const $input = container.querySelector(
      '.klein-checkbox-input',
    ) as HTMLElement;
    expect($input).toBeInTheDocument();

    fireEvent.click($input);
    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
