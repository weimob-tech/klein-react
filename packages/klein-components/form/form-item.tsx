import React from 'react';
import classNames from 'classnames';
import isEqual from 'lodash/isEqual';
import { ConfigContext } from '../config-provider/context';
import type { ColProps } from '../grid';
import Grid from '../grid';
import type { TooltipProps } from '../tooltip';
import Tooltip from '../tooltip';
import type { PopoverProps } from '../popover';
import Popover from '../popover';
import Icons from '../icon';
import type { InternalFieldProps as FieldProps } from '../components/rc-field-form';
import { Field } from '../components/rc-field-form';
import type {
  Meta,
  RuleObject,
  NamePath,
} from '../components/rc-field-form/interface';
import { FormContext, FormItemContext } from './context';
import { toArray, getFieldId } from './util';
import useFrameState from './hooks/useFrameState';

const { Row, Col } = Grid;
const { QuestionFill } = Icons;

type TooltipObjectType = TooltipProps & { icon?: React.ReactElement };
type PopoverObjectType = PopoverProps & { icon?: React.ReactElement };

export interface FormItemProps {
  prefixCls?: string;
  children?: React.ReactNode;
  /** label 标签的文本 */
  label?: React.ReactNode;
  /** 字段是否必填 */
  required?: boolean;
  /** 控制label文本是否垂直居中，控制formItem的默认行高是否为32px */
  itemCenter?: boolean;
  /** 自定义label固定宽度 */
  labelWidth?: number;
  /** formItem错误提示 */
  tips?: React.ReactNode;
  /** 设置收集字段值变更的时机 */
  trigger?: string;
  /** formItem字段名 @link="`string`|`number`\|`(string` \| `number)[]`" */
  name?: NamePath;
  /** 设置字段的校验逻辑 */
  rules?: FieldProps['rules'];
  /** 自定义formItem更新逻辑 */
  shouldUpdate?: FieldProps['shouldUpdate'];
  /** 定义字段依赖关系 */
  dependencies?: FieldProps['dependencies'];
  /** 设置字段校验时机 */
  validateTrigger?: FieldProps['validateTrigger'];
  /** 设置子元素默认值，Form 的 initialValues权重更高 */
  initialValue?: any;
  /** 设置子元素默认值，Form 的 initialValues权重更高 */
  getValueFromEvent?: (value?: any) => any;
  /** 子节点的值的属性，如 Switch 的是 'checked'。该属性为 getValueProps 的封装，自定义 getValueProps 后会失效 */
  valuePropName?: string;
  /** 设置子元素 label htmlFor 属性 */
  htmlFor?: string;
  /** 不带任何样式 */
  noStyle?: boolean;
  /** label 标签布局，属性同栅格布局 [<Col\>](/components/grid/#col) 组件 */
  labelCol?: ColProps;
  /** 需要为输入控件设置布局样式时，属性同栅格布局 [<Col\>](/components/grid/#col) 组件 */
  wrapperCol?: ColProps;
  /** 设置表单项提示信息，直接使用tooltip=‘hello word’这种形式则使用默认的icon，也可以传入对象进行自定义{icon: null, ...tooltipProps} */
  tooltip?: TooltipObjectType | React.ReactNode;
  /** 设置表单项提示信息，直接使用popover={{title: '大家好', content: 'hello world'}}这种形式则使用默认的icon，也可以传入对象进行自定义{icon: null, ...popoverProps} */
  popover?: PopoverObjectType;
  /** 当某一规则校验不通过时，是否停止剩下的规则的校验。设置 parallel 时会并行校验 */
  validateFirst?: FieldProps['validateFirst'];
  /** 默认验证字段的信息 */
  messageVariables?: Record<string, string>;
  fieldKey?: React.Key | React.Key[];
  style?: React.CSSProperties;
  className?: string;
  /** 额外的提示信息 */
  extra?: React.ReactNode;
  rightExtra?: React.ReactNode;

  // validateStatus?: 'error'
}

const NAME_SPLIT = '_SPLIT_';

