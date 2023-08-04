import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const ShowFill = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-showFill`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M1.6 8l.002.023a1.913 1.913 0 00.083.292c.068.183.175.412.321.671.293.52.73 1.135 1.298 1.722C4.444 11.888 6.048 12.9 8 12.9c1.951 0 3.556-1.012 4.696-2.192a8.677 8.677 0 001.298-1.722c.146-.26.253-.488.32-.671a1.913 1.913 0 00.084-.292L14.4 8l-.002-.023a1.912 1.912 0 00-.083-.292 4.838 4.838 0 00-.321-.672 8.679 8.679 0 00-1.298-1.721C11.556 4.112 9.95 3.1 8 3.1c-1.952 0-3.556 1.012-4.696 2.192a8.678 8.678 0 00-1.298 1.721 4.84 4.84 0 00-.32.672 1.912 1.912 0 00-.084.292A.23.23 0 001.6 8zm12.8 0zM2.44 4.458C3.716 3.138 5.612 1.9 8 1.9c2.388 0 4.283 1.238 5.559 2.558a9.88 9.88 0 011.48 1.966c.17.303.306.59.4.844.09.24.16.5.16.732 0 .232-.07.492-.16.732-.094.255-.23.541-.4.844a9.881 9.881 0 01-1.48 1.966c-1.276 1.32-3.171 2.558-5.56 2.558-2.387 0-4.283-1.238-5.558-2.558a9.877 9.877 0 01-1.48-1.966 6.025 6.025 0 01-.4-.844C.47 8.492.4 8.232.4 8c0-.232.071-.492.16-.732.095-.255.23-.541.4-.844a9.876 9.876 0 011.481-1.966zM8 6.1a1.9 1.9 0 100 3.8 1.9 1.9 0 000-3.8zM4.9 8a3.1 3.1 0 116.2 0 3.1 3.1 0 01-6.2 0z" fill="currentColor" /></svg></span>;
});
ShowFill.displayName = "ShowFill";
export default ShowFill;