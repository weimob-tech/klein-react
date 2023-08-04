import React from 'react';

export interface GlobalContextProps {
  prefix?: string;
}

export interface MarkdownContextProps {
  demos: any[],
  demosMap: {
    [key: string]: React.LazyExoticComponent<React.FunctionComponent>
  }
}

export const GlobalContext = React.createContext<GlobalContextProps>({
  prefix: 'klein-pro',
});

export const MarkdownContext = React.createContext<MarkdownContextProps>({
  demos: [],
  demosMap: {}
});
