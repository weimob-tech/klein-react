import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Input } from 'klein';

const { Search } = Input;

describe('Input.Search', () => {
  test('enterButton', () => {
    const { container, rerender } = render(
      <Search placeholder="请输入" defaultValue="默认值" />,
    );

    const input = container.firstChild;
    const enterBtn = container.querySelector('.klein-input-search-btn');

    expect(input).toHaveClass('klein-input-search');
    expect(enterBtn).toBeInTheDocument();

    // rename enterButton
    rerender(
      <Search
        placeholder="请输入"
        defaultValue="默认值"
        enterButton="Search"
       />,
    );

    expect(enterBtn?.textContent).toBe('Search');

    // replace enterButton
    rerender(
      <Search
        placeholder="请输入"
        defaultValue="默认值"
        enterButton={<a className="custom-enter-btn">Button</a>}
       />,
    );

    const customEnterBtn = container.querySelector('.custom-enter-btn');
    expect(enterBtn).not.toBeInTheDocument();
    expect(customEnterBtn).toBeInTheDocument();
    expect(customEnterBtn?.textContent).toBe('Button');
  });

  test('loading', () => {
    const { getByPlaceholderText, container } = render(
      <Search placeholder="请输入" loading />,
    );

    const input = container.firstChild;
    const inputNative = getByPlaceholderText('请输入');
    const enterBtn = container.querySelector('.klein-input-search-btn');

    expect(input).toHaveClass('klein-input-search');
    expect(enterBtn).toHaveClass(
      'klein-input-search-btn',
      'klein-input-search-btn-loading',
    );
    expect(enterBtn?.hasAttribute('disabled')).toBeTruthy();
    expect(inputNative?.hasAttribute('disabled')).toBeFalsy();
  });

  test('onSearch', () => {
    const onSearch = jest.fn();
    const { getByPlaceholderText } = render(
      <Search
        placeholder="请输入"
        defaultValue="123"
        onSearch={onSearch}
       />,
    );

    const inputNative = getByPlaceholderText('请输入');
    expect(inputNative).toBeInTheDocument();
    expect(inputNative.getAttribute('value')).toBe('123');

    fireEvent.keyDown(inputNative, { key: 'Enter', keyCode: 13 });

    expect(onSearch).toHaveBeenCalledTimes(1);
  });
});
