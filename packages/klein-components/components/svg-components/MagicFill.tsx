import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const MagicFill = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-magicFill`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" ><path d="M12.218 9.705a.3.3 0 01.521-.069l.037.069.663 1.681a.3.3 0 00.115.14l.054.029 1.682.663a.3.3 0 01.068.521l-.068.037-1.682.663a.3.3 0 00-.14.115l-.029.054-.663 1.682a.3.3 0 01-.52.068l-.038-.068-.663-1.682a.3.3 0 00-.114-.14l-.055-.029-1.681-.663a.3.3 0 01-.069-.52l.069-.038 1.681-.663a.3.3 0 00.14-.114l.029-.055.663-1.681zM6.032 1.177a.5.5 0 01.888-.084l.042.084 1.294 3.28a.5.5 0 00.208.245l.074.036 3.28 1.294a.5.5 0 01.084.888l-.084.042-3.28 1.294a.5.5 0 00-.246.208l-.036.074-1.294 3.28a.5.5 0 01-.888.084l-.042-.084-1.294-3.28a.5.5 0 00-.207-.246l-.074-.036-3.28-1.294a.5.5 0 01-.084-.888l.084-.042 3.28-1.294a.5.5 0 00.245-.207l.036-.074 1.294-3.28z" fill="currentColor" fillRule="nonzero" /></svg></span>;
});
MagicFill.displayName = "MagicFill";
export default MagicFill;