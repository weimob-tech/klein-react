import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const IndentIncreaseLine = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-indentIncreaseLine`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M14 3.6H2V2.4h12v1.2zM4.723 7.76L2.492 5.907a.3.3 0 00-.492.23v3.72a.3.3 0 00.493.23l2.23-1.868a.3.3 0 000-.46zM7 6.932h7v-1.2H7v1.2zm7 3.334H7v-1.2h7v1.2zM2 13.6h12v-1.2H2v1.2z" fill="currentColor" /></svg></span>;
});
IndentIncreaseLine.displayName = "IndentIncreaseLine";
export default IndentIncreaseLine;