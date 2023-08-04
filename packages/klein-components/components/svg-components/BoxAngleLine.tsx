import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const BoxAngleLine = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-boxAngleLine`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M3.404 1.65A1.6 1.6 0 001.87 2.796L.925 5.99.9 6.073v6.677a1.6 1.6 0 001.6 1.6H13a1.6 1.6 0 001.6-1.6V6.073l-.025-.083-.945-3.194a1.6 1.6 0 00-1.534-1.146H3.404zm-.383 1.486a.4.4 0 01.383-.286H7.4v2.8H2.277l.744-2.514zM8.6 5.65v-2.8h3.496a.4.4 0 01.383.286l.744 2.514H8.6zm-6.5 1.2h11.3v5.9a.4.4 0 01-.4.4H2.5a.4.4 0 01-.4-.4v-5.9zM9 11.6h3v-1.2H9v1.2z" fill="currentColor" /></svg></span>;
});
BoxAngleLine.displayName = "BoxAngleLine";
export default BoxAngleLine;