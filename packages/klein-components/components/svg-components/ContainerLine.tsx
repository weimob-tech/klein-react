import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const ContainerLine = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-containerLine`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path fillRule="evenodd" clipRule="evenodd" d="M2.75 2.85a.4.4 0 00-.4.4v9.5c0 .22.179.4.4.4h10.5a.4.4 0 00.4-.4V4.5a.4.4 0 00-.4-.4H7.212l-1-1.25H2.75zm-1.6.4a1.6 1.6 0 011.6-1.6h3.51c.334 0 .65.152.859.413l.67.837h5.46a1.6 1.6 0 011.6 1.6v8.25a1.6 1.6 0 01-1.6 1.6H2.75a1.6 1.6 0 01-1.6-1.6v-9.5zM8.6 9.1V11H7.4V9.1H5.5V7.9h1.9V6h1.2v1.9h1.9v1.2H8.6z" fill="currentColor" /></svg></span>;
});
ContainerLine.displayName = "ContainerLine";
export default ContainerLine;