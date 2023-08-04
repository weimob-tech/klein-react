import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const QuoteLine = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-quoteLine`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M1.366 8.651C1.931 6.231 3.932 4.313 6 3l.75.75c-1.25.793-2.707 2.502-3.122 3.359.245-.063.502-.097.767-.097 1.673 0 3.03 1.34 3.03 2.994C7.424 11.66 6.088 13 4.25 13c-1.783 0-3.464-1.87-2.885-4.349zM8.692 8.651C9.257 6.231 11.432 4.313 13.5 3l.75.75c-1.25.793-2.882 2.502-3.296 3.359.245-.063.502-.097.767-.097 1.673 0 3.029 1.34 3.029 2.994 0 1.654-1.335 2.994-3.173 2.994-1.783 0-3.464-1.87-2.885-4.349z" fill="currentColor" /></svg></span>;
});
QuoteLine.displayName = "QuoteLine";
export default QuoteLine;