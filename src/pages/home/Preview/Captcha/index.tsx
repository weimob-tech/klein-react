import React, { useCallback, useEffect, useState } from 'react'
import cx from 'classnames'
import TiCaptcha from '@weimobfe/captcha-pc'
import styles from './index.module.less'

const TABS = [
  {
    icon: 'https://image-c.weimobwmc.com/sass-admin/fd75c9355b884c6aad574db5b9e812e0.png',
    name: '图片验证',
    captcha: {
      verifyDomId: '#kleinCaptcha',
      type: 'weimobSlidingCaptcha',
      autoRegistry: true,
      scene: 'pc',
    },
  },
  {
    icon: 'https://image-c.weimobwmc.com/sass-admin/36a07811ae9547afb32fb9daf6a62856.png',
    name: '文字验证',
  },
]

const Captcha: React.FC = () => {
  const [curTab, setCurTab] = useState(0)

  const openCaptcha = useCallback((data: any) => {
    new TiCaptcha(data)
  }, [])

  const handleTabClick = useCallback((i: number) => {
    setCurTab(i)
    openCaptcha(TABS[i].captcha)
  }, [])

  useEffect(() => {
    handleTabClick(0)
  }, [handleTabClick])

  return (
    <div className={styles.Captcha}>
      <div className={styles.tabs}>
        {TABS.map((o, i) => (
          <div
            className={cx(styles.tab, 'transition', curTab === i ? styles.active : null)}
            key={i}
            onClick={() => handleTabClick(i)}
          >
            <img className={styles.icon} src={o.icon} alt='' />
            <span>{o.name}</span>
          </div>
        ))}
      </div>

      <div id='kleinCaptcha' key={curTab} />
    </div>
  )
}

export default Captcha
