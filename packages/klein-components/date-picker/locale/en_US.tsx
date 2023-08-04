import CalendarLocale from '../../components/rc-picker/locale/en_US';
// import TimePickerLocale from '../../time-picker/locale/en_US';
import type { PickerLocale } from '../generatePicker';

// Merge into a locale object
const locale: PickerLocale = {
  lang: {
    placeholder: 'Select date',
    yearPlaceholder: 'Select year',
    quarterPlaceholder: 'Select quarter',
    monthPlaceholder: 'Select month',
    weekPlaceholder: 'Select week',
    rangePlaceholder: ['Start date', 'End date'],
    rangeYearPlaceholder: ['Start year', 'End year'],
    rangeMonthPlaceholder: ['Start month', 'End month'],
    rangeWeekPlaceholder: ['Start week', 'End week'],
    ...CalendarLocale,
  },
  timePickerLocale: {
    placeholder: 'Select time',
    rangePlaceholder: ['Start time', 'End time'],
  },
};

export default locale;
