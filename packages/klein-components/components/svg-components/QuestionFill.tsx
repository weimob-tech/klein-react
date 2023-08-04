import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const QuestionFill = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-questionFill`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" ><path d="M8 .9a7.1 7.1 0 110 14.2A7.1 7.1 0 018 .9zm.5 10H7.3v1h1.2v-1zm-.6-7.1c-.89 0-1.611.3-2.112.8a2.539 2.539 0 00-.738 1.8h1.2c0-.352.132-.696.387-.95C6.887 5.2 7.29 5 7.9 5c.61 0 1.014.2 1.263.45.255.254.387.598.387.95 0 .29-.086.465-.209.61-.143.168-.347.307-.638.493l-.167.105-.202.134c-.485.336-1.034.847-1.034 1.776V9.9h1.2v-.382c0-.436.238-.615.847-1.004l.146-.093c.245-.16.532-.363.762-.634.3-.352.495-.801.495-1.387a2.54 2.54 0 00-.738-1.8c-.5-.5-1.222-.8-2.112-.8z" fill="currentColor" fillRule="evenodd" /></svg></span>;
});
QuestionFill.displayName = "QuestionFill";
export default QuestionFill;