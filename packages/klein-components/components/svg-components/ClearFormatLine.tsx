import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const ClearFormatLine = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-clearFormatLine`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M8.451 1.664a1 1 0 011.415 0l3.958 3.954a1 1 0 010 1.414l-4.752 4.756a1 1 0 01-.71.293l-3.016-.007a1 1 0 01-.704-.292L2.196 9.338a1 1 0 010-1.414l6.255-6.26zm1.698 7.348L6.475 5.34 3.186 8.63l2.245 2.244 2.85.007 1.868-1.87zM3 14.65h10v-1.3H3v1.3z" fill="currentColor" /></svg></span>;
});
ClearFormatLine.displayName = "ClearFormatLine";
export default ClearFormatLine;