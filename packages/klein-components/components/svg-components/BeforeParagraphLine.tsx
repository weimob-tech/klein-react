import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const BeforeParagraphLine = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-beforeParagraphLine`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M5.867 5h4.266a.3.3 0 00.236-.485L8.236 1.8a.3.3 0 00-.472 0L5.631 4.515A.3.3 0 005.867 5zM14 6.85H2v1.3h12v-1.3zm0 3H2v1.3h12v-1.3zm-12 3h12v1.3H2v-1.3z" fill="currentColor" /></svg></span>;
});
BeforeParagraphLine.displayName = "BeforeParagraphLine";
export default BeforeParagraphLine;