import React, { useRef, useEffect, useState } from 'react'
import styles from './index.module.less'
import { throttle } from 'lodash'
import cx from 'classnames'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  visible?: any
  once?: boolean
  fadeInOnly?: boolean
  animate?: {
    delay?: number
    duration?: number
    extraDelay?: number
    timingFunction?: string
  }
  root?: () => HTMLDivElement
}

const OFFSET = 50

const isVisbile = (elm: HTMLDivElement, parent: HTMLDivElement) => {
  const viewTop = parent.scrollTop || window.scrollY
  const viewBottom = viewTop + Math.min(parent.clientHeight, window.innerHeight)
  const top = elm.offsetTop + OFFSET
  const bottom = top + elm.clientHeight - OFFSET
  return top <= viewBottom && bottom >= viewTop
}

const Animate: React.FC<Props> = (props) => {
  const {
    once = true,
    animate,
    children,
    style,
    visible,
    className,
    root,
    fadeInOnly = false,
    ...rest
  } = props
  const { delay = 300, duration = 500, extraDelay = 0, timingFunction = 'ease' } = animate || {}
  const ref = useRef<HTMLDivElement>(null)
  const isAnimated = useRef(false)
  const [show, setShow] = useState(false)
  const timeRef = useRef<ReturnType<typeof setTimeout>>()

  useEffect(() => {
    if (once && isAnimated.current) return
    // visible控制动画展示，每次visible变化都会触发新动画
    if (visible !== undefined && visible !== false) {
      isAnimated.current = true
      setShow(true)
    }
  }, [visible])

  useEffect(() => {
    if (show) {
      if (timeRef.current) {
        clearTimeout(timeRef.current)
      }
      timeRef.current = setTimeout(() => {
        setShow(false)
      }, delay + duration + extraDelay)
    }
  }, [show])

  useEffect(() => {
    return () => timeRef.current && clearTimeout(timeRef.current)
  }, [])

  useEffect(() => {
    // 当visible没有传，即认定为需要计算元素到达可视范围内展示动画
    if (visible === undefined) {
      const parent = root?.() || document.querySelector('.klein-basicLayout')
      const listener = throttle(() => {
        if (!isAnimated.current) {
          const vis = isVisbile(ref.current, parent)
          if (vis) {
            setShow(true)
            isAnimated.current = true
            parent?.removeEventListener('scroll', listener)
          }
        }
      }, 100)
      parent?.addEventListener('scroll', listener)
      listener()
      return () => parent?.removeEventListener('scroll', listener)
    }
  }, [visible])

  return (
    <div
      ref={ref}
      className={cx(className, { [styles.animate]: show }, fadeInOnly ? styles.fadeInOnly : null)}
      style={{
        ...style,
        animationDelay: `${extraDelay + delay}ms`,
        animationDuration: `${duration}ms`,
        animationTimingFunction: timingFunction,
        opacity: !isAnimated.current ? 0 : undefined,
      }}
      {...rest}
    >
      {children}
    </div>
  )
}

export default Animate
