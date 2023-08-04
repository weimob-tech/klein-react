import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const IndentDecreaseLine = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-indentDecreaseLine`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M2 2.4h12v1.2H2V2.4zm5 3.333h7v1.2H7v-1.2zm7 3.334H7v1.2h7v-1.2zM2 12.4h12v1.2H2v-1.2zm2.508-6.492l-2.23 1.851a.3.3 0 00-.002.461l2.231 1.868A.3.3 0 005 9.858v-3.72a.3.3 0 00-.492-.23z" fill="currentColor" /></svg></span>;
});
IndentDecreaseLine.displayName = "IndentDecreaseLine";
export default IndentDecreaseLine;