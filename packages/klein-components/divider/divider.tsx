import React from 'react';
import classNames from 'classnames';
import { ConfigContext } from '../config-provider/context';

export interface DividerProps {
  /** 分割线方向 */
  direction?: string;
  /** 自定义类名 */
  className?: string;
  /** 自定义样式 */
  style?: React.CSSProperties;
  /** 是否是虚线 */
  dashed?: boolean;
  /** 长度 */
  length?: number;
  /** 控制上下或者左右间距 */
  spacing?: number;
  prefix?: string;
}

const Divider = React.forwardRef<HTMLDivElement, DividerProps>((props, ref) => {
  const {
    prefix: customizePrefix,
    className,
    direction,
    dashed,
    spacing,
    style,
  } = props;
  const { getPrefixClassName } = React.useContext(ConfigContext);
  const dividerCls = getPrefixClassName('divider', customizePrefix);
  const cls = classNames(dividerCls, `${dividerCls}-${direction}`, className, {
    [`${dividerCls}-dashed`]: dashed,
  });
  const endPorps: {
    className?: string;
    style?: object;
  } = {
    className: cls,
    style,
  };
  const dividerStyle: {
    width?: number;
    height?: number;
    marginLeft?: number;
    marginRight?: number;
    marginTop?: number;
    marginBottom?: number;
  } = {};

  if ('length' in props) {
    if (direction === 'row') {
      dividerStyle.width = props.length;
      dividerStyle.marginTop = props.spacing;
      dividerStyle.marginBottom = props.spacing;
    } else {
      dividerStyle.height = props.length;
      dividerStyle.marginLeft = props.spacing;
      dividerStyle.marginRight = props.spacing;
    }
    endPorps.style = { ...dividerStyle, ...style };
  }

  return <div ref={ref} {...endPorps} />;
});

Divider.defaultProps = {
  direction: 'row',
};

export default Divider;