const FormItem: React.FC<FormItemProps> = (props) => {
  const {
    prefixCls: customPrefixCls,
    children,
    label: labelName,
    itemCenter,
    labelWidth,
    required,
    tips,
    trigger,
    name,
    rules,
    shouldUpdate,
    dependencies,
    validateTrigger,
    htmlFor,
    // labelStyle,
    noStyle,
    labelCol,
    wrapperCol,
    fieldKey,
    tooltip,
    popover,
    className,
    style,
    extra,
    messageVariables,
    rightExtra,
    ...reset
  } = props;

  const { getPrefixClassName } = React.useContext(ConfigContext);
  const { updateItemErrors } = React.useContext(FormItemContext);
  const formContext = React.useContext(FormContext);
  const {
    name: formName,
    labelCol: contextLabelCol,
    wrapperCol: contextWrapperCol,
    layout,
  } = formContext;

  const [inlineErrors, setInlineErrors] = useFrameState<
    Record<string, string[]>
  >({});
  const nameRef = React.useRef<(string | number)[]>([]);

  const prefixCls = getPrefixClassName('form-item', customPrefixCls);
  const isRenderProps = typeof children === 'function';
  const nameIsExit = name !== undefined && name !== null;

  const updateChildItemErrors = noStyle
    ? updateItemErrors
    : (subName: string, subErrors: string[], originSubName: string) => {
        setInlineErrors((prevInlineErrors = {}) => {
          // Clean up origin error when name changed
          if (originSubName !== subName) {
            delete prevInlineErrors[originSubName];
          }

          if (!isEqual(prevInlineErrors[subName], subErrors)) {
            return {
              ...prevInlineErrors,
              [subName]: subErrors,
            };
          }
          return prevInlineErrors;
        });
      };

  const renderTooltip = () => {
    const defaultIcon = <QuestionFill />;

    if (!tooltip) return null;
    /* eslint-disable no-unneeded-ternary */
    if (typeof tooltip === 'object' && !React.isValidElement(tooltip)) {
      const { icon, ...resetToolTipProps } = tooltip as TooltipObjectType;
      return (
        <Tooltip {...resetToolTipProps}>{icon ? icon : defaultIcon}</Tooltip>
      );
    }

    return <Tooltip title={tooltip}>{defaultIcon}</Tooltip>;
  };

  const renderPopover = () => {
    const defaultIcon = <QuestionFill />;

    if (!popover) return null;
    /* eslint-disable no-unneeded-ternary */
    if (typeof popover === 'object' && !React.isValidElement(popover)) {
      const { icon, ...resetPopoverProps } = popover as PopoverObjectType;
      return (
        <Popover {...resetPopoverProps}>{icon ? icon : defaultIcon}</Popover>
      );
    }

    return <Popover title={popover}>{defaultIcon}</Popover>;
  };

  const renderRowItem = (
    childrenWithNewProps: React.ReactNode,
    isRequired?: boolean,
    meta?: Meta,
    fieldItemName?: string,
  ) => {
    if (noStyle) return <>{childrenWithNewProps}</>;

    const endLabelCol = labelCol || contextLabelCol || {};
    const endWrapperCol = wrapperCol || contextWrapperCol || {};

    let subErrorList: string[] = [];
    Object.keys(inlineErrors).forEach((subName) => {
      subErrorList = [...subErrorList, ...(inlineErrors[subName] || [])];
    });

    let mergedErrors: React.ReactNode[];
    // if (help !== undefined && help !== null) {
    //   mergedErrors = toArray(help);
    // } else {
    mergedErrors = meta ? meta.errors : [];
    mergedErrors = [...mergedErrors, ...subErrorList];
    // }
    const endFormItemCls = classNames({
      [prefixCls]: true,
      [`${prefixCls}-error`]: mergedErrors.length > 0,
      [`${prefixCls}-validating`]: meta?.validating,
      [`${className}`]: !!className,
    });
    const labelColClass = classNames(
      `${prefixCls}-label`,
      JSON.stringify(endLabelCol) === '{}' && `${prefixCls}-label-normal`,
      {
        [`${prefixCls}-no-centered`]: !itemCenter,
      },
    );
    const controllCls = classNames(`${prefixCls}-controll`, {
      [`${prefixCls}-no-centered`]: !itemCenter,
    });
    const controllChild = classNames(`${prefixCls}-controll-content-child`, {
      'has-rightExtra': rightExtra,
    });
    const rightExtraCls = classNames(`${prefixCls}-rightExtra`, {
      [`${prefixCls}-no-centered`]: !itemCenter,
    });

    const labeExtraCls = classNames(
      {
        [`${prefixCls}-label-required`]: isRequired,
      },
      `${prefixCls}-label-extra`,
    );

    const childElement = (
      <FormItemContext.Provider
        value={{ updateItemErrors: updateChildItemErrors }}
      >
        {childrenWithNewProps}
      </FormItemContext.Provider>
    );

    // 去除子formItem的栅格布局属性
    const childFormContext = { ...formContext };
    delete childFormContext.labelCol;
    delete childFormContext.wrapperCol;

    return (
      <Row className={endFormItemCls} style={style}>
        {labelName ? (
          <Col className={labelColClass} {...endLabelCol}>
            <div
              className={`${prefixCls}-label-content`}
              style={
                layout === 'vertical' && !isRequired
                  ? { paddingLeft: 0 }
                  : undefined
              }
            >
              <label style={{ width: labelWidth }} htmlFor={htmlFor}>
                {labelName}
              </label>
              <div className={labeExtraCls}>
                {tooltip && renderTooltip()}
                {popover && renderPopover()}
              </div>
            </div>
          </Col>
        ) : null}
        <FormContext.Provider value={childFormContext}>
          <Col className={controllCls} {...endWrapperCol}>
            <div className={`${prefixCls}-controll-content`}>
              <div className={controllChild}>
                {/* rightExtra属性不存在时和老的保持一致，防止业务侧出现问题 */}
                {rightExtra ? (
                  <>
                    <div className={`${prefixCls}-controll-element`}>
                      {childElement}
                    </div>
                    <span className={rightExtraCls}>{rightExtra}</span>
                  </>
                ) : (
                  childElement
                )}
              </div>
              {/* {rightExtra ? (
                <div className={rightExtraCls}>{rightExtra}</div>
              ) : null} */}
            </div>
            {mergedErrors.length > 0 ? (
              /* eslint-disable react/no-array-index-key */
              <>
                {mergedErrors.map((error, index) => (
                  <div key={index} className={`${prefixCls}-error-tips`}>
                    {error}
                  </div>
                ))}
              </>
            ) : (
              <>
                {tips && (
                  <span className={`${prefixCls}-controll-tips`}>{tips}</span>
                )}
              </>
            )}
            {extra ? (
              <div className={`${prefixCls}-controll-extra`}>{extra}</div>
            ) : null}
          </Col>
        </FormContext.Provider>
      </Row>
    );
  };

  const renderFieldChild: FieldProps['children'] = (control, meta, context) => {
    const mergedName = toArray(name).length && meta ? meta.name : [];
    const { errors } = meta;

    if (noStyle) {
      const originErrorName = nameRef.current.join(NAME_SPLIT);

      nameRef.current = [...mergedName];
      if (fieldKey) {
        const fieldKeys = Array.isArray(fieldKey) ? fieldKey : [fieldKey];
        nameRef.current = [...mergedName.slice(0, -1), ...fieldKeys];
      }
      updateItemErrors(
        nameRef.current.join(NAME_SPLIT),
        errors,
        originErrorName,
      );
    }

    const isRequired =
      required !== undefined
        ? required
        : !!(
            rules &&
            rules.some((rule) => {
              if (rule && (rule as RuleObject).required) {
                return true;
              }
              if (typeof rule === 'function') {
                return rule(context) && rule(context).required;
              }
              return false;
            })
          );

    const fieldItemName = `${formName}_${getFieldId(meta.name)}`;

    let childNode: React.ReactNode = children;

    if (React.isValidElement(children)) {
      const childProps = {
        ...children.props,
        ...control,
      };

      if (!childProps.id) {
        childProps.id = fieldItemName;
      }

      const triggers = new Set<string>([
        ...toArray(trigger),
        ...toArray(validateTrigger),
      ]);

      triggers.forEach((eventName) => {
        childProps[eventName] = (...args: any[]) => {
          control[eventName]?.(...args);
          children.props[eventName]?.(...args);
        };
      });

      childNode = React.cloneElement(children, childProps);
    } else if (
      isRenderProps &&
      (shouldUpdate || dependencies) &&
      !nameIsExit &&
      typeof children === 'function'
    ) {
      childNode = children(context);
    }

    return <>{renderRowItem(childNode, isRequired, meta, fieldItemName)}</>;
  };

  if (!nameIsExit && !isRenderProps && !dependencies) {
    return renderRowItem(children, required);
  }

  let variables: Record<string, string> = {};
  if (typeof labelName === 'string') {
    variables.label = labelName;
  }
  if (messageVariables) {
    variables = { ...variables, ...messageVariables };
  }

  return (
    <Field
      rules={rules}
      name={name}
      trigger={trigger}
      validateTrigger={validateTrigger}
      messageVariables={variables}
      dependencies={dependencies}
      shouldUpdate={shouldUpdate}
      {...reset}
    >
      {renderFieldChild}
    </Field>
  );
};

FormItem.defaultProps = {
  itemCenter: true,
  trigger: 'onChange',
  validateTrigger: 'onChange',
};

FormItem.displayName = 'FormItem';

export default FormItem;
