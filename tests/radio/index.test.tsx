import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react'; // eslint-disable-line @typescript-eslint/no-unused-vars
import { Radio } from 'klein';

describe('Radio', () => {
  test('render correct', () => {
    const { getByText, rerender, container } = render(<Radio>Test</Radio>);

    const $radio = container.firstChild as HTMLElement;
    const $text = getByText('Test');
    expect($text).toBeInTheDocument();
    expect($radio).toBeInTheDocument();
    expect($radio).toHaveClass('klein-radio-wrapper');

    rerender(<Radio disabled>禁用状态</Radio>);
    expect($radio).toHaveClass('klein-radio-wrapper-disabled');

    rerender(<Radio checked>选中状态</Radio>);
    expect($radio).toHaveClass('klein-radio-wrapper-checked');

    rerender(<Radio showType="button">按钮样式</Radio>);
    expect($radio).toHaveClass('klein-radio-wrapper-show-type-button');
  });
  test('onChange', () => {
    const onChange = jest.fn();
    const { container } = render(<Radio onChange={onChange}>Test</Radio>);

    const $input = container.querySelector('.klein-radio-input') as HTMLElement;
    expect($input).toBeInTheDocument();

    fireEvent.click($input);
    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
