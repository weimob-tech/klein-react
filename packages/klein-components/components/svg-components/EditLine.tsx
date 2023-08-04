import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const EditLine = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-editLine`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M10.576 1.576a.6.6 0 01.848 0l2.5 2.5a.6.6 0 010 .848l-6.5 6.5A.6.6 0 017 11.6H4.5a.6.6 0 01-.6-.6V8.5a.6.6 0 01.176-.424l6.5-6.5zM5.1 8.749V10.4h1.651l5.9-5.9L11 2.849l-5.9 5.9zM14 14.1H2v-1.2h12v1.2z" fill="currentColor" /></svg></span>;
});
EditLine.displayName = "EditLine";
export default EditLine;