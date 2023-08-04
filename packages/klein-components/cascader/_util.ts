import {
  optionProps,
  CascaderOptionType,
  FilledFieldNamesType,
  CascaderValueType,
  CascaderProps,
  MutiCascaderValueType,
} from './cascader';

export interface NewOptionProps extends optionProps {
  parent?: NewOptionProps | null;
  children?: NewOptionProps[];
  [key: string]: any;
}

interface Opts {
  values: any[][];
  labels: string[][];
}

type FindOptionReturnType = NewOptionProps | null;

export function isReadOnly(
  showSearch: CascaderProps['showSearch'],
  readOnly: boolean,
) {
  if (typeof showSearch !== 'undefined') {
    return !showSearch;
  }
  return readOnly;
}

export function findOption(
  options: NewOptionProps[],
  targetVal: any,
  filedNames: FilledFieldNamesType,
): FindOptionReturnType {
  let target: FindOptionReturnType = null;
  function dfs(data: NewOptionProps[]) {
    for (let i = 0; i < data.length; i += 1) {
      if (!data[i]) continue;
      if (data[i][filedNames.value] === targetVal) {
        target = data[i];
      }
      if (data[i][filedNames.children]) {
        dfs(data[i][filedNames.children]!);
      }
    }
  }
  dfs(options);
  return target;
}

function valueIntoArr(key: 'values' | 'labels', value: any, opt: Opts) {
  opt[key].forEach((val) => {
    val.unshift(value);
  });
}

// 生成select的options
// 需要将当前value组装为 父value/value/子value
export function generateOpts(
  filedNames: FilledFieldNamesType,
  value: any[],
  data: NewOptionProps[],
) {
  if (!data || !data.length || !value) return [[], []];
  // 保存不同的value的路径
  const target = [] as CascaderOptionType[];
  // 记录已经存在的value，剪枝
  const map = new Map();
  const valuesMap = new Map();
  value.forEach((v) => {
    valuesMap.set(v, true);
  });

  let allCheckedValues: any[] = [];
  let allCheckedLabels: string[] = [];

  for (let i = 0; i < value.length; i += 1) {
    const curVal = value[i];
    if (map.has(curVal)) continue;
    const targetOpt = findOption(data, curVal, filedNames);
    // 保存当前value的子元素路径和父元素路径
    const opt: Opts = {
      values: [],
      labels: [],
    };
    // 全排列 回溯
    if (targetOpt) {
      map.set(targetOpt[filedNames.value], true);
      const childs = targetOpt[filedNames.children];
      const helper = (
        options: NewOptionProps[],
        values: any[],
        labels: string[],
      ) => {
        if (!options || !options.length) {
          // 所有数据必须在valuesMap中都存在
          for (let k = 0; k < values.length; k += 1) {
            if (!valuesMap.has(values[k])) {
              return;
            }
          }
          // 这里一定要拷贝
          opt.values.push([...values]);
          opt.labels.push([...labels]);
          return;
        }
        for (let j = 0; j < options.length; j += 1) {
          const item = options[j];
          map.set(item[filedNames.value], true);
          // 必须是valuesMap存在的值
          values.push(item[filedNames.value]);
          labels.push(item[filedNames.label]);
          helper(item[filedNames.children], values, labels);
          values.pop();
          labels.pop();
        }
      };
      helper(childs, [], []);

      // if (valuesMap.has(targetOpt[filedNames.value])) {
      // 拼接当前option的值
      valueIntoArr('values', targetOpt[filedNames.value], opt);
      valueIntoArr('labels', targetOpt[filedNames.label], opt);
      // }

      // 拼接当前option父级节点的值
      let p = targetOpt.parent;
      while (p) {
        map.set(p[filedNames.value], true);
        // if (valuesMap.has(p[filedNames.value])) {
        valueIntoArr('values', p[filedNames.value], opt);
        valueIntoArr('labels', p[filedNames.label], opt);
        // }
        p = p.parent;
      }
    }

    target.push(opt);
  }
  target.forEach((item) => {
    allCheckedValues = allCheckedValues.concat(item.values);
    allCheckedLabels = allCheckedLabels.concat(item.labels);
  });
  console.log('allCheckedValues...', allCheckedValues);

  return [allCheckedValues, allCheckedLabels];
}

// 重新组装options数据
export function traverseOptions(
  options: optionProps[],
  fieldNames: FilledFieldNamesType,
) {
  if (!options || !options.length) return [];

  function dfs(
    data: NewOptionProps[],
    prevNode: NewOptionProps | null,
    level: number,
  ) {
    return data.map((option) => {
      if (option) {
        const target: NewOptionProps = {
          [fieldNames.label]: option[fieldNames.label],
          [fieldNames.value]: option[fieldNames.value],
          [fieldNames.children]: option[fieldNames.children],
          disabled: option.disabled,
          parent: prevNode,
        };
        if (target[fieldNames.children]) {
          target[fieldNames.children] = dfs(
            target[fieldNames.children] as NewOptionProps[],
            target,
            level + 1,
          );
        }
        return target;
      }
      return option;
    });
  }

  return dfs(options, null, 0);
}

export function getSelectOpts(
  fields: FilledFieldNamesType,
  value: MutiCascaderValueType,
  options?: optionProps[],
): [optionProps[], (string | number)[]] {
  const selectOptions: optionProps[] = [];
  const selectVals: (string | number)[] = [];
  if (options && value) {
    const storeMap = new Map();
    value.forEach((keys) => {
      const opt = {} as optionProps;
      const labels: CascaderValueType[] = [];
      if (!keys.length) return;
      keys.forEach((key) => {
        let target = null;
        if (storeMap.has(key)) {
          target = storeMap.get(key);
        } else {
          target = findOption(options, key, fields);
          storeMap.set(key, target);
        }
        if (target) {
          labels.push(target[fields.label]);
        }
      });
      if (keys.length === labels.length) {
        opt.value = keys.join('/');
        opt.label = labels.join('/');
        selectVals.push(opt.value);
        selectOptions.push(opt);
      }
    });
  }
  return [selectOptions, selectVals];
}
