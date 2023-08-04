import React from 'react';
import cx from 'classnames';
import { ConfigContext } from '../config-provider/context';

export interface AvatarProps {
  /** 指定头像形状 */
  shape?: 'circle' | 'square';
  /** 设置头像大小 */
  size?: 'small' | 'medium' | 'large' | number;
  /** 头像资源地址 */
  src?: string;
  /** 自定义style */
  style?: React.CSSProperties;
  /** 自定义className */
  className?: string;
  /** 图片无法显示时的替代文本 */
  alt?: string;
  /** 加载失败的事件 */
  onError?: () => void;
  /** 加载完成的事件 */
  onLoad?: () => void;
}

const Avatar: React.FC<AvatarProps> = ({
  className,
  shape,
  style,
  size,
  src,
  alt,
  children,
  onError,
  onLoad,
  ...otherProps
}) => {
  // state
  const { getPrefixClassName } = React.useContext(ConfigContext);
  const avatarCls = getPrefixClassName('avatar');
  const [isImgLoadError, setImgLoadError] = React.useState(false);
  const [isImgLoaded, setImgLoaded] = React.useState(false);
  const prevSrc = React.useRef<string | undefined>('');

  if (typeof src !== 'undefined' && src !== prevSrc.current) {
    setImgLoaded(false);
    setImgLoadError(false);
  }

  prevSrc.current = src;

  const getSizeSuffixCls = () => {
    if (size === 'large') return 'lg';
    if (size === 'small') return 'sm';
    return '';
  };

  // handle
  const handleImgLoaded = () => {
    if (!isImgLoaded) {
      setImgLoaded(true);
      onLoad?.();
    }
  };
  const handleImgLoadError = () => {
    if (!isImgLoadError) {
      setImgLoadError(true);
      onError?.();
    }
  };

  // render
  const sizeSuffixCls = getSizeSuffixCls();

  const renderChildren = () => {
    if (typeof src === 'string' && !isImgLoadError) {
      return (
        <img
          src={src}
          alt={alt}
          onLoad={handleImgLoaded}
          onError={handleImgLoadError}
        />
      );
    }
    if (typeof children === 'string') {
      return <span className={`${avatarCls}-string-child`}>{children}</span>;
    }
    return children;
  };

  return (
    <span
      {...otherProps}
      className={cx(
        avatarCls,
        sizeSuffixCls && `${avatarCls}-${sizeSuffixCls}`,
        shape && `${avatarCls}-${shape}`,
        src && isImgLoaded && `${avatarCls}-image`,
        typeof children === 'string' && `${avatarCls}-string`,
        className,
      )}
      style={{
        ...(typeof size === 'number' && {
          height: size,
          width: size,
        }),
        ...style,
      }}
    >
      {renderChildren()}
    </span>
  );
};

Avatar.displayName = 'Avatar';

Avatar.defaultProps = {
  shape: 'circle',
  size: 'medium',
};

export default Avatar;
