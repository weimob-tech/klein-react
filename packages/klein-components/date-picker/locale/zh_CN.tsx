import CalendarLocale from '../../components/rc-picker/locale/zh_CN';
// import TimePickerLocale from '../../time-picker/locale/zh_CN';
import type { PickerLocale } from '../generatePicker';

// 统一合并为完整的 Locale
const locale: PickerLocale = {
  lang: {
    placeholder: '请选择日期',
    yearPlaceholder: '请选择年份',
    quarterPlaceholder: '请选择季度',
    monthPlaceholder: '请选择月份',
    weekPlaceholder: '请选择周',
    rangePlaceholder: ['开始日期', '结束日期'],
    rangeYearPlaceholder: ['开始年份', '结束年份'],
    rangeMonthPlaceholder: ['开始月份', '结束月份'],
    rangeWeekPlaceholder: ['开始周', '结束周'],
    ...CalendarLocale,
  },
  timePickerLocale: {
    placeholder: '请选择时间',
    rangePlaceholder: ['开始时间', '结束时间'],
  },
};

// should add whitespace between char in Button
locale.lang.ok = '确 定';

export default locale;
