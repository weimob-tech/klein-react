import React, { useContext } from 'react';
import { ConfigContext } from '../config-provider/context';

interface BreadcrumbSeparatorInterface {
  children?: React.ReactNode;
}
const BreadcrumbSeparator: React.FC<BreadcrumbSeparatorInterface> = ({
  children,
}) => {
  const { getPrefixClassName } = useContext(ConfigContext);
  const breadcrumbCla = getPrefixClassName('bread-crumb');

  return (
    <span className={`${breadcrumbCla}-separator`}>{children || '/'}</span>
  );
};

export default BreadcrumbSeparator;
