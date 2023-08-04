import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const WeChatMomentsFill = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-weChatMomentsFill`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M6.81 10.514a.45.45 0 01.68-.388l4.405 2.608a.452.452 0 01.03.756 6.714 6.714 0 01-4.716 1.213.452.452 0 01-.398-.449v-3.74zm-1.558-2.42a.45.45 0 01.659.399v5.272c0 .329-.34.542-.64.409a6.77 6.77 0 01-3.576-3.76.454.454 0 01.211-.565l3.346-1.754zm8.823-.915a.451.451 0 01.66.369 6.715 6.715 0 01-1.37 4.546.452.452 0 01-.59.115l-3.202-1.895a.45.45 0 01.02-.786l4.482-2.35zM2.64 3.9a.452.452 0 01.589-.115l3.205 1.897a.45.45 0 01-.02.786L1.925 8.822a.451.451 0 01-.66-.369A6.716 6.716 0 012.64 3.901zm7.457-1.662c0-.33.34-.542.64-.409a6.77 6.77 0 013.568 3.757.454.454 0 01-.21.565l-3.34 1.75a.45.45 0 01-.659-.398V2.24zm-6.016.267A6.714 6.714 0 018.798 1.3c.227.027.398.22.399.448v3.736a.45.45 0 01-.68.388L4.112 3.263a.452.452 0 01-.03-.757z" fill="currentColor" /></svg></span>;
});
WeChatMomentsFill.displayName = "WeChatMomentsFill";
export default WeChatMomentsFill;