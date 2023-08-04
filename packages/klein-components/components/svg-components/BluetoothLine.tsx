import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const BluetoothLine = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-bluetoothLine`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M7.752.954a.6.6 0 01.643.094l4 3.5a.6.6 0 01-.017.918L9.26 8l3.12 2.534a.6.6 0 01.016.917l-4 3.5A.6.6 0 017.4 14.5V9.51l-3.022 2.456-.756-.932L7.356 8 3.622 4.966l.756-.932L7.4 6.49V1.5a.6.6 0 01.352-.546zM8.6 9.01v4.167l2.47-2.161L8.6 9.011zm0-2.022l2.47-2.006-2.47-2.16v4.166z" fill="currentColor" /></svg></span>;
});
BluetoothLine.displayName = "BluetoothLine";
export default BluetoothLine;