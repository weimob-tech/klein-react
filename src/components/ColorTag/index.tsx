import React from 'react'
import cx from 'classnames'
import styles from './index.module.less'

type ColorTagProps = React.HTMLAttributes<HTMLSpanElement> & {
  color?: string
}

const ColorTag: React.FC<ColorTagProps> = (props) => {
  const { color = '', ...rest } = props

  const isWhite = /white/.test(color)

  return (
    <div
      className={cx(styles.ColorTag, isWhite ? styles.white : null)}
      style={{
        backgroundColor: color,
      }}
      {...rest}
    />
  )
}

export default ColorTag
