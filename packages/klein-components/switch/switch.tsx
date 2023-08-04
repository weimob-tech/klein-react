import React from 'react';
import cx from 'classnames';
import Icons from '../icon';
import { RcSwitch } from '../components';
import { ConfigContext } from '../config-provider/context';

const { LoadingLine } = Icons;

export interface SwitchProps {
  /** 开关大小 */
  size?: 'large' | 'medium' | 'small';
  /** 自定义className */
  className?: string;
  /** 自定义style */
  style?: React.CSSProperties;
  /** 指定当前选中状态 */
  checked?: boolean;
  /** 初始状态 */
  defaultChecked?: boolean;
  /** 选中时显示的内容 */
  checkedChildren?: React.ReactNode;
  /** 未选中时显示的内容 */
  unCheckedChildren?: React.ReactNode;
  /** 是否禁用 */
  disabled?: boolean;
  /** 控制加载状态 */
  loading?: boolean;
  /** 变化时的回调事件 */
  onChange?: (checked: boolean, event: MouseEvent) => void;
}

const Switch: React.FC<SwitchProps> = React.forwardRef<unknown, SwitchProps>(
  ({ disabled, loading, size, className, ...otherProps }, ref) => {
    const { getPrefixClassName } = React.useContext(ConfigContext);
    const switchCls = getPrefixClassName('switch');

    // render
    const loadingIcon = (
      <div className={`${switchCls}-handle`}>{loading && <LoadingLine />}</div>
    );

    return (
      <RcSwitch
        {...otherProps}
        disabled={disabled || loading}
        prefixCls={switchCls}
        size={size}
        ref={ref}
        loadingIcon={loadingIcon}
        className={cx(
          size === 'large' && `${switchCls}-lg`,
          size === 'small' && `${switchCls}-sm`,
          loading && `${switchCls}-loading`,
          className,
        )}
      />
    );
  },
);
Switch.displayName = 'Switch';
Switch.defaultProps = {
  size: 'medium',
  disabled: false,
  defaultChecked: false,
  loading: false,
};
export default Switch;
