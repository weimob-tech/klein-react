import React from 'react';

export interface TreeContextProps {
  direction?: 'horizontal' | 'vertical';
  onNodeSelect?: (selectedKeysValue: React.Key) => void;
}

const TreeContext = React.createContext<TreeContextProps>({});

export default TreeContext;
