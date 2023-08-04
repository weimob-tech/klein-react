import * as React from 'react';
import canUseDom from '../../rc-util/Dom/canUseDom';

export const useLayoutEffect = canUseDom()
  ? React.useLayoutEffect
  : React.useEffect;
