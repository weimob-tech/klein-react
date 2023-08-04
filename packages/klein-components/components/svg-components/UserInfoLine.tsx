import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const UserInfoLine = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-userInfoLine`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M2.5 1.9A1.6 1.6 0 00.9 3.5v9a1.6 1.6 0 001.6 1.6h11a1.6 1.6 0 001.6-1.6v-9a1.6 1.6 0 00-1.6-1.6h-11zm-.4 1.6c0-.22.179-.4.4-.4h11c.22 0 .4.18.4.4v9a.4.4 0 01-.4.4h-11a.4.4 0 01-.4-.4v-9zm7.4 3.6h3V5.9h-3v1.2zm0 3h3V8.9h-3v1.2zM5.75 5h.043c.789.024 1.446.683 1.47 1.495v.627c0 .54-.272 1.07-.692 1.355l-.022.015c-.213.164-.204.483.02.587l1.545.73c.26.128.413.362.382.647-.03.285-.252.521-.533.543L7.93 11H3.57c-.29 0-.533-.245-.565-.544-.03-.285.122-.519.385-.65l1.542-.727c.231-.108.233-.444-.002-.602-.424-.288-.693-.805-.693-1.355v-.585C4.236 5.692 4.927 5 5.75 5z" fill="currentColor" /></svg></span>;
});
UserInfoLine.displayName = "UserInfoLine";
export default UserInfoLine;