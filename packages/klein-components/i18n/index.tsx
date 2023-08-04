import ZH_CN from './zh_CN';
import EN_US from './en_US';
import type { LocaleProps } from './locale';

export type I18n = Record<string, LocaleProps>;

const i18n: I18n = {
  ZH_CN,
  EN_US,
};

export default i18n;
