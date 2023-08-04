import OriginForm, { FormProps, useForm, FormInstance } from './form';
import Item, { FormItemProps } from './form-item';
import { FormProvider } from './context';
import List from './form-list';
import ErrorList from './errorList';

type FormType = typeof OriginForm;

interface FormInterface extends FormType {
  Item: typeof Item;
  List: typeof List;
  useForm: typeof useForm;
  Provider: typeof FormProvider;
  ErrorList: typeof ErrorList;
}

const Form = OriginForm as FormInterface;

Form.Item = Item;
Form.List = List;
Form.useForm = useForm;
Form.Provider = FormProvider;
Form.ErrorList = ErrorList;

export { FormProps, FormItemProps, FormInstance };

export default Form;
