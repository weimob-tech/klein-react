import * as React from 'react';
import { List } from '../components/rc-field-form';
import type {
  ValidatorRule,
  StoreValue,
} from '../components/rc-field-form/interface';
// import { ConfigContext } from '../config-provider/context'
// import { FormItemPrefixContext } from './context';

export interface FormListFieldData {
  name: number;
  key: number;
  fieldKey: number;
}

export interface FormListOperation {
  add: (defaultValue?: StoreValue, insertIndex?: number) => void;
  remove: (index: number | number[]) => void;
  move: (from: number, to: number) => void;
}

export interface FormListProps {
  prefixCls?: string;
  name: string | number | (string | number)[];
  rules?: ValidatorRule[];
  initialValue?: any[];
  className?: string;
  children: (
    fields: FormListFieldData[],
    operation: FormListOperation,
    meta: { errors: React.ReactNode[] },
  ) => React.ReactNode;
}

const FormList: React.FC<FormListProps> = ({
  prefixCls: customizePrefixCls,
  children,
  ...props
}) => {
  // const { getPrefixClassName } = React.useContext(ConfigContext);
  // const formPrefixCls = getPrefixClassName('form', customizePrefixCls);

  return (
    <List {...props}>
      {(fields, operation, meta) => (
        // <FormItemPrefixContext.Provider value={{ prefixCls, status: 'error' }}>
        <>
          {children(
            fields.map((field) => ({ ...field, fieldKey: field.key })),
            operation,
            {
              errors: meta.errors,
            },
          )}
        </>
        // </FormItemPrefixContext.Provider>
      )}
    </List>
  );
};

export default FormList;
