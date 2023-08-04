import React, { useState } from 'react';
import cx from 'classnames';
import CSSMotion from '../components/rc-motion';
import { Icons } from '../components';
import { getCurIcon } from '../utils/getTypedIcon';
import { ConfigContext } from '../config-provider/context';

const { CloseLine } = Icons;
export interface AlertProps {
  /** 警告提示的样式，支持四种样式 */
  type?: 'success' | 'info' | 'warning' | 'error';
  /** 警告提示内容 */
  message?: React.ReactNode;
  /** 警告提示辅助内容 */
  description?: React.ReactNode;
  /** 是否显示关闭按钮 */
  closable?: boolean;
  /** 自定义关闭按钮 */
  closeText?: React.ReactNode;
  /** 是否显示icon */
  showIcon?: boolean;
  /** 自定义图标，showIcon 为 true 时有效 */
  icon?: React.ReactNode;
  /** 操作按钮 */
  action?: React.ReactNode;
  /** 自定义className */
  className?: string;
  /** 自定义style */
  style?: React.CSSProperties;
  /** 关闭时的回调函数 */
  onClose?: React.MouseEventHandler;
}

const Alert: React.FC<AlertProps> = (props) => {
  const {
    type,
    message,
    description,
    closable,
    closeText,
    showIcon,
    icon,
    action,
    className = '',
    style,
    onClose,
    ...resetProps
  } = props;

  // state
  const [isClosed, setIsClosed] = useState(false);

  const ref = React.useRef<HTMLElement>();
  const { getPrefixClassName } = React.useContext(ConfigContext);
  const alertCls = getPrefixClassName('alert');

  // method
  const handleClose = (evt: React.MouseEvent) => {
    setIsClosed(true);
    onClose?.(evt);
  };

  // render
  const renderIconNode = (iconType: string) => {
    const curIcon = getCurIcon(Icons, iconType, true);
    return (
      <span className={`${alertCls}-icon`}>
        {icon || (
          <span
            className={`${alertCls}-icon-${
              description ? 'desc-svg' : 'msg-svg'
            }`}
          >
            {curIcon}
          </span>
        )}
      </span>
    );
  };

  const renderActionNode = () => (
    <span className={`${alertCls}-action`}>{action}</span>
  );

  const renderCloseNode = () => (
    <span onClick={handleClose} className={`${alertCls}-close`}>
      {closeText ? (
        <span className={`${alertCls}-close-text`}>{closeText}</span>
      ) : (
        // '关闭'
        <CloseLine />
      )}
    </span>
  );

  return (
    <CSSMotion
      visible={!isClosed}
      motionName={`${alertCls}-motion`}
      motionAppear={false}
      motionEnter={false}
      onLeaveStart={({ offsetHeight }) => ({ maxHeight: offsetHeight })}
    >
      {(motion) => (
        <div
          {...resetProps}
          ref={ref as any}
          className={cx(
            alertCls,
            `${alertCls}-${type}`,
            !!description && `${alertCls}-with-description`,
            className,
            motion.className,
          )}
          style={{ ...style, ...motion.style }}
          role="alert"
        >
          <div className={`${alertCls}-content`}>
            {showIcon ? renderIconNode(type!) : null}
            <div className={`${alertCls}-message`}>
              {message}
              {description && (
                <div className={`${alertCls}-description`}>{description}</div>
              )}
            </div>
          </div>

          {action ? renderActionNode() : null}
          {closable ? renderCloseNode() : null}
        </div>
      )}
    </CSSMotion>
  );
};
Alert.displayName = 'Alert';
Alert.defaultProps = {
  type: 'info',
  showIcon: false,
  closable: false,
};

export default Alert;
