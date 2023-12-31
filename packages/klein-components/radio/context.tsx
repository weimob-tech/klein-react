import * as React from 'react';
import type { RadioGroupContextProps } from './interface';

const RadioGroupContext = React.createContext<RadioGroupContextProps | null>(
  null,
);

export const RadioGroupContextProvider = RadioGroupContext.Provider;

export default RadioGroupContext;
