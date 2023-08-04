// @ts-nocheck
import * as React from 'react';
import classNames from 'classnames';
import ColDateHeader from './ColDateHeader';
import type { BodyOperationRef } from './ColDateBody';
import ColDateBody from './ColDateBody';
import type { PanelSharedProps, DisabledTimes } from '../../interface';
import { createKeyDownHandler } from '../../utils/uiUtil';

export type SharedColDateProps<DateType> = {
  format?: string;
  showNow?: boolean;
  showHour?: boolean;
  showMinute?: boolean;
  showSecond?: boolean;
  use12Hours?: boolean;
  hourStep?: number;
  minuteStep?: number;
  secondStep?: number;
  hideDisabledOptions?: boolean;
  defaultValue?: DateType;
} & DisabledTimes;

export type ColDatePanelProps<DateType> = {
  format?: string;
  active?: boolean;
} & PanelSharedProps<DateType> &
  SharedColDateProps<DateType>;

const countBoolean = (boolList: (boolean | undefined)[]) =>
  boolList.filter((bool) => bool !== false).length;

function ColDatePanel<DateType>(props: ColDatePanelProps<DateType>) {
  const {
    generateConfig,
    format = 'YY:MM:DD',
    prefixCls,
    active,
    operationRef,
    showHour,
    showMinute,
    showSecond,
    use12Hours = false,
    onSelect,
    value,
  } = props;
  const panelPrefixCls = `${prefixCls}-time-panel`;
  const bodyOperationRef = React.useRef<BodyOperationRef>();

  // ======================= Keyboard =======================
  const [activeColumnIndex, setActiveColumnIndex] = React.useState(-1);
  const columnsCount = countBoolean([
    showHour,
    showMinute,
    showSecond,
    use12Hours,
  ]);

  operationRef.current = {
    onKeyDown: (event) =>
      createKeyDownHandler(event, {
        onLeftRight: (diff) => {
          setActiveColumnIndex(
            (activeColumnIndex + diff + columnsCount) % columnsCount,
          );
        },
        onUpDown: (diff) => {
          if (activeColumnIndex === -1) {
            setActiveColumnIndex(0);
          } else if (bodyOperationRef.current) {
            bodyOperationRef.current.onUpDown(diff);
          }
        },
        onEnter: () => {
          onSelect(value || generateConfig.getNow(), 'key');
          setActiveColumnIndex(-1);
        },
      }),

    onBlur: () => {
      setActiveColumnIndex(-1);
    },
  };

  return (
    <div
      className={classNames(panelPrefixCls, {
        [`${panelPrefixCls}-active`]: active,
      })}
    >
      <ColDateHeader {...props} format={format} prefixCls={prefixCls} />
      <ColDateBody
        {...props}
        prefixCls={prefixCls}
        activeColumnIndex={activeColumnIndex}
        operationRef={bodyOperationRef}
      />
    </div>
  );
}

export default ColDatePanel;
