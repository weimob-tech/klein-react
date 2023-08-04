import React from 'react';
import classNames from 'classnames';
import Icon from '../icon';
import Preview from './image-preview';
import type { Functions, PreviewImageProps } from './image-preview';
import { ConfigContext } from '../config-provider/context';
import type { IDialogPropTypes } from '../components/rc-dialog/IDialogPropTypes';

const { ZoomInLine, LoadFailFill } = Icon;

export interface PreviewProps {
  visible: boolean;
  onVisibleChange?: (visible: boolean) => void;
}

export interface ImageProps {
  prefixCls?: string;
  /** 显示放大缩小等功能，传入函数自定义功能按钮 */
  functions?: Functions;
  /** 图片描述 */
  alt?: string;
  /** 图片宽度 */
  width?: number | string;
  /** 图片高度 */
  height?: number | string;
  /** 预览参数 */
  preview?: boolean | PreviewProps;
  /** 图片地址 */
  src: string;
  /** 图片预览地址 */
  previewSrc?: string;
  /** 加载失败容错地址 */
  fallback?: string;
  /** 确定图片如何适应容器框，同原生 object-fit */
  fit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down';
  /** 多张预览 */
  multiple?: boolean;
  /** 多张图片列表 */
  images?: PreviewImageProps[];
  /** 图片唯一值 */
  id?: PreviewImageProps['uid'];
  style?: React.CSSProperties;
  /** 错误回调 */
  onError?: (e: React.SyntheticEvent<HTMLImageElement, Event>) => void;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  /** 提示信息挂载点，默认挂载到 body 上 */
  getContainer?: IDialogPropTypes['getContainer'];
  className?: string;
}

export interface CompoundedImage
  extends React.ForwardRefExoticComponent<
    ImageProps & React.RefAttributes<HTMLImageElement>
  > {
  Preview: typeof Preview;
}

export type RefElement = HTMLImageElement | HTMLDivElement;

function isObject(obj: ImageProps['preview']): boolean {
  return (
    typeof obj === 'object' &&
    obj !== null &&
    Object.getPrototypeOf(obj) === Object.prototype
  );
}

const ImageRefFunction: React.ForwardRefRenderFunction<
  RefElement,
  ImageProps
> = (props, ref) => {
  const {
    prefixCls: customPrefixCls,
    alt,
    functions,
    width,
    height,
    src,
    previewSrc,
    fallback,
    style,
    preview,
    multiple,
    images,
    id,
    fit,
    className,
    onError,
    onClick,
    getContainer: imageGetPopupContainer,
    ...resetProps
  } = props;

  const [imageSrc, setImageSrc] = React.useState<string>(src);
  const [visible, setVisible] = React.useState<boolean>(
    isObject(preview) ? (preview as PreviewProps).visible : false,
  );
  let imageRef = React.useRef<any>(null);
  imageRef = (ref as any) || imageRef;

  const { getPrefixClassName, getPopupContainer } = React.useContext(
    ConfigContext,
  );

  if (src && src !== imageSrc) {
    setImageSrc(src);
  }

  if (isObject(preview) && (preview as PreviewProps).visible !== visible) {
    setVisible((preview as PreviewProps).visible);
  }

  const imagePrefixCls = getPrefixClassName('image', customPrefixCls);

  const curImage = images?.find((item) => item.uid === id);

  const curImgIndex = curImage ? images?.indexOf(curImage) : 0;

  const onImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    setImageSrc('error');
    onError?.(e);
  };

  const onImageLoad = () => {
    setImageSrc(src);
  };

  const handleModalVisible = (isVisible: boolean) => {
    if (preview) {
      if (isObject(preview)) {
        (preview as PreviewProps).onVisibleChange?.(isVisible);
        if (typeof (preview as PreviewProps).visible !== 'undefined') {
          return;
        }
      }
      setVisible(isVisible);
    }
  };

  const imgCls = classNames(
    `${imagePrefixCls}-img`,
    fit && `${imagePrefixCls}-img-${fit}`,
  );

  const renderImageContent = () => {
    let child = (
      <>
        {imageSrc !== 'error' ? (
          <>
            <img
              src={imageSrc}
              className={imgCls}
              ref={imageRef}
              onError={onImageError}
              onLoad={onImageLoad}
              alt={alt}
              {...resetProps}
            />
            {preview && (
              <div
                onClick={() => handleModalVisible(true)}
                className={`${imagePrefixCls}-mask`}
              >
                <ZoomInLine />
              </div>
            )}
          </>
        ) : null}
      </>
    );

    if (imageSrc === 'error') {
      if (!fallback) {
        const w = width || 160;
        let wNum = w;
        const h = height || 160;
        if (typeof w === 'string') {
          wNum = parseInt(w.replace(/(px|em|rem|%)$/, ''), 10);
        }
        const size = {
          width: w,
          height: h,
          fontSize: (wNum as number) / (10 / 3),
        };
        child = (
          <div
            ref={imageRef}
            style={size}
            className={`${imagePrefixCls}-defaultError`}
          >
            <LoadFailFill />
          </div>
        );
      } else {
        child = (
          <img
            src={fallback}
            className={`${imagePrefixCls}-img`}
            ref={imageRef}
            alt={alt}
            onError={onImageError}
            onLoad={onImageLoad}
            {...resetProps}
          />
        );
      }
    }

    return child;
  };

  const renderPreview = () => (
    <Preview
      visible={visible}
      functions={functions}
      images={
        multiple
          ? images
          : [
              {
                uid: +new Date(),
                url: previewSrc || imageSrc,
              },
            ]
      }
      onClose={() => handleModalVisible(false)}
      curIndex={curImgIndex}
      getContainer={imageGetPopupContainer || getPopupContainer}
    />
  );

  return (
    <div
      className={classNames(imagePrefixCls, className)}
      style={{
        width,
        height,
        ...style,
      }}
      onClick={onClick}
    >
      {renderImageContent()}
      {renderPreview()}
    </div>
  );
};

const Image = React.forwardRef<RefElement, ImageProps>(
  ImageRefFunction,
) as CompoundedImage;

Image.Preview = Preview;

Image.defaultProps = {
  preview: true,
  functions: false,
};

export default Image;
