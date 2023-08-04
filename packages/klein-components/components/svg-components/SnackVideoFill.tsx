import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const SnackVideoFill = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-snackVideoFill`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M3.5 1.5a2 2 0 00-2 2v9a2 2 0 002 2h9a2 2 0 002-2v-9a2 2 0 00-2-2h-9zm3.52 2a2.12 2.12 0 011.852 1.088 1.8 1.8 0 011.214-.469c1.002 0 1.814.816 1.814 1.822a1.818 1.818 0 01-1.814 1.822c-.598 0-1.128-.29-1.459-.739a2.113 2.113 0 01-1.607.74 2.127 2.127 0 01-2.122-2.132c0-1.178.95-2.132 2.122-2.132zm0 1.093c-.57 0-1.033.465-1.033 1.039 0 .573.462 1.038 1.033 1.038.572 0 1.034-.465 1.034-1.038 0-.574-.462-1.039-1.034-1.039zm3.066.62a.727.727 0 000 1.457c.4 0 .726-.326.726-.729a.727.727 0 00-.726-.728zm.181 2.842c.902 0 1.633.734 1.633 1.64v1.165c0 .906-.73 1.64-1.633 1.64h-2.14a1.633 1.633 0 01-1.52-1.04l-1.457.731a.723.723 0 01-1.048-.597L4.1 9.076a.731.731 0 01.239-.54.724.724 0 01.753-.138l1.501.734a1.634 1.634 0 011.534-1.077h2.14zm.053 1.095l-2.193-.002a.545.545 0 00-.542.494l-.002.052v1.166c0 .284.216.518.492.544l2.192.003a.545.545 0 00.542-.494c.02-.406.014-.813.003-1.219a.546.546 0 00-.492-.544zM5 9.454c0-.048.05-.08.092-.058l1.33.661v.482c-.15.076-1.036.538-1.329.69A.064.064 0 015 11.174v-1.72z" fill="currentColor" /></svg></span>;
});
SnackVideoFill.displayName = "SnackVideoFill";
export default SnackVideoFill;