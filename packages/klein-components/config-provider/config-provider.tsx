import React from 'react';
import type {
  ConfigConsumerProps} from './context';
import {
  ConfigContext,
  getPrefixClassName,
} from './context';
import i18n from '../i18n';

export interface ProviderProps {
  /** 国际化参数 */
  locale?: string;
  /** 配置所有组件样式前缀 */
  prefix?: string;
  /** 配置弹出组件挂载点 */
  getPopupContainer?: ConfigConsumerProps['getPopupContainer'];
  /** 配置元素大中小 */
  size?: 'small' | 'medium' | 'large';
}

const ConfigProvider: React.FC<ProviderProps> = (props) => {
  const {
    locale,
    children,
    prefix,
    getPopupContainer,
    size = 'medium',
  } = props;

  const resetGetPrefixClassName = (
    suffixCls?: string,
    customPrefix?: string,
  ) => {
    const endPrefix = prefix || 'klein';
    if (customPrefix) {
      return customPrefix;
    }
    return suffixCls ? `${endPrefix}-${suffixCls}` : endPrefix;
  };

  const config: Partial<ConfigConsumerProps> = {
    locale: locale ? i18n[locale] : i18n.zh_CN,
    getPrefixClassName,
    size,
  };

  if (prefix) {
    config.getPrefixClassName = resetGetPrefixClassName;
  }

  if (getPopupContainer) {
    config.getPopupContainer = getPopupContainer;
  }

  return (
    <ConfigContext.Provider value={config as ConfigConsumerProps}>
      {children}
    </ConfigContext.Provider>
  );
};

export default ConfigProvider;
