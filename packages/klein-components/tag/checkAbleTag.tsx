import React, { useState } from 'react';
import cx from 'classnames';
import { ConfigContext } from '../config-provider/context';
import type { ImageProps } from '../image';
import Image from '../image';
import { Icons } from '../components';

import type { TagProps } from './tag';
import Tag from './tag';

const { ChooseLine } = Icons;

export interface CheckAbleTagProps extends TagProps {
  /** 是否选中 */
  checked?: boolean;
  /** 辅助文案 */
  help?: React.ReactNode;
  /** 选择事件 */
  onChange?: (tag: string, checked: boolean) => void;
  /** 设置Image组件属性 */
  imageProps?: ImageProps;
}

const CheckAbleTag: React.FC<CheckAbleTagProps> = (props) => {
  const {
    checked,
    help,
    onChange,
    disabled,
    imageProps,
    className,
    ...reset
  } = props;
  const { getPrefixClassName } = React.useContext(ConfigContext);
  const tagPrefix = getPrefixClassName('tag');
  const [status, setStatus] = useState(checked);

  const checkAbleTagcls = cx(
    {
      [`${tagPrefix}-has-help`]: help,
      [`${tagPrefix}-has-image`]: imageProps && imageProps.src,
    },
    className,
  );

  if (typeof checked !== 'undefined' && checked !== status) {
    setStatus(checked);
  }

  const clickEvent = () => {
    if (disabled) return;
    onChange?.(props.children as string, !status);
    if (typeof checked === 'undefined') {
      setStatus(!status);
    }
  };

  return (
    <div
      onClick={clickEvent}
      className={cx(`${tagPrefix}-check-wrap`, {
        checked: status,
      })}
    >
      <Tag {...reset} disabled={disabled} className={checkAbleTagcls}>
        {imageProps && (
          <div className={`${tagPrefix}-img`}>
            <Image preview={false} {...imageProps} />
          </div>
        )}
        {props.children}
        {help && <div className={`${tagPrefix}-help`}>{help}</div>}
      </Tag>
      <div className={`${tagPrefix}-check-wrap-icon`}>
        <ChooseLine />
      </div>
    </div>
  );
};
CheckAbleTag.displayName = 'CheckAbleTag';
export default CheckAbleTag;
