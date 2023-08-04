import React from 'react';
import classNames from 'classnames';
// import CalendarOutlined from '@ant-design/icons/CalendarOutlined';
// import ClockCircleOutlined from '@ant-design/icons/ClockCircleOutlined';
// import CloseCircleFilled from '@ant-design/icons/CloseCircleFilled';
// import SwapRightOutlined from '@ant-design/icons/SwapRightOutlined';
import { RangePicker as RCRangePicker } from '../../components/rc-picker';
import type { GenerateConfig } from '../../components/rc-picker/generate/index';
import zhCN from '../locale/zh_CN';
import type { ConfigConsumerProps } from '../../config-provider/context';
import { ConfigContext } from '../../config-provider/context';
import SizeContext from '../../config-provider/SizeContext';
// import LocaleReceiver from '../../locale-provider/LocaleReceiver';
import { getRangePlaceholder } from '../util';
import type { RangePickerProps, PickerLocale } from '.';
import { getTimeProps, Components } from '.';
import Icon from '../../icon';

const { CalenderLine, TimeLine, CloseFill } = Icon;

export default function generateRangePicker<DateType>(
  generateConfig: GenerateConfig<DateType>,
): React.ComponentClass<RangePickerProps<DateType>> {
  class RangePicker extends React.Component<RangePickerProps<DateType>> {
    static contextType = ConfigContext;

    static displayName = 'RangePicker';
    // @ts-ignore
    context!: ConfigConsumerProps;

    pickerRef = React.createRef<RCRangePicker<DateType>>();

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
        getPopupContainer: customGetPopupContainer,
        className,
        size: customizeSize,
        bordered = true,
        placeholder,
        ...restProps
      } = this.props;
      const { format, showTime, picker } = this.props as any;
      const prefixCls = getPrefixClassName('picker', customizePrefixCls);

      let additionalOverrideProps: any = {};

      additionalOverrideProps = {
        ...additionalOverrideProps,
        ...(showTime ? getTimeProps({ format, picker, ...showTime }) : {}),
        ...(picker === 'time'
          ? getTimeProps({ format, ...this.props, picker })
          : {}),
      };
      const rootPrefixCls = getPrefixClassName();
      const mergedSize = customizeSize || size;
      return (
        // <SizeContext.Consumer>
        //   {(size) => {
        //     const mergedSize = customizeSize || size;

        //     return (
        <RCRangePicker<DateType>
          separator={
            <span aria-label="to" className={`${prefixCls}-separator`}>
              -
            </span>
          }
          ref={this.pickerRef}
          placeholder={getRangePlaceholder(picker, locale, placeholder)}
          suffixIcon={picker === 'time' ? <TimeLine /> : <CalenderLine />}
          clearIcon={<CloseFill />}
          allowClear
          transitionName={`${rootPrefixCls}-slide-up`}
          {...restProps}
          {...additionalOverrideProps}
          className={classNames(
            {
              [`${prefixCls}-${mergedSize}`]: mergedSize,
              [`${prefixCls}-borderless`]: !bordered,
            },
            className,
          )}
          locale={locale!.lang}
          prefixCls={prefixCls}
          getPopupContainer={customGetPopupContainer || getPopupContainer}
          generateConfig={generateConfig}
          prevIcon={<span className={`${prefixCls}-prev-icon`} />}
          nextIcon={<span className={`${prefixCls}-next-icon`} />}
          superPrevIcon={<span className={`${prefixCls}-super-prev-icon`} />}
          superNextIcon={<span className={`${prefixCls}-super-next-icon`} />}
          components={Components}
          // direction={direction}
        />
        //   );
        // }}
        // </SizeContext.Consumer>
      );
    };

    render() {
      return (
        // <LocaleReceiver componentName="DatePicker" defaultLocale={this.getDefaultLocale}>
        <>{this.renderPicker(this.getDefaultLocale())}</>
        // </LocaleReceiver>
      );
    }
  }
  return RangePicker;
}
