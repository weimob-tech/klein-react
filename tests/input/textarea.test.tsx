import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react'; // eslint-disable-line @typescript-eslint/no-unused-vars
import { Input } from 'klein';

const { TextArea } = Input;

describe('Input.TextArea', () => {
  test('controlled value', () => {
    const { getByPlaceholderText, rerender } = render(
      <TextArea placeholder="请输入" defaultValue="123" />,
    );

    const textarea = getByPlaceholderText('请输入');

    expect(textarea.textContent).toBe('123');

    rerender(
      <TextArea placeholder="请输入" defaultValue="123" value="456" />,
    );
    expect(textarea.textContent).toBe('456');

    rerender(
      <TextArea placeholder="请输入" defaultValue="123" value="789" />,
    );
    expect(textarea.textContent).toBe('789');
  });

  test('disabled', () => {
    const { getByPlaceholderText } = render(
      <TextArea placeholder="请输入" defaultValue="默认值" disabled />,
    );

    const textarea = getByPlaceholderText('请输入');

    expect(textarea).toHaveClass('klein-input-textarea');
    expect(textarea).toBeInTheDocument();
    expect(textarea.hasAttribute('disabled')).toBe(true);
  });

  test('show count', () => {
    const { container, rerender } = render(
      <TextArea placeholder="请输入" value="123456" showCount />,
    );

    const textarea = container.firstChild as HTMLElement;

    expect(textarea.getAttribute('data-count')).toBe('6');

    // update
    rerender(
      <TextArea placeholder="请输入" value="123456789" showCount />,
    );
    expect(textarea.getAttribute('data-count')).toBe('9');

    // with max-length
    rerender(
      <TextArea
        placeholder="请输入"
        value="123456789"
        showCount
        maxLength={20}
       />,
    );
    expect(textarea.getAttribute('data-count')).toBe('9/20');
    expect(textarea).not.toHaveClass('klein-input-textarea-count-error');

    // value.length > max-length
    rerender(
      <TextArea
        placeholder="请输入"
        value="123456789"
        showCount
        maxLength={5}
       />,
    );
    expect(textarea.getAttribute('data-count')).toBe('9/5');
    expect(textarea).toHaveClass('klein-input-textarea-count-error');

    // custom showCount format
    rerender(
      <TextArea
        placeholder="请输入"
        value="123456789"
        showCount={(current: number, max: number) => `剩余${max - current}字`}
        maxLength={20}
       />,
    );
    expect(textarea.getAttribute('data-count')).toBe('剩余11字');
  });

  test('onChange', () => {
    const onChange = jest.fn();
    const { getByPlaceholderText } = render(
      <TextArea
        placeholder="请输入"
        defaultValue="123"
        onChange={onChange}
       />,
    );

    const textarea = getByPlaceholderText('请输入');
    expect(textarea).toBeInTheDocument();
    expect(textarea.textContent).toBe('123');

    fireEvent.change(textarea, { target: { value: '456' } });

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(textarea.textContent).toBe('456');
  });
});
