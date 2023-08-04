import React from 'react';

export const getCurIcon = (
  Icons: Record<string, React.ForwardRefExoticComponent<
      any & React.RefAttributes<HTMLSpanElement>
    >>,
  type: string,
  isFill?: boolean,
  extraProps?: object,
) => {
  if (!type) return null;
  const upperCaseType = type?.replace(/(^.{1})/, ($1) => $1.toUpperCase());
  const iconType = isFill ? 'Fill' : 'Line';
  const Comp = Icons[upperCaseType + iconType];
  return <Comp {...extraProps} />;
};
