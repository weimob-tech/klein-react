import React, { useEffect, useRef } from 'react';
import raf from '../components/rc-util/delayRaf';
import { getPrefixClassName } from '../config-provider/context';

let styleTag: HTMLStyleElement | null;
export interface RippleProps {
  children: any;
}

interface RippleAnimationProps {
  isStart: boolean;
  animationId: number | null;
  timeoutId: number | null;
  onAnimationStart: (e: AnimationEvent) => void;
  onAnimationEnd: (e: AnimationEvent) => void;
}

const animationAttr = `${getPrefixClassName('')}-ripple-animation`;

const Ripple: React.FC<RippleProps> = (props) => {
  const { children } = props;
  let cnode: HTMLElement | null = null;
  let curNode: HTMLElement;
  const newChild = React.cloneElement(children, {
    className: children.props.className,
    ref: (node: HTMLElement) => {
      cnode = node;
    },
  });

  const rippleAnimation = useRef<RippleAnimationProps>({
    isStart: false,
    animationId: null,
    timeoutId: null,
    onAnimationStart: (e: AnimationEvent) => {
      if (!e || rippleAnimation.current.isStart) {
        return;
      }
      resetEffect(e.target as HTMLElement);
    },
    onAnimationEnd: (e: AnimationEvent) => {
      if (!e || e.animationName !== 'fadeEffect') {
        return;
      }
      resetEffect(e.target as HTMLElement);
    },
  });

  const resetEffect = (node: HTMLElement) => {
    node.setAttribute(animationAttr, 'false');
    node.removeEventListener(
      'animationstart',
      rippleAnimation.current.onAnimationStart,
    );
    node.removeEventListener(
      'animationend',
      rippleAnimation.current.onAnimationEnd,
    );
  };

  const createStyle = (node: HTMLElement) => {
    const rippleColor =
      getComputedStyle(node).getPropertyValue('border-top-color') ||
      getComputedStyle(node).getPropertyValue('border-color') ||
      getComputedStyle(node).getPropertyValue('background-color');
    styleTag = styleTag || document.createElement('style');
    styleTag.innerHTML = `
      [${animationAttr}='true']::after {
        --klein-ripple-shadow-color: ${rippleColor};
      }
    `;
    if (!document.body.contains(styleTag)) {
      document.body.appendChild(styleTag);
    }
  };

  const init = (node: HTMLElement) => {
    node.addEventListener(
      'click',
      () => {
        resetEffect(node);
        rippleAnimation.current.timeoutId = window.setTimeout(() => {
          node.setAttribute(animationAttr, 'true');
          createStyle(node);
          node.addEventListener(
            'animationstart',
            rippleAnimation.current.onAnimationStart,
          );
          node.addEventListener(
            'animationend',
            rippleAnimation.current.onAnimationEnd,
          );
        }, 0);
        raf.cancel(rippleAnimation.current.animationId!);
        rippleAnimation.current.isStart = true;
        rippleAnimation.current.animationId = raf(() => {
          rippleAnimation.current.isStart = false;
        }, 10);
      },
      true,
    );
  };

  const clearEffect = () => {
    resetEffect(curNode as HTMLElement);
    clearTimeout(rippleAnimation.current.timeoutId!);
    if (styleTag) {
      styleTag.innerHTML = '';
    }
  };

  useEffect(() => {
    if (!cnode) return;
    init(cnode);
    curNode = cnode;
    return clearEffect;
  }, []);

  return <>{newChild}</>;
};

export default Ripple;
