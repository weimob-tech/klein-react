import React from 'react';
import classNames from 'classnames';
import { ConfigContext } from '../config-provider/context';
import GridContext from './context';
import type { GutterType, GutterContent } from './useResponsive';
import useResponsive from './useResponsive';

export interface RowProps extends React.HTMLAttributes<HTMLDivElement> {
  /** 水平排列方式 */
  justify?: 'start' | 'end' | 'center' | 'space-around' | 'space-between';
  /** 垂直对齐方式 */
  align?: 'top' | 'middle' | 'bottom' | 'stretch';
  /** 栅格间隔 */
  gutter?: GutterType;
  /** 自定义类名前缀 */
  prefixCls?: string;
}

const Row = React.forwardRef<HTMLDivElement, RowProps>((props, ref) => {
  const {
    children,
    prefixCls: customPrefixCls,
    className,
    justify,
    align,
    gutter,
    style,
    ...reset
  } = props;

  const { getPrefixClassName } = React.useContext(ConfigContext);

  const [activeBreakpoint] = useResponsive();

  const handleResult = (
    item: GutterContent,
    index: number,
    result: number[],
  ) => {
    const dividend = 2;
    if (typeof item === 'object') {
      const val = activeBreakpoint ? item[activeBreakpoint] : 0;
      if (typeof val === 'undefined') {
        console.warn('不存在的媒体查询，请检查gutter配置是否正确');
      }
      result[index] = val! / dividend;
    } else {
      result[index] = (item || 0) / dividend;
    }
    return result;
  };

  const computeGutter = () => {
    const result = [0, 0];
    if (Array.isArray(gutter)) {
      gutter.forEach((item, index) => {
        handleResult(item, index, result);
      });
    } else {
      handleResult(gutter || 0, 0, result);
    }
    return result;
  };

  const getRowStyles = (gutters: number[]) => {
    const styles = {} as {
      marginLeft: number;
      marginRight: number;
      marginTop: number;
      marginBottom: number;
    };
    styles.marginLeft = -gutters[0];
    styles.marginRight = -gutters[0];
    if (gutters[1]) {
      styles.marginTop = -gutters[1];
      styles.marginBottom = -gutters[1];
    }
    return styles;
  };

  const renderDom = () => {
    const prefixCls = getPrefixClassName('row', customPrefixCls);
    const gutters = computeGutter();
    const cls = classNames(prefixCls, className, {
      [`${prefixCls}-${justify}`]: justify,
      [`${prefixCls}-${align}`]: align,
    });
    const childs = (
      <GridContext.Provider value={{ gutters }}>
        {children}
      </GridContext.Provider>
    );
    // const childs = React.Children.map(children, (item) => {
    //   if (item) {
    //     return React.cloneElement(item as React.ReactElement, {
    //       gutters,
    //     });
    //   }
    // });
    return (
      <div
        style={
          gutter
            ? {
                ...getRowStyles(gutters),
                // rowGap: gutters[1],
                ...style,
              }
            : {
                ...style,
              }
        }
        {...reset}
        className={cls}
        ref={ref}
      >
        {childs}
      </div>
    );
  };

  return <>{renderDom()}</>;
});

Row.defaultProps = {
  justify: 'start',
};

export default Row;
