import React from 'react';
import cx from 'classnames';

import { ConfigContext } from '../config-provider/context';

export interface GroupProps {
  /** 是否用紧凑模式 */
  compact?: boolean;
  /** Input.Group 中所有的 Input 的大小 */
  size?: 'large' | 'default' | 'small';
  /** 自定义className */
  className?: string;
  /** 自定义style */
  style?: React.CSSProperties;
  children?: React.ReactNode;
  onMouseEnter?: React.MouseEventHandler<HTMLSpanElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLSpanElement>;
  onFocus?: React.FocusEventHandler<HTMLSpanElement>;
  onBlur?: React.FocusEventHandler<HTMLSpanElement>;
}

const Group: React.FC<GroupProps> = React.forwardRef((props, ref) => {
  const { className, style } = props;
  const { getPrefixClassName } = React.useContext(ConfigContext);
  const inputCls = getPrefixClassName('input-group-cl');
  const cls = cx(
    inputCls,
    {
      [`${inputCls}-lg`]: props.size === 'large',
      [`${inputCls}-sm`]: props.size === 'small',
      [`${inputCls}-compact`]: props.compact,
    },
    className,
  );
  return (
    <div
      className={cls}
      style={style}
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
      onFocus={props.onFocus}
      onBlur={props.onBlur}
    >
      {props.children}
    </div>
  );
});
Group.displayName = 'Group';
Group.defaultProps = {
  compact: false,
  size: 'default',
};

export default Group;
