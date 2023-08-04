import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const PhoneLine = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-phoneLine`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M3.9 2.349L2.807 3.442a1.4 1.4 0 00-.297 1.541l.128.298a15.4 15.4 0 008.088 8.088l.297.128a1.4 1.4 0 001.542-.297l1.093-1.093-1.98-1.98-.866.866a.865.865 0 01-.933.192 9.078 9.078 0 01-5.057-5.057.865.865 0 01.192-.933l.866-.867-1.98-1.98zm-.778-.92a1.1 1.1 0 011.556 0l2.121 2.122a1.1 1.1 0 010 1.555l-.778.779a7.877 7.877 0 004.1 4.101l.78-.779a1.1 1.1 0 011.555 0l2.121 2.122a1.1 1.1 0 010 1.555l-1.163 1.164a2.6 2.6 0 01-2.863.552l-.298-.128a16.6 16.6 0 01-8.718-8.719l-.128-.297a2.6 2.6 0 01.551-2.863L3.122 1.43z" fill="currentColor" /></svg></span>;
});
PhoneLine.displayName = "PhoneLine";
export default PhoneLine;