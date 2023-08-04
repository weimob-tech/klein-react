import React from 'react'
import cx from 'classnames'
import styles from './index.module.less'

type WrapperProps = React.HTMLAttributes<HTMLDivElement>

const Wrapper: React.FC<WrapperProps> = (props) => {
  const { className, children } = props

  return <div className={cx(className, styles.Wrapper)}>{children}</div>
}

export default Wrapper
