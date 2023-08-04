import React, { useMemo, useState, useEffect } from 'react';
import type { TooltipProps } from '../tooltip';
import Tooltip from '../tooltip';
import { ConfigContext } from '../config-provider/context';
import type { ButtonProps } from '../button/button';
import Button from '../button/button';

export interface PopconfirmProps extends TooltipProps {
  /** 确认框弹出位置 */
  placement?: TooltipProps['placement'];
  /** 确认框的标题 */
  title?: React.ReactNode;
  /** 确认框的描述 */
  content?: React.ReactNode;
  /** 背景颜色 */
  color?: string;
  /** cancel 按钮 props @link="[ButtonProps](/components/button)" */
  cancelButtonProps?: ButtonProps;
  /** 取消按钮文字 */
  cancelText?: string;
  /** ok 按钮 props @link="[ButtonProps](/components/button)" */
  okButtonProps?: any;
  /** 确认按钮文字 */
  okText?: string;
  /** 自定义弹出气泡 Icon 图标 */
  icon?: React.ReactNode;
  /** 点击取消的回调 */
  onCancel?: React.MouseEventHandler<HTMLElement>;
  /** 点击确认的回调 */
  onConfirm?: React.MouseEventHandler<HTMLElement>;
  /** 是否显示气泡确认框 */
  visible?: boolean;
  /** 自定义宽度 */
  width?: number;
  children?: React.ReactNode;
}

const Popconfirm = React.forwardRef<unknown, PopconfirmProps>((props, ref) => {
  const {
    title,
    content,
    color,
    cancelText,
    okText,
    icon,
    visible,
    width,
    onConfirm,
    onCancel,
    okButtonProps,
    cancelButtonProps,
    overlayInnerStyle,
    ...reset
  } = props;
  const { getPrefixClassName } = React.useContext(ConfigContext);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const popconfirmPrefix = getPrefixClassName('popconfirm');
  const [isShow, setIsShow] = useState(visible);

  if (visible !== undefined && visible !== isShow) {
    setIsShow(visible);
    if (!visible) setConfirmLoading(false);
  }
  useEffect(() => {
    if (okButtonProps?.loading !== undefined) {
      setConfirmLoading(okButtonProps.loading);
    }
  }, [okButtonProps?.loading]);
  const popconfirmContent = useMemo(
    () => (
      <div
        style={
          typeof width !== 'undefined'
            ? { width, maxWidth: 'none', backgroundColor: color }
            : { backgroundColor: color }
        }
        className={`${popconfirmPrefix}-wrapper ${title ? 'with-title' : ''}`}
      >
        {icon && <div className={`${popconfirmPrefix}-icon`}>{icon}</div>}
        <div className={icon ? `${popconfirmPrefix}-iconExit` : ''}>
          {title && <div className={`${popconfirmPrefix}-title`}>{title}</div>}
          {content && (
            <div className={`${popconfirmPrefix}-content`}>{content}</div>
          )}
          <div className={`${popconfirmPrefix}-footer`}>
            <Button
              {...cancelButtonProps}
              style={{
                width: '68px',
                height: '28px',
                paddingTop: '0',
                paddingBottom: '0',
                ...cancelButtonProps?.style,
              }}
              className="btn-cancel"
              onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                setIsShow(false);
                onCancel?.(e);
              }}
            >
              {cancelText}
            </Button>
            <Button
              type="primary"
              {...okButtonProps}
              style={{
                width: '68px',
                height: '28px',
                paddingTop: '0',
                paddingBottom: '0',
                ...okButtonProps?.style,
              }}
              loading={confirmLoading}
              onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                const result = onConfirm?.(e);
                if (visible === undefined) {
                  if (result && typeof (result as any).then === 'function') {
                    setConfirmLoading(true);
                    (result as any)
                      .then(() => {
                        setIsShow(false);
                      })
                      .finally(() => {
                        setConfirmLoading(false);
                      });
                  } else {
                    setIsShow(false);
                  }
                }
              }}
            >
              {okText}
            </Button>
          </div>
        </div>
      </div>
    ),
    [
      width,
      title,
      content,
      icon,
      cancelText,
      okText,
      onCancel,
      onConfirm,
      visible,
      confirmLoading,
      color,
      popconfirmPrefix,
    ],
  );

  return (
    <Tooltip
      ref={ref}
      visible={isShow}
      overlayClassName={popconfirmPrefix}
      color={color}
      trigger={['click']}
      overlayInnerStyle={{
        maxWidth: 'none',
        ...overlayInnerStyle,
      }}
      onVisibleChange={(status: boolean) => {
        if (typeof visible === 'undefined') {
          setIsShow(status);
        }
      }}
      title={popconfirmContent}
      {...reset}
    />
  );
});
Popconfirm.defaultProps = {
  cancelText: '取消',
  okText: '确定',
  color: '#ffffff',
};
export default Popconfirm;
