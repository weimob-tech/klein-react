import * as React from 'react';
import classNames from 'classnames';
import omit from '../components/rc-util/omit';
import type { CheckboxChangeEvent } from './checkbox';
import Checkbox from './checkbox';
import type { RowProps, ColProps } from '../grid';
import Grid from '../grid';
import { ConfigContext } from '../config-provider/context';

const { Row, Col } = Grid;

export type CheckboxValueType = string | number | boolean;

export interface CheckboxOptionType {
  /** 选项label */
  label: React.ReactNode;
  /** 选项value */
  value: CheckboxValueType;
  /** 选项自定义样式 */
  style?: React.CSSProperties;
  /** 选项是否禁用 */
  disabled?: boolean;
  /** 选项回调 */
  onChange?: (e: CheckboxChangeEvent) => void;
}

export interface AbstractCheckboxGroupProps {
  /** 自定义样式前缀 */
  prefixCls?: string;
  /** 自定义class */
  className?: string;
  /** 指定可选项 */
  options?: (CheckboxOptionType | string)[];
  /** 是否整组失效 */
  disabled?: boolean;
  /** 自定义样式 */
  style?: React.CSSProperties;
}

export interface CheckboxGroupProps extends AbstractCheckboxGroupProps {
  /** Group名称 */
  name?: string;
  /** 默认选中的选项 */
  defaultValue?: CheckboxValueType[];
  /** 指定选中的选项 */
  value?: CheckboxValueType[];
  /** 变化时回调函数 */
  onChange?: (checkedValue: CheckboxValueType[]) => void;
  /** 控制内部checkbox是纵向还是横向排列 */
  direction?: 'vertical' | 'horizontal';
  rowProps?: RowProps;
  colProps?: ColProps;
  children?: React.ReactNode;
}

export interface CheckboxGroupContext {
  name?: string;
  toggleOption?: (option: CheckboxOptionType) => void;
  value?: any;
  disabled?: boolean;
  registerValue: (val: string) => void;
  cancelValue: (val: string) => void;
}

export const GroupContext = React.createContext<CheckboxGroupContext | null>(
  null,
);

export const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  defaultValue,
  children,
  options = [],
  prefixCls: customizePrefixCls,
  className,
  style,
  onChange,
  rowProps,
  colProps,
  direction,
  ...restProps
}) => {
  const { getPrefixClassName } = React.useContext(ConfigContext);
  let RestChildren = children;
  const [value, setValue] = React.useState<CheckboxValueType[]>(
    restProps.value || defaultValue || [],
  );
  const [registeredValues, setRegisteredValues] = React.useState<
    CheckboxValueType[]
  >([]);

  React.useEffect(() => {
    if ('value' in restProps) {
      setValue(restProps.value || []);
    }
  }, [restProps.value]);

  const getOptions = () =>
    options.map((option) => {
      if (typeof option === 'string') {
        return {
          label: option,
          value: option,
        };
      }
      return option;
    });

  const cancelValue = (val: string) => {
    setRegisteredValues((prevValues) => prevValues.filter((v) => v !== val));
  };

  const registerValue = (val: string) => {
    setRegisteredValues((prevValues) => [...prevValues, val]);
  };

  const toggleOption = (option: CheckboxOptionType) => {
    const optionIndex = value.indexOf(option.value);
    const newValue = [...value];
    if (optionIndex === -1) {
      newValue.push(option.value);
    } else {
      newValue.splice(optionIndex, 1);
    }
    if (!('value' in restProps)) {
      setValue(newValue);
    }
    if (onChange) {
      const opts = getOptions();
      onChange(
        newValue
          .filter((val) => registeredValues.indexOf(val) !== -1)
          .sort((a, b) => {
            const indexA = opts.findIndex((opt) => opt.value === a);
            const indexB = opts.findIndex((opt) => opt.value === b);
            return indexA - indexB;
          }),
      );
    }
  };

  const prefixCls = getPrefixClassName('checkbox', customizePrefixCls);
  const groupPrefixCls = `${prefixCls}-group`;

  const domProps = omit(restProps, ['value', 'disabled']);

  if (options && options.length > 0) {
    RestChildren = getOptions().map((option, index) => (
      <Checkbox
        prefixCls={prefixCls}
        key={option.value.toString()}
        disabled={'disabled' in option ? option.disabled : restProps.disabled}
        value={option.value}
        checked={value.indexOf(option.value) !== -1}
        onChange={option.onChange}
        className={`${groupPrefixCls}-item`}
        style={option.style}
      >
        {option.label}
      </Checkbox>
    ));
  }

  const context = {
    toggleOption,
    value,
    disabled: restProps.disabled,
    name: restProps.name,
    registerValue,
    cancelValue,
  };

  const classString = classNames(groupPrefixCls, className);
  const rowCls = classNames(rowProps?.className, {
    [`${groupPrefixCls}-row-vertical`]: direction === 'vertical',
  });
  const rowGutter = direction === 'vertical' ? [0, 20] : [32];
  return (
    <div className={classString} style={style} {...domProps}>
      <GroupContext.Provider value={context}>
        <Row gutter={rowGutter} className={rowCls} {...rowProps}>
          {React.Children.map(RestChildren, (item, index) =>
            /* eslint-disable react/no-array-index-key */
            item ? (
              <Col key={index} {...colProps}>
                {item}
              </Col>
            ) : null,
          )}
        </Row>
      </GroupContext.Provider>
    </div>
  );
};

export default React.memo(CheckboxGroup);
