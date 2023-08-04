import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const BaiduFill = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-baiduFill`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M3.438 8.377c1.549-.327 1.337-2.146 1.29-2.544-.076-.614-.809-1.686-1.804-1.601-1.252.11-1.436 1.89-1.436 1.89-.168.824.406 2.582 1.95 2.255zm1.584 3.903c.172.639.736.668.736.668h.81v-1.949h-.867c-.389.115-.578.415-.62.542-.046.128-.146.455-.06.74zm2.834-9.117C7.856 1.968 7.166 1 6.31 1c-.853 0-1.546.968-1.546 2.163 0 1.196.693 2.164 1.546 2.164.856 0 1.546-.968 1.546-2.164zm4.159.343c.148-.906-.588-1.962-1.398-2.142-.81-.184-1.822 1.093-1.913 1.926-.11 1.018.147 2.034 1.288 2.18 1.143.145 1.878-1.055 2.022-1.964zm.776 7.306s-1.768-1.345-2.799-2.799c-1.398-2.143-3.386-1.271-4.05-.181-.662 1.09-1.693 1.78-1.84 1.961-.148.18-2.134 1.235-1.694 3.161.441 1.925 1.99 1.89 1.99 1.89s1.142.11 2.467-.18c1.324-.29 2.464.072 2.464.072s3.094 1.018 3.94-.944c.846-1.963-.478-2.98-.478-2.98zm-7.305 2.92c-.869-.17-1.215-.753-1.26-.853-.043-.101-.289-.57-.158-1.367.375-1.195 1.446-1.281 1.446-1.281h1.07V8.936l.912.014.001 4.782H5.486zm3.443-.013c-.898-.227-.94-.855-.94-.855v-2.518l.94-.015v2.262c.057.241.363.286.363.286h.953v-2.533h1v3.373H8.928zm5.592-6.724c0-.435-.367-1.745-1.73-1.745-1.364 0-1.547 1.236-1.547 2.11 0 .834.073 1.999 1.767 1.96 1.696-.035 1.51-1.888 1.51-2.325z" fill="currentColor" /></svg></span>;
});
BaiduFill.displayName = "BaiduFill";
export default BaiduFill;