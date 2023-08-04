import type * as React from 'react';
import type { ColumnType } from './interface';
import type { ColumnProps } from './Column';

export interface ColumnGroupProps<RecordType>
  extends Omit<ColumnType<RecordType>, 'children'> {
  children:
    | React.ReactElement<ColumnProps<RecordType>>
    | React.ReactElement<ColumnProps<RecordType>>[];
}

/* istanbul ignore next */
/** This is a syntactic sugar for `columns` prop. So HOC will not work on this. */
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function ColumnGroup<RecordType>(_: ColumnGroupProps<RecordType>) {
  return null;
}

export default ColumnGroup;
