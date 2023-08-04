import React from 'react';
import Icon from '../../icon';
// @ts-ignore
import loadingGif from '../../spin/gif/loading-basic-gray.gif';

const {
  DownLine,
  LoadingLine,
  ChooseLine,
  CloseLine,
  CloseFill,
  SearchLine,
} = Icon;

export interface IconMap {
  suffixIcon?: React.ReactNode;
  clearIcon?: React.ReactNode;
  menuItemSelectedIcon?: React.ReactNode;
  loading?: boolean;
  multiple?: boolean;
  removeIcon?: React.ReactNode;
  preCls: string;
  size?: string;
  removeOptions?: any;
}

const GetIcons = (props: IconMap) => {
  const {
    suffixIcon,
    clearIcon,
    menuItemSelectedIcon,
    loading,
    multiple,
    removeIcon,
    preCls,
    size,
    removeOptions,
  } = props;

  // replace clearIcon
  let mergedClearIcon = clearIcon;
  if (!clearIcon) {
    mergedClearIcon = React.createElement(CloseFill, null);
  }

  // replace suffixIcon
  let mergedSuffixIcon = null;
  if (suffixIcon !== undefined) {
    mergedSuffixIcon = suffixIcon;
  } else if (loading) {
    // mergedSuffixIcon = React.createElement(LoadingLine, {
    //   // spin: true,
    // });
    const sizeSty = '16px';
    mergedSuffixIcon = (
      <img
        src={loadingGif}
        style={{ width: sizeSty, marginTop: -3, verticalAlign: 'middle' }}
        alt="加载中。。。。"
      />
    );
  } else {
    const iconCls = ''.concat(preCls, '-suffix');
    mergedSuffixIcon = (ref: any) => {
      const { open, showSearch } = ref;

      if (open && showSearch) {
        return React.createElement(SearchLine, {
          className: iconCls,
        });
      }

      return React.createElement(DownLine, {
        className: iconCls,
      });
    };
  }

  let mergedItemIcon = null;
  // if (menuItemSelectedIcon !== undefined) {
  //   mergedItemIcon = menuItemSelectedIcon;
  // } else if (multiple) {
  //   mergedItemIcon = React.createElement(ChooseLine, null);
  // } else {
  //   mergedItemIcon = null;
  // }
  if (menuItemSelectedIcon !== undefined) {
    mergedItemIcon = menuItemSelectedIcon;
  } else {
    mergedItemIcon = React.createElement(ChooseLine, null);
  }

  // replace removeIcon
  let mergedRemoveIcon = null;
  if (removeIcon !== undefined) {
    mergedRemoveIcon = removeIcon;
  } else {
    mergedRemoveIcon = React.createElement(CloseLine, null);
  }

  return {
    clearIcon: mergedClearIcon,
    suffixIcon: mergedSuffixIcon,
    itemIcon: mergedItemIcon,
    removeIcon: mergedRemoveIcon,
  };
};

export default GetIcons;
