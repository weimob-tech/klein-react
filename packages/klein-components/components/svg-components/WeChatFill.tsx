import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const WeChatFill = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-weChatFill`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M11.15 6.429c2.433 0 4.6 1.767 4.6 3.938 0 1.181-.755 2.232-1.786 3.04l-.111.085.186.62a.315.315 0 01-.41.385l-.042-.02-.81-.444c-.542.135-1.087.272-1.627.272-2.576 0-4.606-1.765-4.606-3.938 0-2.169 2.03-3.938 4.606-3.938zM5.694 2.18c2.676 0 5.02 1.625 5.493 3.81a4.544 4.544 0 00-.525-.031c-2.585 0-4.628 1.924-4.628 4.296 0 .395.062.775.168 1.138a6.213 6.213 0 01-.508.021c-.454 0-.847-.061-1.261-.142l-.646-.13-.933.466a.449.449 0 01-.64-.493l.013-.05.201-.604C1.066 9.511.25 8.288.25 6.796c0-2.582 2.451-4.616 5.444-4.616zM9.77 8.553a.63.63 0 100 1.259.63.63 0 000-1.259zm2.99 0a.63.63 0 100 1.259.63.63 0 000-1.259zM3.91 4.462a.748.748 0 100 1.495.748.748 0 000-1.495zm3.776 0a.748.748 0 100 1.495.748.748 0 000-1.495z" fill="currentColor" /></svg></span>;
});
WeChatFill.displayName = "WeChatFill";
export default WeChatFill;