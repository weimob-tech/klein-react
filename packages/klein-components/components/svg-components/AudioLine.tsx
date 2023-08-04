import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const AudioLine = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-audioLine`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M2.75 1.65a1.6 1.6 0 00-1.6 1.6v9.5a1.6 1.6 0 001.6 1.6h10.5a1.6 1.6 0 001.6-1.6v-9.5a1.6 1.6 0 00-1.6-1.6H2.75zm-.4 1.6c0-.22.179-.4.4-.4h10.5c.22 0 .4.18.4.4v9.5a.4.4 0 01-.4.4H2.75a.4.4 0 01-.4-.4v-9.5zM9.6 4.5v.679L10.833 6l-.666.998-.567-.378V10c0 1.243-1.142 2.1-2.35 2.1-1.208 0-2.35-.857-2.35-2.1s1.142-2.1 2.35-2.1c.404 0 .8.096 1.15.27V4.5h1.2zM7.25 9.1c-.725 0-1.15.486-1.15.9 0 .414.425.9 1.15.9.725 0 1.15-.486 1.15-.9 0-.414-.425-.9-1.15-.9z" fill="currentColor" /></svg></span>;
});
AudioLine.displayName = "AudioLine";
export default AudioLine;