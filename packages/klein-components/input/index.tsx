import Input, { InputProps } from './input';
import Search, { SearchProps } from './search';
import TextArea, { TextAreaProps } from './textarea';
import Group, { GroupProps } from './group';

interface CompoundedComponent
  extends React.ForwardRefExoticComponent<
    InputProps & React.RefAttributes<HTMLElement>
  > {
  Search: typeof Search;
  TextArea: typeof TextArea;
  Group: typeof Group;
}

const CompoundedInput = Input as CompoundedComponent;
CompoundedInput.Search = Search;
CompoundedInput.TextArea = TextArea;
CompoundedInput.Group = Group;

export { InputProps, SearchProps, TextAreaProps, GroupProps };

export default CompoundedInput;
