import React from 'react';

const ResponsiveMap: BreakpointMap = {
  xs: '(max-width: 575px)',
  sm: '(min-width: 576px)',
  md: '(min-width: 768px)',
  lg: '(min-width: 992px)',
  xl: '(min-width: 1200px)',
  xxl: '(min-width: 1600px)',
};

export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
export type GutterContent = Partial<Record<Breakpoint, number>> | number;
export type BreakpointMap = Record<Breakpoint, string>;
export type GutterType = GutterContent | GutterContent[];
interface MqlListenerMapContent {
  mql: MediaQueryList;
  listener: ((this: MediaQueryList, ev: MediaQueryListEvent) => any) | null;
}
type MqlListenerMapType = Record<Breakpoint, MqlListenerMapContent>;

const mqlListenerMap = {} as MqlListenerMapType;

function useResponsive() {
  const [
    activeBreakpoint,
    setActiveBreakpoint,
  ] = React.useState<Breakpoint | null>(null);

  function initMediaListeners() {
    Object.keys(ResponsiveMap).forEach((breakpoint) => {
      const mql = window.matchMedia(ResponsiveMap[breakpoint as Breakpoint]);
      const listener = ({ matches }: { matches: boolean }) => {
        if (matches) {
          setActiveBreakpoint(breakpoint as Breakpoint);
        }
      };
      listener(mql);
      if (!mql.addListener) {
        mql.addEventListener('change', listener);
      } else {
        mql.addListener(listener);
      }
      mqlListenerMap[breakpoint as Breakpoint] = {
        mql,
        listener,
      };
    });
  }

  function removeListeners() {
    Object.keys(mqlListenerMap).forEach((breakpoint) => {
      const { mql, listener } = mqlListenerMap[breakpoint as Breakpoint];
      if (listener) {
        if (!mql.removeListener) {
          mql.removeEventListener('change', listener);
        } else {
          mql.removeListener(listener);
        }
      }
    });
  }

  React.useEffect(() => {
    initMediaListeners();
    return removeListeners;
  }, []);

  return [activeBreakpoint];
}

export default useResponsive;
