import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react'; // eslint-disable-line @typescript-eslint/no-unused-vars
import { Input } from 'klein';

describe('Input', () => {
  test('controlled value', () => {
    const { getByPlaceholderText, rerender } = render(
      <Input placeholder="请输入" defaultValue="123" />,
    );

    const inputNative = getByPlaceholderText('请输入');
    expect(inputNative.getAttribute('value')).toBe('123');

    rerender(
      <Input placeholder="请输入" defaultValue="123" value="456" />,
    );
    expect(inputNative.getAttribute('value')).toBe('456');

    rerender(
      <Input placeholder="请输入" defaultValue="123" value="789" />,
    );
    expect(inputNative.getAttribute('value')).toBe('789');
  });

  test('display size', () => {
    const { container, rerender } = render(
      <Input placeholder="请输入" defaultValue="默认值" size="large" />,
    );

    const input = container.firstChild;

    expect(input).toHaveClass('klein-input', 'klein-input-lg');

    // size = small
    rerender(<Input size="small" />);
    expect(input).toHaveClass('klein-input', 'klein-input-sm');

    // size = medium / default
    rerender(<Input size="medium" />);
    expect(input).toHaveClass('klein-input');
    expect(input).not.toHaveClass('klein-input-sm', 'klein-input-lg');

    // size = unknown
    rerender(<Input size="unknown" />);
    expect(input).toHaveClass('klein-input');
    expect(input).not.toHaveClass('klein-input-sm', 'klein-input-lg');
  });

  test('disabled', () => {
    const { getByPlaceholderText, container } = render(
      <Input placeholder="请输入" defaultValue="默认值" disabled />,
    );

    const input = container.firstChild;
    const inputNative = getByPlaceholderText('请输入');

    expect(input).toHaveClass('klein-input', 'klein-input-disabled');
    expect(inputNative).toBeInTheDocument();
    expect(inputNative.hasAttribute('disabled')).toBe(true);
  });

  test('prefix and suffix', () => {
    // prefix
    const { getByText, rerender } = render(
      <Input placeholder="请输入" prefix="prefix" />,
    );

    const prefix = getByText('prefix');
    expect(prefix).toBeInTheDocument();
    expect(prefix).toHaveClass('klein-input-prefix');

    // suffix
    rerender(
      <Input placeholder="请输入" prefix="prefix" suffix="suffix" />,
    );

    const suffix = getByText('suffix');
    expect(suffix).toBeInTheDocument();
    expect(suffix).toHaveClass('klein-input-suffix');
  });

  test('clearable', () => {
    const { getByPlaceholderText, rerender, container } = render(
      <Input placeholder="请输入" value="123" clearable />,
    );

    const clearBtn = container.querySelector('.klein-input-clear');
    const inputNative = getByPlaceholderText('请输入');

    expect(clearBtn).toBeInTheDocument();
    expect(inputNative.getAttribute('value')).toBe('123');

    // 清空输入内容
    fireEvent.click(clearBtn as HTMLElement);

    expect(clearBtn).not.toBeInTheDocument();
    expect(inputNative.getAttribute('value')).toBe('');

    // disabled 时不显示清空按钮
    rerender(
      <Input placeholder="请输入" value="123" disabled clearable />,
    );
    expect(
      container.querySelector('.klein-input-clear'),
    ).not.toBeInTheDocument();

    // 内容为空不显示清空按钮
    rerender(<Input placeholder="请输入" value="" clearable />);
    expect(
      container.querySelector('.klein-input-clear'),
    ).not.toBeInTheDocument();
  });

  test('show count', () => {
    const { container, rerender } = render(
      <Input value="123456" showCount />,
    );

    const count = container.querySelector('.klein-input-count');

    expect(count).toBeInTheDocument();
    expect(count?.textContent).toBe('6');

    // update
    rerender(<Input value="123456789" showCount />);
    expect(count?.textContent).toBe('9');

    // with max-length
    rerender(<Input value="123456789" showCount maxLength={20} />);
    expect(count?.textContent).toBe('9/20');
    expect(count).not.toHaveClass('klein-input-count-error');

    // value.length > max-length
    rerender(<Input value="123456789" showCount maxLength={5} />);
    expect(count?.textContent).toBe('9/5');
    expect(count).toHaveClass('klein-input-count-error');

    // custom showCount format
    rerender(
      <Input
        value="123456789"
        showCount={(current: number, max: number) => `剩余${max - current}字`}
        maxLength={20}
       />,
    );
    expect(count?.textContent).toBe('剩余11字');
  });

  test('addons', () => {
    // before
    const { getByText, container, rerender } = render(
      <Input placeholder="请输入" addonBefore="before" />,
    );

    const inputGroup = container.firstChild as HTMLElement;
    const input = inputGroup.querySelector('.klein-input');

    expect(inputGroup).toHaveClass('klein-input-group');
    expect(inputGroup).toBeInTheDocument();
    expect(input).toBeInTheDocument();

    const before = getByText('before');
    expect(before).toBeInTheDocument();
    expect(before).toHaveClass(
      'klein-input-group-addon',
      'klein-input-group-addon-text',
    );

    // before + after
    rerender(
      <Input
        placeholder="请输入"
        addonBefore="before"
        addonAfter="after"
       />,
    );

    const after = getByText('after');
    expect(after).toBeInTheDocument();
    expect(after).toHaveClass(
      'klein-input-group-addon',
      'klein-input-group-addon-text',
    );

    // with size
    rerender(
      <Input
        placeholder="请输入"
        size="large"
        addonBefore="before"
        addonAfter="after"
       />,
    );
    expect(inputGroup).toHaveClass('klein-input-group', 'klein-input-group-lg');
  });

  test('onFocus & onBlur', () => {
    const onFocus = jest.fn();
    const onBlur = jest.fn();
    const { getByPlaceholderText, container } = render(
      <Input
        placeholder="请输入"
        defaultValue="123"
        onFocus={onFocus}
        onBlur={onBlur}
       />,
    );

    const input = container.querySelector('.klein-input');
    const inputNative = getByPlaceholderText('请输入');
    expect(inputNative).toBeInTheDocument();

    fireEvent.focus(inputNative);

    expect(onFocus).toHaveBeenCalledTimes(1);
    expect(onBlur).toHaveBeenCalledTimes(0);
    expect(input).toHaveClass('klein-input-focused');

    fireEvent.blur(inputNative);

    expect(onFocus).toHaveBeenCalledTimes(1);
    expect(onBlur).toHaveBeenCalledTimes(1);
    expect(input).not.toHaveClass('klein-input-focused');
  });

  test('onPressEnter', () => {
    const onKeyDown = jest.fn();
    const onPressEnter = jest.fn();
    const { getByPlaceholderText } = render(
      <Input
        placeholder="请输入"
        defaultValue="123"
        onPressEnter={onPressEnter}
        onKeyDown={onKeyDown}
       />,
    );

    const inputNative = getByPlaceholderText('请输入');
    expect(inputNative).toBeInTheDocument();

    fireEvent.keyDown(inputNative, { key: 'A', keyCode: 65 });
    fireEvent.keyDown(inputNative, { key: 'Space', keyCode: 32 });
    fireEvent.keyDown(inputNative, { key: 'Enter', keyCode: 13 }); // press enter

    expect(onKeyDown).toHaveBeenCalledTimes(3);
    expect(onPressEnter).toHaveBeenCalledTimes(1);
  });

  test('onChange', () => {
    const onChange = jest.fn();
    const { getByPlaceholderText } = render(
      <Input
        placeholder="请输入"
        defaultValue="123"
        onChange={onChange}
       />,
    );

    const inputNative = getByPlaceholderText('请输入');
    expect(inputNative).toBeInTheDocument();
    expect(inputNative.getAttribute('value')).toBe('123');

    fireEvent.change(inputNative, { target: { value: '456' } });

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(inputNative.getAttribute('value')).toBe('456');
  });
});
