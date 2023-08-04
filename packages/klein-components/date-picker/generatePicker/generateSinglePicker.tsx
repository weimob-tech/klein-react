import React from 'react';
import classNames from 'classnames';
// import CalendarOutlined from '@ant-design/icons/CalendarOutlined';
// import ClockCircleOutlined from '@ant-design/icons/ClockCircleOutlined';
// import CloseCircleFilled from '@ant-design/icons/CloseCircleFilled';
import RCPicker from '../../components/rc-picker';
import type { PickerMode } from '../../components/rc-picker/interface';
import type { GenerateConfig } from '../../components/rc-picker/generate/index';
import zhCN from '../locale/zh_CN';
import { getPlaceholder } from '../util';
// import devWarning from '../../_util/devWarning';
import type {
  ConfigConsumerProps} from '../../config-provider/context';
import {
  ConfigContext
} from '../../config-provider/context';
// import LocaleReceiver from '../../locale-provider/LocaleReceiver';
// import SizeContext from '../../config-provider/SizeContext';
import type {
  PickerProps,
  PickerLocale,
  PickerDateProps,
  PickerTimeProps} from '.';
import {
  getTimeProps,
  Components,
} from '.';
import Icon from '../../icon';
import Button from '../../button';

const { CalenderLine, TimeLine, CloseFill } = Icon;

export default function generatePicker<DateType>(
  generateConfig: GenerateConfig<DateType>,
) {
  type DatePickerProps = PickerProps<DateType>;

  function getPicker<InnerPickerProps extends DatePickerProps>(
    picker?: PickerMode,
    displayName?: string,
  ) {
    class Picker extends React.Component<
      InnerPickerProps & {
        pickWithTime?: boolean;
      }
    > {
      static contextType = ConfigContext;

      static displayName: string;

      context!: ConfigConsumerProps;

      pickerRef = React.createRef<RCPicker<DateType>>();

      // constructor(props: InnerPickerProps) {
      //   super(props);
      //   // devWarning(
      //   //   picker !== 'quarter',
      //   //   displayName!,
      //   //   `DatePicker.${displayName} is legacy usage. Please use DatePicker[picker='${picker}'] directly.`,
      //   // );
      // }

      focus = () => {
        if (this.pickerRef.current) {
          this.pickerRef.current.focus();
        }
      };

      blur = () => {
        if (this.pickerRef.current) {
          this.pickerRef.current.blur();
        }
      };

      getDefaultLocale = () => {
        const { locale } = this.props;
        const result = {
          ...zhCN,
          ...locale,
        };
        result.lang = {
          ...result.lang,
          ...((locale || {}) as PickerLocale).lang,
        };
        return result;
      };

      renderPicker = (locale: PickerLocale) => {
        const { getPrefixClassName, getPopupContainer, size } = this.context;
        const {
          prefixCls: customizePrefixCls,
          getPopupContainer: customizeGetPopupContainer,
          className,
          size: customizeSize,
          bordered = true,
          placeholder,
          pickWithTime,
          ...restProps
        } = this.props;
        const { format, showTime } = this.props as any;
        const prefixCls = getPrefixClassName('picker', customizePrefixCls);

        const additionalProps = {
          showToday: true,
        };

        let additionalOverrideProps: any = {};
        if (picker) {
          additionalOverrideProps.picker = picker;
        }
        const mergedPicker = picker || this.props.picker;

        additionalOverrideProps = {
          ...additionalOverrideProps,
          ...(showTime
            ? getTimeProps({ format, picker: mergedPicker, ...showTime })
            : {}),
          ...(mergedPicker === 'time'
            ? getTimeProps({ format, ...this.props, picker: mergedPicker })
            : {}),
        };

        const rootPrefixCls = getPrefixClassName();

        // return (
        //   <SizeContext.Consumer>
        //     {size => {
        //
        const mergedSize = customizeSize || size;
        return (
          <>
            <RCPicker<DateType>
              ref={this.pickerRef}
              placeholder={getPlaceholder(mergedPicker, locale, placeholder)}
              suffixIcon={
                mergedPicker === 'time' ? <TimeLine /> : <CalenderLine />
              }
              clearIcon={<CloseFill />}
              allowClear
              transitionName={`${rootPrefixCls}-slide-up`}
              {...additionalProps}
              {...restProps}
              {...additionalOverrideProps}
              locale={locale.lang}
              className={classNames(
                {
                  [`${prefixCls}-${mergedSize}`]: mergedSize,
                  [`${prefixCls}-borderless`]: !bordered,
                },
                className,
              )}
              prefixCls={prefixCls}
              getPopupContainer={
                customizeGetPopupContainer || getPopupContainer
              }
              generateConfig={generateConfig}
              prevIcon={<span className={`${prefixCls}-prev-icon`} />}
              nextIcon={<span className={`${prefixCls}-next-icon`} />}
              superPrevIcon={
                <span className={`${prefixCls}-super-prev-icon`} />
              }
              superNextIcon={
                <span className={`${prefixCls}-super-next-icon`} />
              }
              components={Components}
            />
          </>
        );
        //     }}
        //   </SizeContext.Consumer>
        // );
      };

      render() {
        return (
          // <LocaleReceiver componentName="DatePicker" defaultLocale={this.getDefaultLocale}>
          <>{this.renderPicker(this.getDefaultLocale())}</>
          // </LocaleReceiver>
        );
      }
    }

    if (displayName) {
      Picker.displayName = displayName;
    }

    return Picker as React.ComponentClass<InnerPickerProps>;
  }

  const DatePicker = getPicker<DatePickerProps>();
  const WeekPicker = getPicker<Omit<PickerDateProps<DateType>, 'picker'>>(
    'week',
    'WeekPicker',
  );
  const MonthPicker = getPicker<Omit<PickerDateProps<DateType>, 'picker'>>(
    'month',
    'MonthPicker',
  );
  const YearPicker = getPicker<Omit<PickerDateProps<DateType>, 'picker'>>(
    'year',
    'YearPicker',
  );
  const TimePicker = getPicker<Omit<PickerTimeProps<DateType>, 'picker'>>(
    'time',
    'TimePicker',
  );
  const QuarterPicker = getPicker<Omit<PickerTimeProps<DateType>, 'picker'>>(
    'quarter',
    'QuarterPicker',
  );
  return {
    DatePicker,
    WeekPicker,
    MonthPicker,
    YearPicker,
    TimePicker,
    QuarterPicker,
  };
}
