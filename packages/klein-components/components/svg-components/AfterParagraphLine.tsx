import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const AfterParagraphLine = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-afterParagraphLine`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M14 1.85H2v1.3h12v-1.3zm0 3H2v1.3h12v-1.3zm-12 3h12v1.3H2v-1.3zM9.883 11H5.617a.3.3 0 00-.236.485L7.514 14.2a.3.3 0 00.472 0l2.133-2.715A.3.3 0 009.883 11z" fill="currentColor" /></svg></span>;
});
AfterParagraphLine.displayName = "AfterParagraphLine";
export default AfterParagraphLine;