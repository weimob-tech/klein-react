import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const QuestionLine = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-questionLine`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" ><path d="M8.1 1a7.1 7.1 0 110 14.2A7.1 7.1 0 018.1 1zm0 1.2a5.9 5.9 0 100 11.8 5.9 5.9 0 000-11.8zm.5 8.8v1H7.4v-1h1.2zM8 3.9c.89 0 1.611.3 2.112.8a2.54 2.54 0 01.738 1.8c0 .586-.195 1.035-.495 1.387-.23.271-.517.474-.762.634l-.146.093c-.61.39-.847.568-.847 1.004V10H7.4v-.382c0-.93.549-1.44 1.034-1.776l.202-.134.167-.105c.29-.186.495-.325.638-.494.123-.144.209-.32.209-.609 0-.352-.132-.696-.387-.95C9.013 5.3 8.61 5.1 8 5.1c-.61 0-1.014.2-1.263.45-.255.254-.387.598-.387.95h-1.2c0-.648.243-1.304.738-1.8.5-.5 1.222-.8 2.112-.8z" fill="currentColor" fillRule="evenodd" /></svg></span>;
});
QuestionLine.displayName = "QuestionLine";
export default QuestionLine;