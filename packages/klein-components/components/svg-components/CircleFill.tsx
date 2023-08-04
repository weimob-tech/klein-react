import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const CircleFill = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-circleFill`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" ><g fill="none" fillRule="evenodd"><circle fill="currentColor" opacity={0.45} cx={20} cy={20} r={20} /><path d="M20.084 16.159a.624.624 0 01.832 0l5.82 5.366c.46.424.304.767-.346.767h-3.534v5.624c0 .599-.527 1.084-1.178 1.084h-2.356c-.65 0-1.178-.485-1.178-1.084v-5.624H14.61c-.65 0-.805-.344-.345-.767l5.819-5.366zM26.857 13H13.143C12.512 13 12 12.552 12 12s.512-1 1.143-1h13.714c.631 0 1.143.448 1.143 1s-.512 1-1.143 1z" fill="#FFF" /></g></svg></span>;
});
CircleFill.displayName = "CircleFill";
export default CircleFill;