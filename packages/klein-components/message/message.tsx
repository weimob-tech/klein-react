import React from 'react';
import classNames from 'classnames';
import { Icons, RcNotification } from '../components';
import { getCurIcon } from '../utils/getTypedIcon';
import { getPrefixClassName } from '../config-provider/context';
import type { NotificationInstance as MessageInstance } from '../components/rc-notification/Notification';

export interface MessageConfigProps {
  /** 消息内容 */
  content: string;
  /** 自定义样式类名 */
  className?: string;
  /** 自动关闭的延时，单位秒。设为 0 时不自动关闭 */
  duration?: number;
  /** 自定义icon */
  icon?: React.ReactNode;
  /** 当前message的唯一标志 */
  key?: string;
  /** 自定义内联样式 */
  style?: React.CSSProperties;
  /** 控制z-index */
  zIndex?: number;
  // /** 点击 message 时触发的回调函数 */
  // onClick?: () => void
  /** message关闭时的回调函数 */
  onClose?: () => void;
}

export interface MessageGlobalProps {
  /** 自动关闭时间, 默认为4.5s, 为null则消息通知不会自动消失 */
  duration?: number;
  /** 配置渲染节点的输出位置 */
  getContainer?: () => HTMLElement;
  /** 定义类名前缀 */
  prefix?: string;
  /** 配置最大显示数, 超过限制时，最早的消息会被自动关闭 */
  maxCount?: number;
}

export type MessageProps = MessageConfigProps & MessageGlobalProps;

export type MessageStatusProps = MessageConfigProps & {
  type?: 'success' | 'warning' | 'error' | 'info';
};

let prefixCls = getPrefixClassName('message');
let msgInstance: MessageInstance | null;

const getMessageIns = (
  props: MessageProps,
  callback: (notificationIns: MessageInstance) => void,
) => {
  const { prefix: customPrefix, zIndex } = props;
  prefixCls = getPrefixClassName(
    'message',
    customPrefix,
    Message.globalProps.prefix,
  );
  if (msgInstance && msgInstance.messageWrapperExit()) {
    return callback(msgInstance);
  }
  RcNotification.newInstance(
    {
      prefixCls,
      getContainer: props.getContainer || Message.globalProps.getContainer,
      style: {
        zIndex,
      },
      maxCount: Message.globalProps.maxCount,
      // className: cls
    },
    (notification: MessageInstance) => {
      msgInstance = notification;
      callback(notification);
    },
  );
};

const getContent = (props: MessageStatusProps) => {
  const { type, content, icon } = props;
  const contentPrefixCls = `${prefixCls}-content`;
  const curIcon = getCurIcon(Icons, type as string, true);
  const iconCls = classNames(`${contentPrefixCls}-icon`, {
    [`${contentPrefixCls}-${type}`]: !icon,
  });
  return (
    <div className={contentPrefixCls}>
      <span className={iconCls}>{!icon ? curIcon : icon}</span>
      <span>{content}</span>
    </div>
  );
};

const commonNotice = (props: MessageStatusProps) => {
  let dur = Message.defaultProps.duration;
  const className = classNames(props.className);
  if ('duration' in Message.globalProps) {
    dur = Message.globalProps.duration;
  }
  if ('duration' in props) {
    dur = props.duration;
  }
  getMessageIns(props, (notification: MessageInstance) => {
    notification.notice({
      content: getContent(props),
      onClose() {
        props.onClose?.();
      },
      key: props.key,
      duration: dur,
      className,
      style: props.style,
    });
  });
};

const defaultProps: Partial<MessageProps> = {
  duration: 3,
};

const Message: {
  defaultProps: Partial<MessageConfigProps>;
  globalProps: MessageGlobalProps;
} = {
  defaultProps,
  globalProps: {},
};

const MessageApi: Record<string, any> = {
  config: (globalProps: MessageGlobalProps) => {
    Message.globalProps = globalProps;
  },
  open: (props: MessageStatusProps) => commonNotice(props),
  destroy: (messageKey: React.Key) => {
    if (!msgInstance) return;
    if (messageKey) {
      const { removeNotice } = msgInstance;
      removeNotice(messageKey);
    } else {
      const { destroy } = msgInstance;
      destroy();
      msgInstance = null;
    }
  },
};

['success', 'error', 'warning', 'info'].forEach((type) => {
  MessageApi[type] = (
    content: React.ReactNode | object,
    duration?: number,
    onClose?: () => void,
  ) => {
    let endArgs = {};
    if (Object.prototype.toString.call(content) === '[object Object]') {
      endArgs = content as object;
    } else {
      endArgs =
        typeof duration === 'function'
          ? {
              content,
              onClose: duration,
            }
          : {
              content,
              onClose,
              duration,
            };
    }
    MessageApi.open({
      ...endArgs,
      type,
    });
  };
});

// 欺骗一下doc-typescript，自动生成md文档
const MessageDoczCheat: React.FC<MessageConfigProps> = () => {
  return null;
};
MessageDoczCheat.defaultProps = defaultProps;
export { MessageDoczCheat };

export default MessageApi;
