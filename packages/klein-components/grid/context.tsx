import React from 'react';

export interface GridContextProps {
  gutters?: number[];
}

const GridContext = React.createContext<GridContextProps>({});

export default GridContext;
