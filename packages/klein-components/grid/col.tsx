import React from 'react';
import classNames from 'classnames';
import GridContext from './context';
import { ConfigContext } from '../config-provider/context';

export interface ColProps extends React.HTMLAttributes<HTMLDivElement> {
  /** 栅格占位格数 */
  span?: number;
  /** 自定义类名前缀 */
  prefixCls?: string;
  // gutters?: number[];
  /** flex布局属性 */
  flex?: number | string;
  /** 栅格左侧的间隔格数，输入为px，em，rem，%等类型的字符串时为即为输入值 */
  offset?: number | string;
}

// const responsiveTypes = ['xs', 'md', 'lg', 'xl']

const Col = React.forwardRef<HTMLDivElement, ColProps>((props, ref) => {
  const {
    className,
    // gutters,
    children,
    prefixCls: customPrefixCls,
    span,
    flex,
    offset,
    style,
    ...reset
  } = props;

  const { gutters } = React.useContext(GridContext);

  const regUtil = (target: string) => /^\d+(\.\d+)?(px|em|rem|%)$/.test(target);

  const getColStyles = () => {
    const colStyles = {} as {
      paddingLeft: number;
      paddingRight: number;
      paddingTop: number;
      paddingBottom: number;
      flex?: ColProps['flex'];
      offset?: ColProps['offset'];
      marginLeft?: string | number;
    };
    if (gutters !== undefined) {
      colStyles.paddingLeft = gutters[0];
      colStyles.paddingRight = gutters[0];
      if (gutters[1]) {
        colStyles.paddingTop = gutters[1];
        colStyles.paddingBottom = gutters[1];
      }
    }
    if (flex !== undefined) {
      if (typeof flex === 'number') {
        colStyles.flex = `${flex} ${flex} auto`;
      } else if (regUtil(flex as string)) {
        colStyles.flex = `0 0 ${flex}`;
      } else {
        colStyles.flex = flex;
      }
    }
    if (offset !== undefined && typeof offset === 'string') {
      if (regUtil(offset as string)) {
        colStyles.marginLeft = offset;
      }
    }
    return { ...colStyles, ...(style || {}) };
  };

  const { getPrefixClassName } = React.useContext(ConfigContext);

  const renderDom = () => {
    const prefixCls = getPrefixClassName('col', customPrefixCls);
    const cls = classNames(prefixCls, className, {
      [`${prefixCls}-${span}`]: span,
      [`${prefixCls}-offset-${offset}`]: typeof offset === 'number',
    });

    return (
      <div style={getColStyles()} {...reset} className={cls} ref={ref}>
        {children}
      </div>
    );
  };

  return <>{renderDom()}</>;
});

Col.defaultProps = {};

export default Col;
