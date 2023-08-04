// @ts-nocheck
import React from 'react';
import classnames from 'classnames';
import { ConfigContext } from '../config-provider/context';
import omit from '../components/rc-util/omit';
import { Icons } from '../components';

const { CloseLine } = Icons;

export interface TagProps {
  /** 尺寸 */
  size?: 'large' | 'medium' | 'small' | 'xSmall';
  /** 标签是否可以关闭 */
  closable?: boolean;
  /** 自定义关闭按钮 */
  closeIcon?: React.ReactNode;
  /** 标签色 */
  color?: string;
  /** 是否显示标签 */
  visible?: boolean;
  /** 关闭标签后的回调 */
  onClose?: (e: React.MouseEvent<HTMLElement>) => void;
  style?: React.CSSProperties;
  className?: string;
  children?: React.ReactNode;
  /** 自定义icon */
  iconNode?: React.ReactNode;
  /** 是否禁用 */
  disabled?: boolean;
  /** 类型 */
  type?: 'line' | 'fill';
  /** 设置宽度。超出省略 */
  width?: number;
  /** 设置最大宽度。超出省略 */
  maxWidth?: number;
}

const INNER_COLORS = ['blue', 'green', 'orange', 'red', 'gray'];

const Tag: React.FC<TagProps> = (props) => {
  const {
    size: customSize,
    closable,
    closeIcon,
    color,
    onClose,
    style,
    className,
    children,
    iconNode,
    type = 'line',
    disabled,
    width,
    maxWidth,
  } = props;
  const { getPrefixClassName, size } = React.useContext(ConfigContext);
  const tagPrefix = getPrefixClassName('tag');
  const [iconVisible, setIconVisible] = React.useState<boolean>(true);
  const endSize = customSize || size;
  const isInnerColor = INNER_COLORS.includes(color);

  React.useEffect(() => {
    if ('visible' in props) {
      setIconVisible(props.visible!);
    }
  }, [props.visible]);

  const tagClass = classnames(
    tagPrefix,
    {
      // [`${tagPrefix}-${color}`]: presetColor,
      [`${tagPrefix}-line`]: type === 'line',
      [`${tagPrefix}-fill`]: type === 'fill',
      [`${tagPrefix}-${endSize}`]: endSize,
      [`${tagPrefix}-${color}`]: isInnerColor,
      [`${tagPrefix}-hidden`]: !iconVisible,
      [`${tagPrefix}-disabled`]: disabled,
      [`${tagPrefix}-closable`]: closable,
    },
    className,
  );

  // 过长省略
  let ellipsisStyle;
  if (width || maxWidth) {
    ellipsisStyle = {
      width,
      maxWidth,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    };
  }
  // 整合样式
  let tagStyle;

  if (!isInnerColor && type === 'line') {
    tagStyle = {
      backgroundColor: '#ffffff',
      color: color || '#262626',
      borderColor: color || '#D9D9D9',
      ...style,
    };
  }

  if (!isInnerColor && type === 'fill') {
    const hasBg = color || '#F2F2F6';
    const textColor = color ? '#fffff' : '#262626';
    tagStyle = {
      backgroundColor: hasBg,
      color: textColor,
      border: 'none',
      ...style,
    };
  }

  const endStyle = {
    ...ellipsisStyle,
    ...tagStyle,
  };
  // 关闭 ICON
  const handleCloseClick = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    onClose?.(e);
    // console.log(e,props,'e')
    /* 事件的默认动作已被取消 如果传入此就取消 */
    if (e.defaultPrevented) {
      return;
    }
    if (!('visible' in props)) {
      setIconVisible(false);
    }
  };
  // 渲染ICON
  const renderCloseIcon = (): React.ReactNode => {
    if (closable) {
      return (
        <span className={`${tagPrefix}-close-icon`} onClick={handleCloseClick}>
          {closeIcon || <CloseLine onClick={handleCloseClick} />}
        </span>
      );
    }
    return null;
  };
  // 渲染text
  const renderTextNode = iconNode ? (
    <>
      <span className={`${tagPrefix}-icon-node`}> {iconNode}</span>
      <span className={`${tagPrefix}-text-node`}>{children}</span>
    </>
  ) : (
    <span>{children}</span>
    // children
  );

  const tagProps = omit(props, [
    'visible',
    'closable',
    'iconNode',
    'width',
    'color',
  ]);
  const tagNode = (
    <span {...tagProps} className={tagClass} style={endStyle}>
      {renderTextNode}
      {renderCloseIcon()}
    </span>
  );
  return <> {tagNode} </>;
};
Tag.displayName = 'Tag';
export default Tag;
