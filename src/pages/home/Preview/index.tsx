import React, { useCallback, useState } from 'react'
import cx from 'classnames'
import Wrapper from '../Wrapper'
import styles from './index.module.less'
import KleinDesign from './KleinDesign'
import KleinEditor from './KleinEditor'
import Captcha from './Captcha'
import { Animate } from '@/components'

const LEFT = [
  {
    title: 'Klein',
    children: <KleinDesign />,
  },
  {
    title: 'Klein Editor',
    children: <KleinEditor />,
  },
]

interface PreviewProps extends React.HTMLAttributes<HTMLDivElement> {
  active: boolean | undefined;
}

const Preview: React.FC<PreviewProps> = (props) => {
  const { className, active } = props
  const [curTab, setCurTab] = useState(0)
  const curTabData = LEFT[curTab]

  const handleTabClick = useCallback((i) => {
    setCurTab(i)
  }, [])

  return (
    <div className={cx(styles.Preview, className)}>
      <Wrapper className={styles.wrapper}>
        <Animate visible={active}>
          <div className={styles.title}>工具平台</div>
          <div className={styles.desc}>提供了基础组件以及多场景富文本的工具试用</div>
        </Animate>


        <div className={styles.cont}>
          <Animate visible={active} animate={{ extraDelay: 200 }} className={styles.left}>
            {LEFT.map((o, i) => (
              <div
                className={cx(styles.side, 'transition', curTab === i ? styles.active : null)}
                key={i}
                onClick={() => handleTabClick(i)}
              >
                <div className={styles.sideTitle}>
                  {curTab === i ? <span className={styles.finger}>👉</span> : null}
                  {o.title}
                </div>
                <div className={styles.sideDesc}>{o.desc}</div>
              </div>
            ))}
          </Animate>

          <Animate visible={active} animate={{ extraDelay: 300 }} className={cx(styles.right, 'font-normal')}>{curTabData.children}</Animate>
        </div>
      </Wrapper>
    </div>
  )
}

export default Preview
