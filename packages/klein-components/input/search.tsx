import React from 'react';
import cx from 'classnames';

import Button from '../button';
import type { InputProps } from './input';
import Input from './input';
import { cloneElement } from '../utils/ReactNodeValidate';

import { ConfigContext } from '../config-provider/context';
import Icon from '../icon';

const { SearchLine } = Icon;
export interface SearchProps extends InputProps {
  /** 搜索中 */
  loading?: boolean;
  /** 自定义搜索按钮 */
  enterButton?: React.ReactNode;
  /** 输入框内容变化时的回调 */
  onSearch?: (
    value: string,
    event?:
      | React.MouseEvent<HTMLElement>
      | React.KeyboardEvent<HTMLInputElement>,
  ) => void;
}

const SearchInput = React.forwardRef((props: SearchProps, ref: unknown) => {
  const { loading, enterButton, onSearch, ...inputProps } = props;
  // console.log(enterButton, '--------enterButton');

  const { getPrefixClassName } = React.useContext(ConfigContext);
  const inputCls = getPrefixClassName('input-search');
  const inputRef = (ref as any) || React.useRef<HTMLInputElement>(null);

  // handle
  const handleSearch = (
    evt: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLInputElement>,
  ) => {
    const value = inputRef.current ? inputRef.current.value : '';
    onSearch?.(value, evt);
  };
  // render
  const renderSearchBtn = () => {
    if (typeof enterButton === 'string') {
      return (
        <Button
          type="primary"
          size={props.size}
          loading={loading}
          disabled={props.disabled || loading}
          onClick={handleSearch}
          className={cx(
            `${inputCls}-btn`,
            loading && `${inputCls}-btn-loading`,
          )}
        >
          {loading ? '加载中' : enterButton}
        </Button>
      );
    }
    return enterButton;
  };
  if (typeof enterButton === 'undefined') {
    inputProps.suffix = (
      <span onClick={handleSearch} className={`${inputCls}-default-search`}>
        <SearchLine />
      </span>
    );
  } else {
    inputProps.addonAfter = renderSearchBtn();
  }
  const enterButtonAsElement = (enterButton || {}) as React.ReactElement;
  const isAntdButton = enterButtonAsElement.type;
  if (isAntdButton) {
    inputProps.addonAfter = cloneElement(enterButtonAsElement, {
      onMouseDown: handleSearch,
      // onClick: handleSearch,
      key: 'enterButton',
      ...(isAntdButton
        ? {
            className: `${inputCls}-btn`,
            size: props.size,
          }
        : {}),
    });
  }
  return (
    <Input
      {...inputProps}
      ref={inputRef}
      onPressEnter={handleSearch}
      className={cx(inputCls, props.className)}
    />
  );
});
SearchInput.displayName = 'SearchInput';
export default SearchInput;
