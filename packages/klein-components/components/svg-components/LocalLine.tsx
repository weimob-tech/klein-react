import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const LocalLine = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-localLine`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M8 2.1C5.138 2.1 3.1 4.316 3.1 7c0 2.021 1.136 3.752 2.401 5.012a11.504 11.504 0 001.775 1.447c.253.166.468.288.624.367l.1.047c.028-.012.061-.028.1-.047.156-.079.37-.201.624-.367a11.507 11.507 0 001.774-1.447C11.764 10.752 12.9 9.022 12.9 7c0-2.684-2.038-4.9-4.9-4.9zM7.9 13.912zm.19-.002zM1.9 7C1.9 3.684 4.445.9 8 .9c3.554 0 6.1 2.784 6.1 6.1 0 2.479-1.385 4.498-2.755 5.863a12.706 12.706 0 01-1.964 1.6 7.657 7.657 0 01-.745.436 2.998 2.998 0 01-.29.129c-.065.024-.2.072-.346.072-.146 0-.281-.048-.346-.072a2.998 2.998 0 01-.29-.129 7.659 7.659 0 01-.745-.436 12.707 12.707 0 01-1.964-1.6C3.285 11.498 1.9 9.479 1.9 7zM8 5.1a1.9 1.9 0 100 3.8 1.9 1.9 0 000-3.8zM4.9 7a3.1 3.1 0 116.2 0 3.1 3.1 0 01-6.2 0z" fill="currentColor" /></svg></span>;
});
LocalLine.displayName = "LocalLine";
export default LocalLine;