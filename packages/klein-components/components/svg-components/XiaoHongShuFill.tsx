import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const XiaoHongShuFill = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-xiaoHongShuFill`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M3.5 1.5a2 2 0 00-2 2v9a2 2 0 002 2h9a2 2 0 002-2v-9a2 2 0 00-2-2h-9zm.875 4.37v3.638c-.074.405-.254.608-.539.608 0 0-.223.002-.284 0-.316.003-.49-.22-.522-.667h.527V5.87h.818zM3.03 6.958c.016.232-.004.627-.06 1.183a3.607 3.607 0 01-.525 1.55L2 8.872c.083-.264.141-.57.174-.918.032-.348.039-.68.02-.997h.836zm2.731 1.03c.03.368.086.663.17.885l-.444.817c-.29-.369-.468-.875-.533-1.519-.034-.336-.05-.74-.048-1.213h.832c-.014.318-.006.66.023 1.03zm1.333-1.024c-.03.06.014.09.129.09l.048-.096h.784l-.68 1.346c-.023.044.01.083.043.083l.482.007-.363.653-.955-.005c-.14-.026-.2-.116-.195-.218a.615.615 0 01.095-.258l.422-.858-.593-.006c-.141-.024-.174-.125-.168-.229a.714.714 0 01.064-.237l.677-1.366h.784l-.574 1.094zm2.934-.006h-.513v2.38h.779v.783H7.547l.387-.784h.774V6.958h-.523v-.832h1.843v.832zm-3.61 2.345l1.134.005-.43.813-1.059-.005c-.052 0-.103-.029-.15-.087l.406-.779c.031.036.064.053.098.053zm5.472-3.177l.388.003c.437.035.835.344.835.89v.553l.168.003a.796.796 0 01.717.7L14 9.5a.686.686 0 01-.6.616l-.357.002c-.351.002-.558-.226-.621-.684h.759l-.004-.894a.195.195 0 00-.143-.15l-1.144-.005v1.736h-.798V8.385h-.798v-.813h.798V6.94h-.503v-.813h.503v-.251h.798v.251zm0 1.446V6.94h.293c.053.003.1.04.114.092l.004.541h-.411zm2.099-1.05c0 .197-.145.361-.333.392l-.46.005.003-.446a.399.399 0 01.393-.347c.218 0 .397.18.397.397z" fill="currentColor" /></svg></span>;
});
XiaoHongShuFill.displayName = "XiaoHongShuFill";
export default XiaoHongShuFill;