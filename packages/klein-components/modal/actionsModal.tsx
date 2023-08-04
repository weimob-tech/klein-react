import React from 'react';
import classNames from 'classnames';
import type { ModalProps, Action } from './modal';
import { RcDialog } from '../components';
import { ConfigContext } from '../config-provider/context';
import { getCurIcon } from '../utils/getTypedIcon';
import Icons from '../icon';
import Button from '../button';

const { CloseLine } = Icons;

export interface ActionModalProps extends ModalProps {
  type: Action;
  classname?: string;
  width?: number;
  /** 提示内容 */
  content?: React.ReactNode;
  /** 自定义图标 */
  icon?: React.ReactNode;
  /** 点击确定回调 */
  onOk?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  /** 点击遮罩层或右上角叉或取消按钮的回调 */
  onCancel?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  closeModal?: () => void;
}

const defaultCloseIcon = <CloseLine />;

const ActionModal: React.FC<ActionModalProps> = (props) => {
  const {
    type,
    title,
    prefixCls: customPrefixCls,
    classname,
    centered,
    contentCentered,
    content,
    footer,
    wrapClassName,
    cancelButtonProps,
    okButtonProps,
    cancelText,
    okText,
    icon,
    width,
    size,
    closeModal,
    onCancel,
    onOk,
    closeIcon,
    confirmLoading,
    ...reset
  } = props;

  const { getPrefixClassName } = React.useContext(ConfigContext);
  const actionModalPrefixCls = getPrefixClassName('modal', customPrefixCls);
  const actionModalCls = `${actionModalPrefixCls}-action`;

  const [okLoading, setOkloading] = React.useState<boolean>(!!confirmLoading);
  const [cancelLoading, setCancelLoading] = React.useState<boolean>(false);

  if (typeof confirmLoading !== 'undefined' && confirmLoading !== okLoading) {
    setOkloading(confirmLoading);
  }

  const endCls = classNames(classname, actionModalCls, {
    [`${actionModalPrefixCls}-center`]: contentCentered,
  });

  const wrapperCls = classNames(wrapClassName, {
    [`${actionModalPrefixCls}-centered`]: centered,
  });

  const innerSizeMap = {
    large: 480,
    medium: 400,
    small: 320,
  };

  const curIcon =
    typeof icon !== 'undefined' ? icon : getCurIcon(Icons, type, true);

  const handleOKCancelReturn = (result: any, actionType: string) => {
    const curSetHandler = actionType === 'ok' ? setOkloading : setCancelLoading;
    curSetHandler(true);
    Promise.resolve(result).then(
      () => {
        curSetHandler(false);
        closeModal?.();
      },
      (e: Error) => {
        curSetHandler(false);
        console.error(e);
      },
    );
  };

  const onModalClose = (e: React.MouseEvent<HTMLButtonElement>) => {
    const cancelReturn = onCancel?.(e);
    handleOKCancelReturn(cancelReturn, 'cancel');
  };

  const onModalOk = (e: React.MouseEvent<HTMLButtonElement>) => {
    const okReturn = onOk?.(e);
    handleOKCancelReturn(okReturn, 'ok');
  };

  const renderFooter = () => (
    <>
      <Button
        loading={cancelLoading}
        onClick={onModalClose}
        {...cancelButtonProps}
      >
        {cancelText || '取消'}
      </Button>
      <Button
        loading={okLoading}
        type="primary"
        onClick={onModalOk}
        {...okButtonProps}
      >
        {okText || '确定'}
      </Button>
    </>
  );

  const endProps = {
    prefixCls: actionModalPrefixCls,
    title: '',
    closable: false,
    closeIcon: closeIcon || defaultCloseIcon,
    onClose: onModalClose,
    transitionName: `${actionModalPrefixCls}-zoom`,
    maskTransitionName: `${actionModalPrefixCls}-fade`,
    className: endCls,
    footer: footer !== undefined ? footer : renderFooter(),
    wrapClassName: wrapperCls,
    width: width || innerSizeMap[size!],
    ...reset,
  };

  return (
    <RcDialog {...endProps}>
      <div className={`${actionModalPrefixCls}-child`}>
        {curIcon ? (
          <span
            className={`${actionModalPrefixCls}-child-${type} ${actionModalPrefixCls}-child-icon`}
          >
            {curIcon}
          </span>
        ) : null}
        <div className={`${actionModalPrefixCls}-child-wrapper`}>
          {title && (
            <div className={`${actionModalPrefixCls}-child-header`}>
              {title}
            </div>
          )}
          <div className={`${actionModalPrefixCls}-child-body`}>{content}</div>
        </div>
      </div>
    </RcDialog>
  );
};

ActionModal.defaultProps = {
  size: 'medium',
  centered: true,
  cancelText: '取消',
};

export default ActionModal;
