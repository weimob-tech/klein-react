import React from 'react';
import classNames from 'classnames';
import { RcDialog } from '../components';
import { ConfigContext } from '../config-provider/context';
import Icon from '../icon';
import type { ButtonProps } from '../button';
import Button from '../button';

const { CloseLine } = Icon;

export interface ModalProps {
  /** 对话框外层容器的类名 */
  wrapClassName?: string;
  /** 关闭Modal后的回调 */
  afterClose?: () => void;
  /** 内置两种弹窗样式，expansion使用于弹窗内容较多的情况 */
  modalStyle?: 'default' | 'expansion';
  /** Modal body的样式 */
  bodyStyle?: React.CSSProperties;
  /** 取消按钮文字 */
  cancelText?: string;
  /** 取消按钮props @link="[ButtonProps](/components/button)" */
  cancelButtonProps?: ButtonProps;
  /** 是否垂直居中展示 */
  centered?: boolean;
  /** 内容是否居中展示 */
  contentCentered?: boolean;
  /** 是否展示关闭icon */
  closable?: boolean;
  /** 自定义关闭图标 */
  closeIcon?: React.ReactNode;
  /** 确定按钮是否loading */
  confirmLoading?: boolean;
  /** 关闭时销毁 Modal 里的子元素 */
  destroyOnClose?: boolean;
  /** 底部内容，当不需要默认底部按钮时，可以设为 footer={null} */
  footer?: React.ReactNode;
  /** 指定 Modal 挂载的 HTML 节点, false 为挂载在当前 dom */
  getContainer?: HTMLElement | (() => HTMLElement) | string | boolean;
  /** 是否支持键盘esc关闭 */
  keyboard?: boolean;
  /** 点击遮罩是否关闭 */
  maskClosable?: boolean;
  /** 遮罩样式 */
  maskStyle?: React.CSSProperties;
  /** 是否展示遮罩 */
  mask?: boolean;
  /** 确认按钮文字 */
  okText?: string;
  /** 确定按钮props @link="[ButtonProps](/components/button)" */
  okButtonProps?: ButtonProps;
  /** 确认按钮类型 */
  okType?: string;
  /** 标题 */
  title?: React.ReactNode;
  /** 对话框是否可见 */
  visible?: boolean;
  /** 宽度 */
  width?: string | number;
  /** 提供的三种默认的弹窗尺寸 */
  size?: 'large' | 'medium' | 'small';
  /** 弹窗是否存在最大高度 */
  maxHeight?: boolean;
  /** 设置弹窗到顶部的距离 */
  top?: number;
  /** Modal的z-index */
  zIndex?: number;
  /** 点击确定回调 */
  onOk?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  /** 点击遮罩层或右上角叉或取消按钮的回调 */
  onCancel?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = (props) => {
  const {
    children,
    prefixCls: customPrefixCls,
    closeIcon,
    footer,
    title,
    contentCentered,
    centered,
    wrapClassName,
    cancelButtonProps,
    okButtonProps,
    cancelText,
    okText,
    onCancel,
    onOk,
    getContainer,
    width,
    size,
    modalStyle,
    confirmLoading,
    maxHeight,
    closable,
    ...resetProps
  } = props;

  const { getPrefixClassName, getPopupContainer } = React.useContext(
    ConfigContext,
  );
  const modalPrefixCls = getPrefixClassName('modal', customPrefixCls);
  const innerSizeMap = {
    large: 480,
    medium: 400,
    small: 320,
  };

  const onModalClose = (e: React.MouseEvent<HTMLButtonElement>) => {
    onCancel?.(e);
  };

  const onModalOk = (e: React.MouseEvent<HTMLButtonElement>) => {
    onOk?.(e);
  };

  const renderFooter = () => (
    <>
      <Button onClick={onModalClose} {...cancelButtonProps}>
        {cancelText || '取消'}
      </Button>
      <Button
        type="primary"
        onClick={onModalOk}
        loading={confirmLoading}
        {...okButtonProps}
      >
        {okText || '确定'}
      </Button>
    </>
  );

  const renderModal = () => {
    const defaultCloseIcon = <CloseLine />;
    const endCls = classNames(wrapClassName, {
      [`${modalPrefixCls}-contentCentered`]: !!contentCentered,
      [`${modalPrefixCls}-noTitle`]: !title,
      [`${modalPrefixCls}-noCloseIcon`]: !closable,
      [`${modalPrefixCls}-noFooter`]: footer === null,
      [`${modalPrefixCls}-noBody`]: !children,
      [`${modalPrefixCls}-centered`]: !!centered,
      [`${modalPrefixCls}-expansion`]: modalStyle === 'expansion',
      [`${modalPrefixCls}-maxHeight`]: maxHeight,
    });

    const endProps = {
      prefixCls: modalPrefixCls,
      closeIcon: closeIcon || defaultCloseIcon,
      footer: footer !== undefined ? footer : renderFooter(),
      onClose: onModalClose,
      transitionName: `${modalPrefixCls}-zoom`,
      maskTransitionName: `${modalPrefixCls}-fade`,
      wrapClassName: endCls,
      getContainer: getContainer || getPopupContainer,
      title,
      closable,
      width: width || innerSizeMap[size!],
      ...resetProps,
    };

    return <RcDialog {...endProps}>{children}</RcDialog>;
  };

  return <>{renderModal()}</>;
};

Modal.defaultProps = {
  cancelText: '取消',
  centered: true,
  closable: true,
  destroyOnClose: false,
  size: 'medium',
  zIndex: 1000,
  modalStyle: 'default',
  maxHeight: false,
};

export default Modal;
