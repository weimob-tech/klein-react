// @ts-nocheck
import * as React from 'react';
import classNames from 'classnames';
import CSSMotion from '../components/rc-motion';
import useMemo from '../components/rc-util/hooks/useMemo';
import useCacheErrors from './hooks/useCacheErrors';
import useForceUpdate from '../utils/hooks/useForceUpdate';
import { FormItemPrefixContext } from './context';
import { ConfigContext } from '../config-provider/context';

const EMPTY_LIST: React.ReactNode[] = [];

export interface ErrorListProps {
  errors?: React.ReactNode[];
  help?: React.ReactNode;
  onDomErrorVisibleChange?: (visible: boolean) => void;
}

export default function ErrorList({
  errors = EMPTY_LIST,
  help,
  onDomErrorVisibleChange,
}: ErrorListProps) {
  const forceUpdate = useForceUpdate();
  const { prefixCls, status } = React.useContext(FormItemPrefixContext);
  const { getPrefixClassName } = React.useContext(ConfigContext);

  const [visible, cacheErrors] = useCacheErrors(
    errors,
    (changedVisible) => {
      if (changedVisible) {
        Promise.resolve().then(() => {
          onDomErrorVisibleChange?.(true);
        });
      }
      forceUpdate();
    },
    !!help,
  );

  const memoErrors = useMemo(
    () => cacheErrors,
    visible,
    (_, nextVisible) => nextVisible,
  );

  // Memo status in same visible
  const [innerStatus, setInnerStatus] = React.useState(status);
  React.useEffect(() => {
    if (visible && status) {
      setInnerStatus(status);
    }
  }, [visible, status]);

  const rootPrefixCls = getPrefixClassName();
  const baseClassName = `${rootPrefixCls}-form-item-error-tips`;

  return (
    <CSSMotion
      motionDeadline={500}
      visible={visible}
      motionName={`${rootPrefixCls}-show-help`}
      onLeaveEnd={() => {
        onDomErrorVisibleChange?.(false);
      }}
      motionAppear
      removeOnLeave
    >
      {({ className: motionClassName }: { className?: string }) => (
        <div
          className={classNames(
            baseClassName,
            {
              [`${baseClassName}-${innerStatus}`]: innerStatus,
            },
            motionClassName,
          )}
          key="help"
        >
          {memoErrors?.map((error, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <div key={index} role="alert">
              {error}
            </div>
          ))}
        </div>
      )}
    </CSSMotion>
  );
}
