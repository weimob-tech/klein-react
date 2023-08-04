import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const TextPasteLine = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-textPasteLine`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M3.5 2.1a.4.4 0 00-.4.4v11c0 .22.179.4.4.4H5v1.2H3.5a1.6 1.6 0 01-1.6-1.6v-11A1.6 1.6 0 013.5.9h6.607a1.6 1.6 0 011.136.473l2.393 2.412c.297.3.464.705.464 1.127V7h-1.2V4.912a.4.4 0 00-.116-.282L10.39 2.218a.4.4 0 00-.284-.118H3.5zm6.4 6.55H6.5v1.2h8v-1.2h-3.4v-2.4H9.9v2.4zm-3.728 5.929c-.078.2.067.421.282.421h5.36a.285.285 0 00.264-.168c.262-.6.362-1.28.4-1.75.005-.061.124-.07.136-.01l.338 1.687a.3.3 0 00.294.241h.919a.3.3 0 00.298-.333l-.433-3.9a.3.3 0 00-.299-.267H7.313c-.17 0-.31.141-.316.312-.022.602-.15 2.024-.825 3.767z" fill="currentColor" /></svg></span>;
});
TextPasteLine.displayName = "TextPasteLine";
export default TextPasteLine;