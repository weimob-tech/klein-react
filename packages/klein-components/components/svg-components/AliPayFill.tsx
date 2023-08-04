import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const AliPayFill = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-aliPayFill`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M3.5 1.5a2 2 0 00-2 2v9a2 2 0 002 2h9a2 2 0 001.962-1.61c-.445-.245-.887-.493-1.328-.74-1.226-.689-2.44-1.37-3.675-1.97-.703.806-1.746 1.612-2.925 1.96-.737.22-1.407.305-2.102.16-.695-.144-1.204-.466-1.5-.788-.23-.256-.472-.56-.56-.899l-.007-.025c-.022-.09-.045-.18-.053-.271a2.068 2.068 0 01.026-.61c.068-.34.212-.73.585-1.086.814-.797 1.899-.84 2.467-.83.83.008 2.289.372 3.51.805.339-.721.56-1.493.695-2.01H4.508v-.55H7.12V4.932H3.965v-.56H7.12V3.271c0-.152.034-.271.272-.271h1.237v1.373h3.434v.552H8.628v1.102h2.747s-.28 1.534-1.136 3.052c.844.3 2.044.693 3.19 1.07l1.071.351v-7a2 2 0 00-2-2h-9zm-.23 7.62c-.207.15-.424.373-.485.65-.086.382-.017.858.382 1.239.485.452 1.231.58 1.552.603.867.056 1.795-.341 2.497-.786a5.07 5.07 0 001.188-1.079c-1.006-.476-2.263-1-3.598-.953-.685.024-1.18.151-1.535.326z" fill="currentColor" /></svg></span>;
});
AliPayFill.displayName = "AliPayFill";
export default AliPayFill;