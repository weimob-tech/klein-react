import type { AbstractCheckboxGroupProps } from '../checkbox/checkbox-group';
import type { AbstractCheckboxProps } from '../checkbox/checkbox';
import type { RowProps, ColProps } from '../grid';

export type RadioGroupButtonStyle = 'outline' | 'solid';
export type RadioGroupOptionType = 'default' | 'button';

export interface RadioGroupProps extends AbstractCheckboxGroupProps {
  /** 选项组默认值 */
  defaultValue?: any;
  /** 选项组value */
  value?: any;
  /** name属性 */
  name?: string;
  /** 选项组回调 */
  onChange?: (e: RadioChangeEvent) => void;
  /** 选项子项类型 */
  optionType?: RadioGroupOptionType;
  /** 选项按钮样式 */
  buttonStyle?: RadioGroupButtonStyle;
  /** 大小，只对按钮样式生效 */
  size?: 'large' | 'default' | 'small';
  /** 控制内部radio是纵向还是横向排列 */
  direction?: 'vertical' | 'horizontal';
  colProps?: ColProps;
  /** 支持基础组件row的所有属性 */
  rowProps?: RowProps;
  id?: string | number;
  children?: React.ReactNode;
  onMouseEnter?: React.MouseEventHandler;
  onMouseLeave?: React.MouseEventHandler;
}

export interface RadioGroupContextProps {
  /** 选项组回调 */
  onChange: (e: RadioChangeEvent) => void;
  /** 选项组value */
  value: any;
  /** 是否禁用 */
  disabled?: boolean;
  /** 选项组名称 */
  name?: string;
  updateRadioType?: (type: RadioGroupProps['optionType']) => void;
}

export interface RadioProps extends AbstractCheckboxProps<RadioChangeEvent> {
  /** 显示类型 */
  showType?: string;
  type?: string;
}

export interface RadioChangeEventTarget extends RadioProps {
  /** 指定当前是否选中 */
  checked: boolean;
}

export interface RadioChangeEvent {
  target: RadioChangeEventTarget;
  stopPropagation: () => void;
  preventDefault: () => void;
  nativeEvent: MouseEvent;
}
