import React from 'react';
import classNames from 'classnames';
import Button from '../button';
import { Icons, RcNotification } from '../components';
import { getCurIcon } from '../utils/getTypedIcon';
import { getPrefixClassName } from '../config-provider/context';

import type { NotificationInstance } from '../components/rc-notification/Notification';

const { CloseLine } = Icons;

export interface NotificationPartialProps {
  /** 通知消息标题 */
  message: string;
  /** 通知内容 */
  description: string;
  /** 自定义样式类名 */
  className?: string;
  /** 显示底部按钮 */
  showBtns?: boolean;
  /** 自定义按钮 */
  btn?: React.ReactNode;
  /** 是否显示左侧颜色边框 */
  showColorBorder?: boolean;
  /** 自定义通知弹出最外层内联样式 */
  insStyle?: Object;
  /** 自定义container内联样式 */
  style?: object;
  /** 当前通知唯一标志 */
  key?: string;
  // /** 弹窗距离挂载点上部距离 */
  // top?: number;
  // /** 弹窗距离挂载点右侧距离 */
  // right?: number;
  /** 弹窗弹出的位置 */
  placement: 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';
  /** 关闭通知的回调 */
  cancel?: () => void;
  /** 确认的回调 */
  confirm?: () => void;
}

export interface NotificationGlobalProps {
  /** 自动关闭时间, 默认为4.5s, 为null则消息通知不会自动消失 */
  duration?: number;
  /** 配置渲染节点的输出位置 */
  getContainer?: () => HTMLElement;
  /** 定义类名前缀 */
  prefix?: string;
}

export type NotificationProps = NotificationPartialProps &
  NotificationGlobalProps;

export type NotificationStatusProps = NotificationProps & {
  type?: 'success' | 'warning' | 'error' | 'info';
};

let prefixCls = getPrefixClassName('notification');
const defaultShowBtnsNotiKey = 'isShowBtns';
const notifyTypes = ['success', 'info', 'warning', 'error'];

const getRcNotiInsStyle = (placement: string) => {
  let style: {
    top?: number;
    right?: number;
    bottom?: number;
    left?: number;
  } = {};
  const defaultDistance = 24;
  switch (placement) {
    case 'topLeft':
      style = {
        top: defaultDistance,
        left: defaultDistance,
      };
      break;
    case 'topRight':
      style = {
        top: defaultDistance,
        right: defaultDistance,
      };
      break;
    case 'bottomRight':
      style = {
        bottom: defaultDistance,
        right: defaultDistance,
      };
      break;
    case 'bottomLeft':
      style = {
        bottom: defaultDistance,
        left: defaultDistance,
      };
      break;
    default:
      break;
  }
  return style;
};

const getPlacementCls = (
  classname: string,
  customPlacement: NotificationPartialProps['placement'],
) => {
  const placement = customPlacement || Notification.defaultProps.placement;
  const cls = `${classname}-${placement}`;
  return {
    cls,
    placement,
  };
};

const getNotificationIns = (
  props: NotificationProps,
  callback: (notificationIns: NotificationInstance) => void,
) => {
  const { prefix: customPrefix, placement: customPlacement, insStyle } = props;
  prefixCls = getPrefixClassName(
    'notification',
    customPrefix,
    Notification.globalProps.prefix,
  );
  const { cls, placement } = getPlacementCls(prefixCls, customPlacement);
  const notificationIns = Notification.instanceMap[cls];
  const rRcNotiInsStyle = { ...getRcNotiInsStyle(placement), ...insStyle };
  if (notificationIns) {
    return callback(notificationIns);
  }
  RcNotification.newInstance(
    {
      prefixCls,
      getContainer: props.getContainer || Notification.globalProps.getContainer,
      style: rRcNotiInsStyle,
      // className: cls
    },
    (notification: NotificationInstance) => {
      Notification.instanceMap[cls] = notification;
      callback(notification);
    },
  );
};

const handleOperation = (
  props: NotificationProps,
  operKey: 'confirm' | 'cancel',
) => {
  const { key } = props;
  if (!key) return;
  props[operKey as 'confirm' | 'cancel']?.();
  NotificationApi.close(key || defaultShowBtnsNotiKey);
};

