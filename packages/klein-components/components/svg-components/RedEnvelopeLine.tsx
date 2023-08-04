import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const RedEnvelopeLine = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-redEnvelopeLine`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M3.5.9a1.6 1.6 0 00-1.6 1.6v11a1.6 1.6 0 001.6 1.6h9a1.6 1.6 0 001.6-1.6v-11A1.6 1.6 0 0012.5.9h-9zm-.4 1.6c0-.22.179-.4.4-.4h9c.22 0 .4.18.4.4v2.68c-.497.304-1.434.737-2.698.997a2.35 2.35 0 00-4.404 0c-1.264-.26-2.2-.693-2.698-.997V2.5zm0 4.041c.651.313 1.529.632 2.58.837a2.35 2.35 0 004.64 0 10.802 10.802 0 002.58-.837V13.5a.4.4 0 01-.4.4h-9a.4.4 0 01-.4-.4V6.541zM6.85 7a1.15 1.15 0 112.3 0 1.15 1.15 0 01-2.3 0z" fill="currentColor" /></svg></span>;
});
RedEnvelopeLine.displayName = "RedEnvelopeLine";
export default RedEnvelopeLine;