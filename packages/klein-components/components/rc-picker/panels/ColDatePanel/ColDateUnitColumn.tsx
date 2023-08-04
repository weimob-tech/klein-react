// @ts-nocheck
import * as React from 'react';
import { useRef, useLayoutEffect } from 'react';
import classNames from 'classnames';
import { scrollTo, waitElementReady } from '../../utils/uiUtil';
import PanelContext from '../../PanelContext';

export type Unit = {
  label: React.ReactText;
  value: number;
  disabled: boolean;
};

export type ConDateUnitColumnProps = {
  prefixCls?: string;
  units?: Unit[];
  value?: number;
  active?: boolean;
  hideDisabledOptions?: boolean;
  onSelect?: (value: number) => void;
};

function ColDateUnitColumn(props: ConDateUnitColumnProps) {
  const {
    prefixCls,
    units,
    onSelect,
    value,
    active,
    hideDisabledOptions,
    generateConfig,
    dateDype,
  } = props;
  const cellPrefixCls = `${prefixCls}-cell`;
  const { open } = React.useContext(PanelContext);
  // console.log('==========>generateConfig: ', generateConfig); // szp
  const ulRef = useRef<HTMLUListElement>(null);
  const liRefs = useRef<Map<number, HTMLElement | null>>(new Map());
  const scrollRef = useRef<Function>();

  const dateTypeToNumber = (value) => {
    if (dateDype === 'month') {
      return generateConfig.getMonth(value);
    } else {
      return generateConfig.getDate(value);
    }
  };
  // `useLayoutEffect` here to avoid blink by duration is 0
  useLayoutEffect(() => {
    const li = liRefs.current.get(dateTypeToNumber(value)!);
    if (li && open !== false) {
      scrollTo(ulRef.current!, li.offsetTop, 120);
    }
  }, [value]);

  useLayoutEffect(() => {
    if (open) {
      const li = liRefs.current.get(dateTypeToNumber(value)!);
      if (li) {
        scrollRef.current = waitElementReady(li, () => {
          scrollTo(ulRef.current!, li.offsetTop, 0);
        });
      }
    }

    return () => {
      scrollRef.current?.();
    };
  }, [open]);
  // console.log('==========>units: ', units); // szp
  return (
    <ul
      className={classNames(`${prefixCls}-column`, {
        [`${prefixCls}-column-active`]: active,
      })}
      ref={ulRef}
      style={{ position: 'relative' }}
    >
      {units!.map((unit) => {
        if (hideDisabledOptions && unit.disabled) {
          return null;
        }

        let indexValue;
        if (typeof unit.label === 'string') {
          indexValue = generateConfig.getMonth(value);
        } else {
          indexValue = generateConfig.getDate(value);
        }
        return (
          <li
            key={unit.indexValue}
            ref={(element) => {
              liRefs.current.set(unit.indexValue, element);
            }}
            className={classNames(cellPrefixCls, {
              [`${cellPrefixCls}-disabled`]: unit.disabled,
              [`${cellPrefixCls}-selected`]: indexValue === unit.indexValue,
            })}
            onClick={() => {
              if (unit.disabled) {
                return;
              }
              onSelect!(unit.value);
            }}
          >
            <div className={`${cellPrefixCls}-inner`}>{unit.label}</div>
          </li>
        );
      })}
    </ul>
  );
}

export default ColDateUnitColumn;
