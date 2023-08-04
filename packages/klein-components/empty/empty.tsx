import React, { useRef } from 'react';
import classNames from 'classnames';
import { ConfigContext } from '../config-provider/context';
// import DefaultEmptyImg from './empty_icon';
// @ts-ignore
import fail_png from './asset/fail.png';
// @ts-ignore
import noactive_png from './asset/noactive.png';
// @ts-ignore
import nodata_png from './asset/nodata.png';
// @ts-ignore
import nogoods_png from './asset/nogoods.png';
// @ts-ignore
import success_png from './asset/success.png';
// // @ts-ignore
// import noorganization_png from './asset/noorganization.png';
// // @ts-ignore
// import norule_png from './asset/norule.png';

// const defaultEmptyImg = <DefaultEmptyImg />;

export interface EmptyProps {
  /** 自定义描述内容 */
  description?: React.ReactNode;
  /** 设置显示图片，为 string 时表示自定义图片地址。 */
  image?: React.ReactNode;
  /** 图片样式 */
  imageStyle?: React.CSSProperties;
  /** 自定义className */
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  /** 图标尺寸 */
  size?: 'small' | 'middle';
  /** 图标类型 */
  type?:
    | 'goods'
    | 'activity'
    | 'data'
    | 'fail'
    | 'success'
    | 'rule'
    | 'organization';
}

const Empty: React.FC<EmptyProps> = React.forwardRef<unknown, EmptyProps>(
  (props, ref) => {
    const { getPrefixClassName } = React.useContext(ConfigContext);
    const emptyRef = (ref as any) || useRef<HTMLElement>(null);

    const {
      className,
      imageStyle,
      // image = defaultEmptyImg,
      image,
      description,
      children,
      size,
      type,
      ...otherProps
    } = props;

    const des = typeof description !== 'undefined' ? description : '暂无数据';
    const alt = typeof des === 'string' ? des : 'empty';

    const emptyCls = getPrefixClassName('empty');
    const endCls = classNames(emptyCls, [`${emptyCls}-${size}`], className);

    // image node
    let imageNode: React.ReactNode = null;

    if (typeof image === 'string') {
      imageNode = <img alt={alt} src={image} />;
    } else {
      switch (type) {
        case 'goods':
          imageNode = (
            <img alt={alt} className={`${emptyCls}-goods`} src={nogoods_png} />
          );
          break;
        case 'activity':
          imageNode = (
            <img
              alt={alt}
              className={`${emptyCls}-activity`}
              src={noactive_png}
            />
          );
          break;
        case 'data':
          imageNode = (
            <img alt={alt} className={`${emptyCls}-data`} src={nodata_png} />
          );
          break;
        case 'rule':
          imageNode = (
            <img alt={alt} className={`${emptyCls}-data`} src={fail_png} />
          );
          break;
        case 'organization':
          imageNode = (
            <img alt={alt} className={`${emptyCls}-data`} src={fail_png} />
          );
          break;
        case 'fail':
          imageNode = (
            <img alt={alt} className={`${emptyCls}-fail`} src={fail_png} />
          );
          break;
        case 'success':
          imageNode = (
            <img
              alt={alt}
              className={`${emptyCls}-success`}
              src={success_png}
            />
          );
          break;
        default:
          imageNode = (
            <img alt={alt} className={`${emptyCls}-data`} src={nodata_png} />
          );
          break;
      }
    }

    const comProps = {
      ref: emptyRef,
      className: endCls,
      ...otherProps,
    };
    return (
      <div {...comProps}>
        <div className={`${emptyCls}-image`} style={imageStyle}>
          {imageNode}
        </div>
        {des && <div className={`${emptyCls}-description`}>{des}</div>}
        {children && <div className={`${emptyCls}-footer`}>{children}</div>}
      </div>
    );
  },
);
Empty.displayName = 'Empty';
Empty.defaultProps = {
  size: 'middle',
};
export default Empty;
