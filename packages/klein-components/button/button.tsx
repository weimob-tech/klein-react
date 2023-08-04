import React, { useRef } from 'react';
import classNames from 'classnames';
import Ripple from '../utils/Ripple';
import { ConfigContext } from '../config-provider/context';
import Icon from '../icon';

const { LoadingLine } = Icon;

export interface OutputButtonProps {
  /** 按钮类型 */
  type?: 'default' | 'primary' | 'dashed' | 'link';
  /** 按钮大小 */
  size?: 'large' | 'medium' | 'small';
  /** 禁用状态控制 */
  disabled?: boolean;
  /** 加载状态控制 */
  loading?: boolean;
  /** 如果设置href属性将会使用a标签 */
  href?: string;
  /** 自定义className */
  className?: string;
  /** 原生button type */
  htmlType?: 'submit' | 'reset' | 'button';
  /** 设置危险按钮 */
  danger?: boolean;
  /** 设置成功按钮（目前只适用于ghost幽灵按钮） */
  success?: boolean;
  /** 设置警告按钮（目前只适用于ghost幽灵按钮） */
  warning?: boolean;
  /** 是否为幽灵按钮 */
  ghost?: boolean;
  /** 设置按钮的图标 */
  icon?: React.ReactNode;
  children?: React.ReactNode;
  /** 点击回调事件 */
  onClick?: React.MouseEventHandler<HTMLElement>;
}

export type PrimitiveButtonProps = Omit<
  React.ButtonHTMLAttributes<any>,
  'type' | 'disabled' | 'onClick'
>;

export type PrimitiveAchorProps = Omit<
  React.AnchorHTMLAttributes<any>,
  'type' | 'href'
>;

export type ButtonProps = Partial<
  OutputButtonProps & PrimitiveButtonProps & PrimitiveAchorProps
>;

const Button = React.forwardRef<unknown, ButtonProps>((props, ref) => {
  const { getPrefixClassName, size } = React.useContext(ConfigContext);
  const btnRef = (ref as any) || useRef<HTMLElement>(null);

  const {
    className,
    type,
    children,
    size: customSize,
    htmlType,
    href,
    // disabled,
    loading,
    onClick,
    danger,
    warning,
    success,
    ghost,
    icon,
    ...reset
  } = props;
  const btnCls = getPrefixClassName('btn');
  const endSize = customSize || size;

  const endCls = classNames(
    btnCls,
    {
      [`${btnCls}-${type}`]: type,
      [`${btnCls}-a`]: href,
      [`${btnCls}-${endSize}`]: endSize,
      [`${btnCls}-danger`]: danger,
      [`${btnCls}-success`]: success,
      [`${btnCls}-warning`]: warning,
      [`${btnCls}-ghost`]: ghost,
      [`${btnCls}-loading`]: loading,
    },
    className,
  );

  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>,
  ) => {
    if (type === 'link' && !href) {
      e.preventDefault();
    }
    if (props.disabled || loading) return;
    onClick?.(e);
  };

  const renderDom = () => {
    let btnNode: React.ReactNode;
    const comProps = {
      ref: btnRef,
      className: endCls,
      onClick: handleClick,
      ...reset,
    };
    let iconNode: React.ReactNode = null;
    let showIcon: boolean = false;
    if (loading || icon) {
      iconNode = icon || <LoadingLine />;
      showIcon = true;
    }
    btnNode = (
      /* eslint-disable react/button-has-type */
      <Ripple>
        <button type={htmlType} {...comProps}>
          {showIcon ? (
            <span className={`${btnCls}-icon`}>{iconNode}</span>
          ) : null}
          <span>{children}</span>
        </button>
      </Ripple>
    );

    if (href || type === 'link') {
      btnNode = (
        <a href={href || ''} {...comProps}>
          {iconNode}
          <span>{children}</span>
        </a>
      );
    }

    return <>{btnNode}</>;
  };

  return <>{renderDom()}</>;
});
Button.displayName = 'Button';
Button.defaultProps = {
  type: 'default',
  htmlType: 'button',
  danger: false,
  ghost: false,
};

export default Button;
