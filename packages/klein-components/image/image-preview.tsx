import React from 'react';
import classNames from 'classnames';

import { RcDialog } from '../components';
import { ConfigContext } from '../config-provider/context';
import type { DialogProps } from '../components/rc-dialog';
import addEventListener from '../components/rc-util/Dom/addEventListener';
import Icon from '../icon';

const {
  CloseFill,
  LeftFill,
  RightFill,
  ZoomInLine,
  ZoomOutLine,
  FullScreenLine,
  ExitFullScreenLine,
  RotateLeftOutlinedLine,
  RotateRightOutlinedLine,
} = Icon;

export interface PreviewImageProps {
  uid?: string | number;
  url?: string;
}

export type Functions =
  | boolean
  | ((funcs: React.ReactNode[]) => React.ReactNode[]);
export interface PreviewProps extends DialogProps {
  prefixCls?: string;
  children?: React.ReactNode;
  functions?: Functions;
  /** 图片列表 */
  images?: PreviewImageProps[];
  curIndex?: number;
}

const __BASE_DEG__ = 90;

const Preview: React.FC<PreviewProps> = (props) => {
  const {
    children,
    prefixCls: customPrefixCls,
    closeIcon: customCloseIcon,
    images,
    curIndex,
    functions,
    visible,
    ...reset
  } = props;

  const originPositionRef = React.useRef<{
    originX: number;
    originY: number;
    preSubstractX: number;
    preSubstractY: number;
  }>({
    originX: 0,
    originY: 0,
    preSubstractX: 0,
    preSubstractY: 0,
  });
  const { getPrefixClassName } = React.useContext(ConfigContext);
  const previewPrefixCls = getPrefixClassName('preview', customPrefixCls);

  const [index, setIndex] = React.useState<number>(
    curIndex !== undefined ? curIndex + 1 : 1,
  );

  const [rotate, setRotate] = React.useState<number>(0);
  const [zoom, setZoom] = React.useState<number>(1);
  const [moving, setMoving] = React.useState<boolean>(false);
  const [fullScreen, setFullScreen] = React.useState<Boolean>(false);
  const [position, setPosition] = React.useState<{
    x: number;
    y: number;
  }>({
    x: 0,
    y: 0,
  });

  const onNextClick = () => {
    let num: number;
    if (images && index < images?.length) {
      num = index + 1;
      setIndex(num);
    }
  };

  const onPrevClick = () => {
    let num: number;
    if (index > 1) {
      num = index - 1;
      setIndex(num);
    }
  };

  const onImageOperation = (type: number) => {
    switch (type) {
      case 0:
        setFullScreen(!fullScreen);
        break;
      case 1:
        setRotate(rotate - __BASE_DEG__);
        break;
      case 2:
        setRotate(rotate + __BASE_DEG__);
        break;
      case 3:
        setZoom(zoom + 1);
        break;
      case 4:
        if (zoom <= 1) return;
        setZoom(zoom - 1);
        break;
      default:
        break;
    }
  };

  const onImgMouseDown = (e: React.MouseEvent<HTMLImageElement>) => {
    e.stopPropagation();
    e.preventDefault();
    originPositionRef.current.originX = e.pageX;
    originPositionRef.current.originY = e.pageY;
    setMoving(true);
  };

  const onMouseMove = (e: React.MouseEvent<HTMLBodyElement>) => {
    if (moving && visible) {
      const substractX =
        e.pageX -
        originPositionRef.current.originX +
        originPositionRef.current.preSubstractX;
      const substractY =
        e.pageY -
        originPositionRef.current.originY +
        originPositionRef.current.preSubstractY;
      setPosition({
        x: substractX,
        y: substractY,
      });
    }
  };

  const onMouseUp = (e: React.MouseEvent<HTMLBodyElement>) => {
    if (visible) {
      setMoving(false);
      originPositionRef.current.preSubstractX = position.x;
      originPositionRef.current.preSubstractY = position.y;
    }
  };

  React.useEffect(() => {
    setIndex((curIndex as number) + 1);
  }, [curIndex]);

  React.useEffect(() => {
    const mouseMoveListener = addEventListener(
      window,
      'mousemove',
      onMouseMove,
      false,
    );
    const mouseUpListener = addEventListener(
      window,
      'mouseup',
      onMouseUp,
      false,
    );

    return () => {
      mouseMoveListener.remove();
      mouseUpListener.remove();
    };
  }, [moving, position, visible]);

  // 由于走马灯组件暂时没有，这里先直接使用简单的图片展示方式
  const renderModalContent = () => {
    const getRenderItem = (element: React.ReactElement, itemIndex: number) => (
      <div onClick={() => onImageOperation(itemIndex)}>{element}</div>
    );
    let __FUNCICONS__ = [
      !fullScreen ? <FullScreenLine /> : <ExitFullScreenLine />,
      <RotateLeftOutlinedLine />,
      <RotateRightOutlinedLine />,
      <ZoomInLine />,
      <ZoomOutLine />,
      <span className={`${previewPrefixCls}-info-scale`}>1:{zoom}</span>,
    ].map(getRenderItem);
    if (typeof functions === 'function') {
      __FUNCICONS__ = functions(__FUNCICONS__) as JSX.Element[];
    }
    return (
      <div className={`${previewPrefixCls}-info`}>
        <div
          className={classNames(`${previewPrefixCls}-info-img`, {
            [`${previewPrefixCls}-info-img-fullScreen`]: fullScreen,
            [`${previewPrefixCls}-info-img-moving`]: moving,
          })}
          style={{
            transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
          }}
        >
          {/* 需要支持图片右击下载 */}
          <img
            style={{
              transform: `rotate(${rotate}deg) scale3d(${zoom}, ${zoom}, 1)`,
            }}
            onMouseDown={onImgMouseDown}
            src={images?.[index - 1]?.url}
            alt="loading..."
          />
        </div>

        <span
          className={classNames(`${previewPrefixCls}-info-index`, {
            [`${previewPrefixCls}-info-indexTop`]: functions,
          })}
        >
          {index}/{images?.length}
        </span>
        {functions ? (
          <div className={`${previewPrefixCls}-info-functions`}>
            {__FUNCICONS__.map((element, eleIndex) => (
              <div key={eleIndex}>
                <div className={`${previewPrefixCls}-info-function`}>
                  {element}
                </div>
              </div>
            ))}
          </div>
        ) : null}
        {index !== 1 && (
          <button
            type="button"
            className={`${previewPrefixCls}-info-prev`}
            onClick={onPrevClick}
          >
            <LeftFill />
          </button>
        )}

        {index !== images?.length && (
          <button
            type="button"
            className={`${previewPrefixCls}-info-next`}
            onClick={onNextClick}
          >
            <RightFill />
          </button>
        )}
      </div>
    );
  };

  const renderPreviewModal = () => {
    const defaultIcon = (
      <>
        <CloseFill />
      </>
    );

    return (
      <RcDialog
        closeIcon={customCloseIcon || defaultIcon}
        prefixCls={previewPrefixCls}
        visible={visible}
        {...reset}
      >
        {renderModalContent()}
      </RcDialog>
    );
  };

  return renderPreviewModal();
};

export default Preview;
