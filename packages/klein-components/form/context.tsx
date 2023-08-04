import React from 'react';
import omit from '../components/rc-util/omit';
import { FormProvider as RcFormProvider } from '../components/rc-field-form';
import type { FormProviderProps as RcFormProviderProps } from '../components/rc-field-form/FormContext';
import type { ColProps } from '../grid';
import type { FormProps } from './form';

export interface FormContextProps {
  // vertical: boolean;
  name?: string;
  colon?: boolean;
  // labelAlign?: FormLabelAlign;
  labelCol?: ColProps;
  wrapperCol?: ColProps;
  disabled?: boolean;
  layout?: FormProps['layout'];
  // requiredMark?: RequiredMark;
  // itemRef: (name: (string | number)[]) => (node: React.ReactElement) => void;
}

export interface FormItemContextProps {
  updateItemErrors: (
    name: string,
    errors: string[],
    originName: string,
  ) => void;
}

export interface FormItemPrefixContextProps {
  prefixCls: string;
  status?: 'success' | 'warning' | 'error' | 'validating' | '';
}

export interface FormProviderProps
  extends Omit<RcFormProviderProps, 'validateMessages'> {
  prefixCls?: string;
}

export const FormProvider: React.FC<FormProviderProps> = (props) => {
  const providerProps = omit(props, ['prefixCls']);
  return <RcFormProvider {...providerProps} />;
};

export const FormContext = React.createContext<FormContextProps>({
  // labelAlign: 'right',
  // vertical: false,
  // itemRef: (() => {}) as any,
});

export const FormItemContext = React.createContext<FormItemContextProps>({
  updateItemErrors: () => {},
});

export const FormItemPrefixContext = React.createContext<FormItemPrefixContextProps>(
  {
    prefixCls: '',
  },
);
