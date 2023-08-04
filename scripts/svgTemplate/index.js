const templateCode = `
  import React from 'react';
  import { getPrefixClassName } from '../../config-provider/context';
  import cx from 'classnames'

  export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
    prefixCls: string
  }

  const COMPONENT_NAME = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {

    const { prefixCls, className, ...reset } = props
    const iconPrefix = getPrefixClassName('icon', prefixCls)
  
    return JSX
  });

  COMPONENT_NAME.displayName = COMPONENT_DISPLAY_NAME
  
  export default COMPONENT_NAME;
`;

function template({ template }, opts, { componentName, jsx }) {
  const tsTpl = template.smart(templateCode, {
    plugins: ['typescript'],
    preserveComments: true,
  });

  return tsTpl({
    COMPONENT_NAME: componentName,
    COMPONENT_DISPLAY_NAME: JSON.stringify(componentName.name),
    JSX: jsx,
  });
}

module.exports = template;
