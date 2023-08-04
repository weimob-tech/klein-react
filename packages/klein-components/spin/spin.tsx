import React, { useContext } from 'react';
import classnames from 'classnames';
import { ConfigContext } from '../config-provider/context';
import { isValidElement, cloneElement } from '../utils/ReactNodeValidate';
// import { Icons } from '../components';
// @ts-ignore
import logo from './gif/loading-basic-blue.gif';

export type spinSize = 'small' | 'default' | 'large';
export type spinDirection = 'row' | 'col';
export interface SpinProps {
  /** 延迟显示加载效果的时间 */
  delay?: number;
  /** 自定义加载文案 */
  tip?: string;
  /** 是否是加载中 */
  spinning?: boolean;
  /** 组件尺寸大小 */
  size?: spinSize;
  /** 自定义加载图标 */
  indicator?: React.ReactNode;
  /** 自定义类 */
  className?: string;
  /** 方向 */
  direction?: spinDirection;
}

const Spin: React.FC<SpinProps> = ({
  className,
  size = 'default',
  tip,
  delay,
  spinning = true,
  indicator,
  direction = 'row',
  ...restProps
}) => {
  const { getPrefixClassName } = useContext(ConfigContext);
  const spinPrefix = getPrefixClassName('spin');
  const [currentSpinning, setCurrentSpinning] = React.useState(false);
  const spinSizeCls = classnames(
    spinPrefix,
    {
      [`${spinPrefix}-small`]: size === 'small',
      [`${spinPrefix}-default`]: size === 'default',
      [`${spinPrefix}-large`]: size === 'large',
    },
    className,
  );
  const directionCls = classnames(
    {
      [`${spinPrefix}-row`]: direction === 'row',
      [`${spinPrefix}-col`]: direction === 'col',
    },
    className,
  );

  React.useEffect(() => {
    const delayTime = setTimeout(() => {
      updateSpin();
    }, delay);
    return () => clearTimeout(delayTime);
  }, [spinning]);
  // 更新 spin
  const updateSpin = () => {
    if (currentSpinning !== spinning) {
      setCurrentSpinning(spinning);
    }
  };

  // 渲染indicator
  const indicatorRender = (): React.ReactNode => {
    if (indicator) {
      return indicator;
    }
    if (isValidElement(indicator)) {
      return cloneElement(indicator, { ...restProps, className: spinSizeCls });
    }
    const sizeSty =
      size === 'small' ? '16px' : size === 'default' ? '20px' : '32px';
    return (
      <div className={classnames(spinSizeCls)}>
        <img src={logo} style={{ width: sizeSty }} alt="加载中。。。。" />
      </div>
    );
  };

  // 渲染spinElement
  const spinElement = (): React.ReactNode => {
    const { children } = restProps;
    let lingHeight = '';
    if (size === 'large' && direction === 'col') {
      lingHeight = '32px';
    } else if (size === 'small' && direction === 'col') {
      lingHeight = '16px';
    } else {
      lingHeight = '';
    }
    return (
      <div
        className={classnames(
          direction === 'col' ? `${spinPrefix}-flex  ` : `${spinPrefix}-cen`,
          children ? `${spinPrefix}-child-spin` : '',
        )}
      >
        {indicatorRender()}
        {tip && (
          <div
            className={classnames(spinSizeCls, directionCls)}
            style={{ lineHeight: lingHeight }}
          >
            {' '}
            {tip}
          </div>
        )}
      </div>
    );
  };
  // 渲染child
  const renderChild = (): React.ReactNode => {
    const { children } = restProps;
    const containerClassName = classnames(`${spinPrefix}-container`, {
      [`${spinPrefix}-blur`]: currentSpinning,
    });
    return (
      <div className={containerClassName} key="container">
        {children}
      </div>
    );
  };
  return (
    <div style={{ position: 'relative' }}>
      {currentSpinning && spinElement()}
      {renderChild()}
      {/* {!spinning && restProps.children} */}
    </div>
  );
};

export default Spin;
