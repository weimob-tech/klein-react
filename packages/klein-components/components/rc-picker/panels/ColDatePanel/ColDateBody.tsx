// @ts-nocheck
import * as React from 'react';
import type { GenerateConfig } from '../../generate';
import type { Locale, OnSelect } from '../../interface';
import type { Unit } from './ColDateUnitColumn';
import ColDateUnitColumn from './ColDateUnitColumn';
import type { SharedColDateProps } from '.';

export type BodyOperationRef = {
  onUpDown: (diff: number) => void;
};

export type ColDateBodyProps<DateType> = {
  prefixCls: string;
  locale: Locale;
  generateConfig: GenerateConfig<DateType>;
  value?: DateType | null;
  onSelect: OnSelect<DateType>;
  activeColumnIndex: number;
  monthStep: number;
  dateStep: number;
  viewDate: any;
  disabledMonths?: () => number[];
  disabledDates?: () => number[];
  operationRef: React.MutableRefObject<BodyOperationRef | undefined>;
} & SharedColDateProps<DateType>;

function ColDateBody<DateType>(props: ColDateBodyProps<DateType>) {
  const {
    generateConfig,
    prefixCls,
    operationRef,
    activeColumnIndex,
    value,
    monthStep = 1,
    dateStep = 1,
    disabledMonths,
    disabledDates,
    hideDisabledOptions,
    onSelect,
    viewDate,
    locale,
  } = props;

  const monthsLocale: string[] =
    locale.shortMonths ||
    (generateConfig.locale.getShortMonths
      ? generateConfig.locale.getShortMonths(locale.locale)
      : []);

  const getCellTextMonth = (date) =>
    locale.monthFormat
      ? formatValue(date, {
          locale,
          format: locale.monthFormat,
          generateConfig,
        })
      : monthsLocale[generateConfig.getMonth(date)];

  const baseMonth = generateConfig.setMonth(viewDate, 0);
  const baseDate = generateConfig.setDate(viewDate, 1);

  const monthLastDate = generateConfig.getEndDate(viewDate).format('DD');

  const getCellTextDate = (date) => generateConfig.getDate(date);

  const generateUnitsColDate = (
    start: number,
    end: number,
    step: number,
    disabledUnits: number[] | undefined,
    type: string,
  ) => {
    const units: Unit[] = [];
    for (let i = start; i <= end; i += step) {
      if (type === 'month') {
        const getEachMonth = generateConfig.addMonth(baseMonth, i);
        units.push({
          label: getCellTextMonth(getEachMonth),
          value: getEachMonth,
          indexValue: i,
          disabled: (disabledUnits || []).includes(i + 1),
        });
      } else {
        const currentDate = generateConfig.addDate(baseDate, i);
        units.push({
          label: getCellTextDate(currentDate),
          value: currentDate,
          indexValue: i + 1,
          disabled: (disabledUnits || []).includes(i + 1),
        });
      }
    }
    return units;
  };

  const columns: {
    node: React.ReactElement;
    value: number;
    units: Unit[];
    onSelect: (diff: number) => void;
  }[] = [];
  const contentPrefixCls = `${prefixCls}-content`;
  const columnPrefixCls = `${prefixCls}-time-panel`;

  const _month = value || generateConfig.setMonth(generateConfig.getNow(), 0); // szp
  const _date = value || generateConfig.setDate(generateConfig.getNow(), 1); // szp

  const setChooseDate = (chooseMonth: number, chooseDate: number) => {
    let newDate = value || generateConfig.getNow();

    const chooseMonthNum = generateConfig.getMonth(chooseMonth);
    const chooseDateNum = generateConfig.getDate(chooseDate);

    newDate = generateConfig.setMonth(newDate, chooseMonthNum);
    newDate = generateConfig.setDate(newDate, chooseDateNum);

    return newDate;
  };

  const months = generateUnitsColDate(
    0,
    11,
    monthStep,
    disabledMonths && disabledMonths(),
    'month',
  );

  const dates = generateUnitsColDate(
    0,
    monthLastDate - 1,
    dateStep,
    disabledDates && disabledDates(_date),
    'date',
  );

  // ====================== Operations ======================
  operationRef.current = {
    onUpDown: (diff) => {
      const column = columns[activeColumnIndex];
      if (column) {
        const valueIndex = column.units.findIndex(
          (unit) => unit.value === column.value,
        );

        const unitLen = column.units.length;
        for (let i = 1; i < unitLen; i += 1) {
          const nextUnit =
            column.units[(valueIndex + diff * i + unitLen) % unitLen];

          if (nextUnit.disabled !== true) {
            column.onSelect(nextUnit.value);
            break;
          }
        }
      }
    },
  };

  // ======================== Render ========================
  function addColumnNode(
    condition: boolean | undefined,
    node: React.ReactElement,
    columnValue: number,
    units: Unit[],
    onColumnSelect: (diff: number) => void,
  ) {
    if (condition !== false) {
      columns.push({
        node: React.cloneElement(node, {
          prefixCls: columnPrefixCls,
          value: columnValue,
          active: activeColumnIndex === columns.length,
          onSelect: onColumnSelect,
          units,
          hideDisabledOptions,
        }),
        onSelect: onColumnSelect,
        value: columnValue,
        units,
      });
    }
  }
  // Month  szp
  addColumnNode(
    true,
    <ColDateUnitColumn
      key="month"
      dateDype="month"
      generateConfig={generateConfig}
    />,
    _month,
    months,
    (num) => {
      onSelect(setChooseDate(num, _date), 'mouse');
    },
  );
  // Date  szp
  addColumnNode(
    true,
    <ColDateUnitColumn
      key="date"
      dateDype="date"
      generateConfig={generateConfig}
    />,
    _date,
    dates,
    (num) => {
      onSelect(setChooseDate(_month, num), 'mouse');
    },
  );

  return (
    <div className={contentPrefixCls}>{columns.map(({ node }) => node)}</div>
  );
}

export default ColDateBody;
