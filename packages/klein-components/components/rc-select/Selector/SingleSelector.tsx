// @ts-nocheck
import * as React from 'react';
import pickAttrs from '../../rc-util/pickAttrs';
import Input from './Input';
import { InnerSelectorProps } from '.';
import { useRef, useState } from 'react';

interface SelectorProps extends InnerSelectorProps {
  inputElement: React.ReactElement;
  activeValue: string;
  backfill?: boolean;
}

const SingleSelector: React.FC<SelectorProps> = (props) => {
  const {
    inputElement,
    prefixCls,
    id,
    inputRef,
    disabled,
    autoFocus,
    autoComplete,
    accessibilityIndex,
    mode,
    open,
    values,
    placeholder,
    tabIndex,

    showSearch,
    searchValue,
    activeValue,
    maxLength,
    style, // by custom --- szp

    onInputKeyDown,
    onInputMouseDown,
    onInputChange,
    onInputPaste,
    onInputCompositionStart,
    onInputCompositionEnd,
    setPrePadding,
    setSufPadding,
    prefix,
    suffix,
  } = props;

  const [inputChanged, setInputChanged] = React.useState(false);

  const combobox = mode === 'combobox';
  const inputEditable = combobox || showSearch;
  const item = values[0];

  let inputValue: string = searchValue || '';
  if (combobox && activeValue && !inputChanged) {
    inputValue = activeValue;
  }

  React.useEffect(() => {
    if (combobox) {
      setInputChanged(false);
    }
  }, [combobox, activeValue]);

  // Not show text when closed expect combobox mode
  const hasTextInput = mode !== 'combobox' && !open ? false : !!inputValue;

  const title =
    item && (typeof item.label === 'string' || typeof item.label === 'number')
      ? item.label.toString()
      : undefined;

  // /* start */custom function ---by: szp
  const preDivEle = useRef();
  const [prePaddingChild, setPrePaddingChild] = useState(null);
  const [inputPaddingLeft, setPreInputPaddingLeft] = useState(null);

  React.useEffect(() => {
    setPrePaddingChild(preDivEle?.current?.offsetWidth);
  });
  React.useEffect(() => {
    prefix && setPreInputPaddingLeft(preDivEle?.current?.offsetWidth + 8);
    prefix && setPrePadding(prePaddingChild + 20);
  });
  // prefix && setPrePadding(prePaddingChild + 20);

  const sufDivEle = useRef();
  const [sufPaddingChild, setSufPaddingChild] = useState(null);
  const [inputPaddingRight, setInputPaddingRight] = useState(null);
  React.useEffect(() => {
    setSufPaddingChild(sufDivEle?.current?.offsetWidth);
    suffix && setInputPaddingRight(sufDivEle?.current?.offsetWidth + 12);
    suffix && setSufPadding(sufPaddingChild + 20);
  });
  // suffix && setSufPadding(sufPaddingChild + 20);

  const customstylePre = {
    position: 'absolute',
  };
  const customstyleSuf = {
    position: 'absolute',
    right: 0,
  };

  let inputStyle = {};
  if (prefix) inputStyle['paddingLeft'] = inputPaddingLeft;
  if (suffix) inputStyle['paddingRight'] = inputPaddingRight;

  return (
    <>
      <span className={`${prefixCls}-selection-search`}>
        {/* by custom --- szp */}
        <span ref={preDivEle} style={customstylePre}>
          {prefix && `${prefix}：`}
        </span>
        <Input
          style={inputStyle} // by custom --- szp
          ref={inputRef}
          prefixCls={prefixCls}
          id={id}
          open={open}
          inputElement={inputElement}
          disabled={disabled}
          autoFocus={autoFocus}
          autoComplete={autoComplete}
          editable={inputEditable}
          accessibilityIndex={accessibilityIndex}
          value={inputValue}
          onKeyDown={onInputKeyDown}
          onMouseDown={onInputMouseDown}
          onChange={(e) => {
            setInputChanged(true);
            onInputChange(e as any);
          }}
          onPaste={onInputPaste}
          onCompositionStart={onInputCompositionStart}
          onCompositionEnd={onInputCompositionEnd}
          tabIndex={tabIndex}
          attrs={pickAttrs(props, true)}
          maxLength={combobox ? maxLength : undefined}
        />
        {/* by custom --- szp */}
        <span ref={sufDivEle} style={customstyleSuf}>
          {suffix}
        </span>
      </span>

      {/* Display value */}
      {!combobox && item && !hasTextInput && (
        <span className={`${prefixCls}-selection-item`} title={title}>
          {item.label}
        </span>
      )}

      {/* Display placeholder */}
      {!item && !hasTextInput && (
        <span className={`${prefixCls}-selection-placeholder`}>
          {placeholder}
        </span>
      )}
    </>
  );
};

export default SingleSelector;
