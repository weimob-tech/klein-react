import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const CloseFill = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-closeFill`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M8 1a7 7 0 100 14A7 7 0 008 1zm3.348 4.5l-.424.424L8.85 8l2.075 2.076.425.424-.849.848-.424-.424L8 8.85l-2.076 2.075-.424.425-.849-.849.425-.424L7.15 8 5.076 5.924 4.65 5.5l.849-.849.424.425L8 7.15l2.076-2.075.424-.425.848.849z" fill="currentColor" /></svg></span>;
});
CloseFill.displayName = "CloseFill";
export default CloseFill;