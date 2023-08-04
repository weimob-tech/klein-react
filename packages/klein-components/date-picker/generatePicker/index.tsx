import type React from 'react';
import type { GenerateConfig } from '../../components/rc-picker/generate/index';
import type {
  PickerBaseProps as RCPickerBaseProps,
  PickerDateProps as RCPickerDateProps,
  PickerTimeProps as RCPickerTimeProps,
  PickerColDateProps as RCPickerColDateProps,
} from '../../components/rc-picker/Picker';
import type { SharedTimeProps } from '../../components/rc-picker/panels/TimePanel';
import type {
  RangePickerBaseProps as RCRangePickerBaseProps,
  RangePickerDateProps as RCRangePickerDateProps,
  RangePickerTimeProps as RCRangePickerTimeProps,
} from '../../components/rc-picker/RangePicker';
import type {
  PickerMode,
  Locale as RcPickerLocale,
} from '../../components/rc-picker/interface';
import type { SizeType } from '../../config-provider/SizeContext';
import PickerButton from '../PickerButton';
import PickerTag from '../PickerTag';
// import { TimePickerLocale } from '../../time-picker';
import generateSinglePicker from './generateSinglePicker';
import generateRangePicker from './generateRangePicker';

export const Components = { button: PickerButton, rangeItem: PickerTag };

function toArray<T>(list: T | T[]): T[] {
  if (!list) {
    return [];
  }
  return Array.isArray(list) ? list : [list];
}

export function getTimeProps<DateType>(
  props: { format?: string; picker?: PickerMode } & SharedTimeProps<DateType>,
) {
  const {
    format,
    picker,
    showHour,
    showMinute,
    showSecond,
    use12Hours,
  } = props;

  const firstFormat = toArray(format)[0];
  const showTimeObj: SharedTimeProps<DateType> = { ...props };

  if (firstFormat && typeof firstFormat === 'string') {
    if (!firstFormat.includes('s') && showSecond === undefined) {
      showTimeObj.showSecond = false;
    }
    if (!firstFormat.includes('m') && showMinute === undefined) {
      showTimeObj.showMinute = false;
    }
    if (
      !firstFormat.includes('H') &&
      !firstFormat.includes('h') &&
      showHour === undefined
    ) {
      showTimeObj.showHour = false;
    }

    if (
      (firstFormat.includes('a') || firstFormat.includes('A')) &&
      use12Hours === undefined
    ) {
      showTimeObj.use12Hours = true;
    }
  }

  if (picker === 'time') {
    return showTimeObj;
  }

  if (typeof firstFormat === 'function') {
    // format of showTime should use default when format is custom format function
    delete showTimeObj.format;
  }

  return {
    showTime: showTimeObj,
  };
}

type InjectDefaultProps<Props> = Omit<
  Props,
  | 'locale'
  | 'generateConfig'
  | 'prevIcon'
  | 'nextIcon'
  | 'superPrevIcon'
  | 'superNextIcon'
  | 'hideHeader'
  | 'components'
> & {
  locale?: PickerLocale;
  size?: SizeType;
  bordered?: boolean;
  ranges?: any;
};

export type PickerLocale = {
  lang: RcPickerLocale & AdditionalPickerLocaleLangProps;
  timePickerLocale: any;
} & AdditionalPickerLocaleProps;

export type AdditionalPickerLocaleProps = {
  dateFormat?: string;
  dateTimeFormat?: string;
  weekFormat?: string;
  monthFormat?: string;
};

export type AdditionalPickerLocaleLangProps = {
  placeholder: string;
  yearPlaceholder?: string;
  quarterPlaceholder?: string;
  monthPlaceholder?: string;
  weekPlaceholder?: string;
  rangeYearPlaceholder?: string[];
  rangeMonthPlaceholder?: string[];
  rangeWeekPlaceholder?: string[];
  rangePlaceholder?: string[];
};

// Picker Props
export type PickerBaseProps<DateType> = InjectDefaultProps<
  RCPickerBaseProps<DateType>
>;
export type PickerDateProps<DateType> = InjectDefaultProps<
  RCPickerDateProps<DateType>
>;
export type PickerTimeProps<DateType> = InjectDefaultProps<
  RCPickerTimeProps<DateType>
>;
export type PickerColDateProps<DateType> = InjectDefaultProps<
  RCPickerColDateProps<DateType>
>;

export type PickerProps<DateType> =
  | PickerBaseProps<DateType>
  | PickerDateProps<DateType>
  | PickerTimeProps<DateType>
  | PickerColDateProps<DateType>;

// Range Picker Props
export type RangePickerBaseProps<DateType> = InjectDefaultProps<
  RCRangePickerBaseProps<DateType>
>;
export type RangePickerDateProps<DateType> = InjectDefaultProps<
  RCRangePickerDateProps<DateType>
>;
export type RangePickerTimeProps<DateType> = InjectDefaultProps<
  RCRangePickerTimeProps<DateType>
>;

export type RangePickerProps<DateType> =
  | RangePickerBaseProps<DateType>
  | RangePickerDateProps<DateType>
  | RangePickerTimeProps<DateType>;

function generatePicker<DateType>(generateConfig: GenerateConfig<DateType>) {
  // =========================== Picker ===========================
  const {
    DatePicker,
    WeekPicker,
    MonthPicker,
    YearPicker,
    TimePicker,
    QuarterPicker,
  } = generateSinglePicker(generateConfig);

  // ======================== Range Picker ========================
  const RangePicker = generateRangePicker(generateConfig);

  // =========================== Export ===========================
  type MergedDatePickerType = typeof DatePicker & {
    WeekPicker: typeof WeekPicker;
    MonthPicker: typeof MonthPicker;
    YearPicker: typeof YearPicker;
    RangePicker: React.ComponentClass<RangePickerProps<DateType>>;
    TimePicker: typeof TimePicker;
    QuarterPicker: typeof QuarterPicker;
  };

  const MergedDatePicker = DatePicker as MergedDatePickerType;
  MergedDatePicker.WeekPicker = WeekPicker;
  MergedDatePicker.MonthPicker = MonthPicker;
  MergedDatePicker.YearPicker = YearPicker;
  MergedDatePicker.RangePicker = RangePicker;
  MergedDatePicker.TimePicker = TimePicker;
  MergedDatePicker.QuarterPicker = QuarterPicker;

  return MergedDatePicker;
}

export default generatePicker;
