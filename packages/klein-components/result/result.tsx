import React, { useRef } from 'react';
import classNames from 'classnames';
import Icon from '../icon';
import { ConfigContext } from '../config-provider/context';

const { SuccessFill, InfoFill, ErrorFill, WarningFill } = Icon;

export interface OutputResultProps {
  /** 设置按钮的图标 */
  icon?: React.ReactNode;
  /** 操作区 */
  extra?: React.ReactNode;
  /** subTitle 文字 */
  subTitle?: React.ReactNode;
  /** title 文字 */
  title?: React.ReactNode;
  /** 自定义className */
  className?: string;
  /** 自定义style */
  style?: React.CSSProperties;
}

interface IconMap {
  success?: React.ReactNode;
  error?: React.ReactNode;
  info?: React.ReactNode;
  warning?: React.ReactNode;
  '404'?: React.ReactNode;
  '500'?: React.ReactNode;
  '403'?: React.ReactNode;
}

export type ExceptionStatusType = 403 | 404 | 500;
export type ResultStatusType = ExceptionStatusType | keyof typeof IconMap;

export type ResultProps = OutputResultProps & {
  status?: ResultStatusType /** 结果的状态，决定图标和颜色 */;
};
// eslint-disable-next-line @typescript-eslint/no-redeclare
const IconMap: IconMap = {
  success: <SuccessFill />,
  error: <ErrorFill />,
  info: <InfoFill />,
  warning: <WarningFill />,
};

const ExceptionMap: IconMap = {
  404: <ErrorFill />,
  500: <ErrorFill />,
  403: <ErrorFill />,
};

const Result: React.FC<ResultProps> = React.forwardRef<unknown, ResultProps>(
  (props, ref) => {
    const { getPrefixClassName } = React.useContext(ConfigContext);
    const resultRef = (ref as any) || useRef<HTMLElement>(null);

    const {
      className,
      icon,
      extra,
      status,
      subTitle,
      title,
      ...otherProps
    } = props;

    const resultCls = getPrefixClassName('result');
    const endCls = classNames(
      resultCls,
      {
        [`${resultCls}-${status}`]: status,
      },
      className,
    );

    const ExceptionStatus = Object.keys(ExceptionMap);
    // icon node
    const iconNode = () => {
      const currentStatus = !status ? 'info' : status;
      if (ExceptionStatus.includes(''.concat(currentStatus.toString()))) {
        return (
          <div className={`${resultCls}-icon`}>
            {ExceptionMap[currentStatus]}
          </div>
        );
      }
      return (
        <div className={`${resultCls}-icon`}>
          {icon || IconMap[currentStatus]}
        </div>
      );
    };
    // normal node
    const tempNode = (name: string, content: React.ReactNode) => {
      const typeNode = name ? (
        <div className={`${resultCls}-${name}`}>{content}</div>
      ) : null;
      return typeNode;
    };

    const titleNode = tempNode('title', title);
    const subTitleNode = tempNode('subTitle', subTitle);
    const extraNode = tempNode('extra', extra);

    const comProps = {
      ref: resultRef,
      className: endCls,
      ...otherProps,
    };
    return (
      <div {...comProps}>
        {iconNode()}
        {titleNode}
        {subTitleNode}
        {extraNode}
      </div>
    );
  },
);

Result.displayName = 'Result';

Result.defaultProps = {
  status: 'info',
};

export default Result;
