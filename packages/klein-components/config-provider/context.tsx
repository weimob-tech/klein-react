import { createContext } from 'react';
import type { LocaleProps } from '../i18n/locale';

export type DirectionType = 'ltr' | 'rtl' | undefined;
export interface ConfigConsumerProps {
  rootPrefixCls?: string;
  getPrefixClassName: (
    suffixCls?: string,
    customizePrefixCls?: string,
    rootPrefixCls?: string,
  ) => string;
  locale?: LocaleProps;
  size?: 'small' | 'medium' | 'large';
  direction?: DirectionType;
  getPopupContainer?: (triggerNode?: HTMLElement) => HTMLElement;
}

export const getPrefixClassName = (
  suffixCls?: string,
  customPrefix?: string,
  rootPrefixCls?: string,
) => {
  if (customPrefix) {
    return customPrefix;
  }
  const rootCls = rootPrefixCls || 'klein';
  return suffixCls ? `${rootCls}-${suffixCls}` : `${rootCls}`;
};

export const ConfigContext = createContext<ConfigConsumerProps>({
  getPrefixClassName,
  size: 'medium',
  direction: 'ltr',
});
