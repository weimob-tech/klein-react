import type React from 'react';
import { Icons } from '../components';

type value = React.ForwardRefExoticComponent<
  any & React.RefAttributes<HTMLSpanElement>
>;

type AllIconsType = Record<string, value>;

export interface IconType {
  (): null;
  [key: string]: value;
}

const Icon = function () {
  return null;
} as IconType;

Object.keys(Icons).forEach((v) => {
  if (v) {
    Icon[v] = (Icons as AllIconsType)[v];
  }
});

export default Icon;
