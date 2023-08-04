import React, { useContext } from 'react';
import classNames from 'classnames';
import { ConfigContext } from '../config-provider/context';

export interface BadgeProps {
  /** 不展示数字，只显示一个小红点 */
  dot?: boolean;
  /** 自定义背景颜色 */
  color?: string;
  /** 展示的数字 */
  count?: React.ReactNode;
  /** 尺寸大小 */
  size?: 'small' | undefined;
  /** 设置位置的偏移量 */
  offset?: number[];
  /** 自定义className */
  className?: string;
  /** 微标描边样式 */
  border?: string;
}

const Badge: React.FC<BadgeProps> = (props) => {
  const {
    dot = false,
    color,
    count = 0,
    className,
    size: customSize,
    offset = [0, 0],
    ...restProps
  } = props as any;
  const { children } = restProps;
  const { getPrefixClassName, size } = useContext(ConfigContext);
  const endSize = customSize || size;
  const badgeCls = getPrefixClassName('badge');
  const hasCount = React.useMemo(() => count || children, [count]);
  const classStyle = classNames(className, {
    [`${badgeCls}-count`]: hasCount,
  });
  // 独立渲染
  const dependencyRenderHtml = (): React.ReactNode => {
    // 渲染 dot
    let styl: React.CSSProperties = {
      background: `${color}`,
      top: 0,
      right: 0,
    };
    if (offset) {
      styl = {
        ...styl,
        top: offset[0],
        right: offset[1],
        border: restProps.border,
      };
    }
    if (dot) {
      return React.createElement(
        'span',
        {
          className: classNames(`${badgeCls}-noText`, {
            [`${badgeCls}-hasc`]: !!restProps?.children,
          }),
          style: {
            background: `${color}`,
          },
        },
        '',
      );
    }
    return (
      <span
        className={classNames(classStyle, {
          [`${badgeCls}-hasc`]: !!restProps?.children,
          [`${badgeCls}-${endSize}`]: !!endSize,
        })}
        style={styl}
      >
        {count}
      </span>
    );
  };

  // 渲染childNode
  const renderChildNode = (): React.ReactNode => {
    if (!children) {
      return dependencyRenderHtml();
    }
    // 只有一个 children
    return React.cloneElement(
      children,
      {
        className: classNames({
          [`${badgeCls}-child`]: !!restProps?.children,
        }),
        ...restProps,
      },
      [children, dependencyRenderHtml() as any],
    );
  };

  return <>{renderChildNode()}</>;
};

export default Badge;