const NotiContent = (props: NotificationStatusProps) => {
  const { type, showBtns, btn, showColorBorder } = props;
  const contentPrefix = `${prefixCls}-content`;
  const colorBorderPrefixCls = `${prefixCls}-color-border`;

  let statusCls = '';
  if (type) {
    statusCls = `${prefixCls}-color-${type}`;
  }

  const contentStatusCls = classNames(
    `${contentPrefix}-status`,
    `${statusCls}`,
    {
      [`${contentPrefix}-reset`]: showColorBorder,
    },
  );

  const CurIcon = getCurIcon(Icons, type as string, true);

  return (
    <>
      {showColorBorder ? (
        <div className={`${colorBorderPrefixCls} ${statusCls}`} />
      ) : null}
      <div className={`${contentPrefix}`}>
        {type ? <div className={contentStatusCls}>{CurIcon}</div> : null}
        <div
          style={
            type
              ? {
                  marginLeft: 31,
                }
              : undefined
          }
        >
          <div className={`${contentPrefix}-message`}>{props.message}</div>
          <div className={`${contentPrefix}-desc`}>{props.description}</div>
        </div>
        {showBtns ? (
          <div className={`${contentPrefix}-btns`}>
            {btn || (
              <>
                <Button
                  className={`${contentPrefix}-btns-cancel`}
                  size="small"
                  onClick={() => handleOperation(props, 'cancel')}
                >
                  取消
                </Button>
                <Button
                  type="primary"
                  size="small"
                  onClick={() => handleOperation(props, 'confirm')}
                >
                  确定
                </Button>
              </>
            )}
          </div>
        ) : null}
      </div>
    </>
  );
};

const getNotiKey = (props: NotificationProps) => {
  if (props.key) {
    return props.key;
  }
  if (props.showBtns && !props.key) {
    return defaultShowBtnsNotiKey;
  }
};

const commonNotice = (props: NotificationProps) => {
  let dur = Notification.defaultProps.duration;
  const { cls } = getPlacementCls(prefixCls, props.placement);
  const className = classNames(props.className, cls);
  if ('duration' in Notification.globalProps) {
    dur = Notification.globalProps.duration;
  }
  if ('duration' in props) {
    dur = props.duration;
  }
  getNotificationIns(props, (notification: NotificationInstance) => {
    notification.notice({
      content: NotiContent(props),
      closeIcon: <CloseLine />,
      closable: true,
      onClose() {
        handleOperation(props, 'cancel');
      },
      key: getNotiKey(props),
      duration: dur,
      className,
      style: props.style,
    });
  });
};

const defaultProps: Partial<NotificationProps> = {
  duration: 4.5,
  style: {
    right: 24,
    top: 24,
  },
  placement: 'topRight',
};

const Notification: {
  defaultProps: Partial<NotificationProps>;
  globalProps: NotificationGlobalProps;
  instanceMap: Record<string, NotificationInstance | null>;
} = {
  defaultProps,
  globalProps: {},
  instanceMap: {},
};

const NotificationApi: Record<string, any> = {
  config: (globalProps: NotificationGlobalProps) => {
    Notification.globalProps = globalProps;
  },
  open: (props: NotificationStatusProps) => commonNotice(props),
  close: (key: string) => {
    if (!key) return;
    Object.keys(Notification.instanceMap).forEach((insKey) => {
      const ins = Notification.instanceMap[insKey];
      ins?.removeNotice(key);
    });
  },
  destroy: () => {
    Object.keys(Notification.instanceMap).forEach((insKey) => {
      const ins = Notification.instanceMap[insKey];
      ins?.destroy();
      Notification.instanceMap[insKey] = null;
    });
  },
};

notifyTypes.forEach((type) => {
  NotificationApi[type] = (args: NotificationStatusProps) => {
    NotificationApi.open({
      ...args,
      type,
    });
  };
});

// 欺骗一下doc-typescript，自动生成md文档
const NotificationDoczCheat: React.FC<NotificationPartialProps> = () => {
  return null;
};
NotificationDoczCheat.defaultProps = defaultProps;
export { NotificationDoczCheat };

export default NotificationApi;
