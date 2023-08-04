import React, { useCallback, useState } from 'react'
import cx from 'classnames'
import Normal from './Normal'
import Easy from './Easy'
import Doc from './Doc'
import styles from './index.module.less'
import { Animate } from '@/components'

const MODES = [
  {
    icon: 'https://image-c.weimobwmc.com/sass-admin/54f05edaa4724fe78a5c6c85c7d5715d.png',
    title: '默认模式',
    children: <Normal />,
  },
  {
    icon: 'https://image-c.weimobwmc.com/sass-admin/5a92900af2da4bdd952dd84e93c1cbe9.png',
    title: '简洁模式',
    children: <Easy />,
  },
  {
    icon: 'https://image-c.weimobwmc.com/sass-admin/b5d166a3215847ac8aae331de1980201.png',
    title: '文档模式',
    children: <Doc />,
  },
]

const KleinEditor: React.FC = () => {
  const [mode, setMode] = useState(0)

  const handleModeClick = useCallback((i) => {
    setMode(i)
  }, [])

  return (
    <div className={styles.KleinEditor}>
      <div className={styles.tabs}>
        {MODES.map((o, i) => (
          <div
            className={cx(styles.tab, mode === i ? styles.active : null)}
            key={i}
            onClick={() => handleModeClick(i)}
          >
            <img className={styles.icon} src={o.icon} alt='' />
            <span>{o.title}</span>
          </div>
        ))}
      </div>
      <Animate once={false} animate={{ delay: 0 }} visible={mode} className={styles.content}>
        {MODES[mode].children}
      </Animate>
    </div>
  )
}

export default KleinEditor
