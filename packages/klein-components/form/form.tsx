import React from 'react';
import classNames from 'classnames';
import { RcForm } from '../components';
import type { FormProps as RcFormProps } from '../components/rc-field-form';
import type {
  ValidateErrorEntity,
  ValidateOptions,
  Callbacks,
} from '../components/rc-field-form/interface';
import { ConfigContext } from '../config-provider/context';
import useForm, { FormInstance } from './hooks/useForm';
import type { FormContextProps } from './context';
import { FormContext } from './context';
import type { ColProps } from '../grid';

export interface FormProps<Values = any> {
  /** 表单名称 */
  name?: string;
  /** 经 Form.useForm() 创建的 form 控制实例，不提供时会自动创建 */
  form?: FormInstance<Values>;
  /** 表单默认值，只有初始化以及重置时生效 */
  initialValues?: RcFormProps['initialValues'];
  /** 提交表单且数据验证成功后回调事件 */
  onFinish?: (values: any) => void;
  /** 提交表单且数据验证失败后回调事件 */
  onFinishFailed?: RcFormProps['onFinishFailed'];
  /** 提交失败时滚动到第一个错误字段 */
  scrollToFirstError?: boolean;
  /** 布局方式 */
  layout?: 'horizontal' | 'vertical' | 'inline';
  /** label 标签布局，属性同栅格布局[<Col\>](/components/grid/#col)组件 */
  labelCol?: ColProps;
  /** 需要为输入控件设置布局样式时，属性同栅格布局[<Col\>](/components/grid/#col)组件 */
  wrapperCol?: ColProps;
  /** 字段值更新时触发回调事件 */
  onValuesChange?: (changedValues: any, values: Values) => void;
  /** 字段更新时触发回调事件 */
  onFieldsChange?: Callbacks['onFieldsChange'];
  /** 验证提示模板 @link="[见下文]" */
  validateMessages?: ValidateOptions['validateMessages'];
  disabled?: boolean;
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
  colon?: Boolean;
  ref?: any;
}

const Form: React.FC<FormProps> = React.forwardRef<unknown, FormProps>(
  (props, ref) => {
    const {
      form,
      name,
      prefixCls: customPrefixCls,
      onFinishFailed,
      scrollToFirstError,
      layout,
      labelCol,
      wrapperCol,
      colon,
      className,
      disabled,
      ...restProps
    } = props;

    const { getPrefixClassName } = React.useContext(ConfigContext);
    const prefixCls = getPrefixClassName('form', customPrefixCls);

    const formCls = classNames(
      prefixCls,
      {
        [`${prefixCls}-${layout}`]: true,
      },
      className,
    );

    const [wrapForm] = useForm(form);
    wrapForm.__INTERNAL__.name = name;
    React.useImperativeHandle(ref, () => wrapForm);

    const formContextVals = React.useMemo<FormContextProps>(
      () => ({
        name,
        labelCol,
        wrapperCol,
        disabled,
        layout,
        // colon,
      }),
      [name, labelCol, wrapperCol, disabled, layout],
    );

    const onFormFinishFailed = (errInfo: ValidateErrorEntity) => {
      onFinishFailed?.(errInfo);

      if (scrollToFirstError && errInfo.errorFields.length) {
        wrapForm.scrollToField(errInfo.errorFields[0].name);
      }
    };

    return (
      <FormContext.Provider value={formContextVals}>
        <RcForm
          // ref={formRef}
          id={name}
          name={name}
          onFinishFailed={onFormFinishFailed}
          form={wrapForm}
          className={formCls}
          {...restProps}
        />
      </FormContext.Provider>
    );
  },
);

Form.defaultProps = {
  scrollToFirstError: false,
  layout: 'horizontal',
  name: 'klein-form',
};

Form.displayName = 'Form';

export default Form;

export { useForm, FormInstance };
