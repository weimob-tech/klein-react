import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const EditOutLine = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-editOutLine`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M2.6 3c0-.22.18-.4.4-.4h5.923V1.4H3A1.6 1.6 0 001.4 3v10A1.6 1.6 0 003 14.6h10a1.6 1.6 0 001.6-1.6V7.077h-1.2V13a.4.4 0 01-.4.4H3a.4.4 0 01-.4-.4V3zm10.976-1.424l-7 7 .848.848 7-7-.848-.848z" fill="currentColor" /></svg></span>;
});
EditOutLine.displayName = "EditOutLine";
export default EditOutLine;