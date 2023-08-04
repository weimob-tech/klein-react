import React, { useCallback } from 'react'
import { Button, message, Icon } from '@klein-design/klein-react'
import cx from 'classnames'

import styles from './index.module.less'
import Wrapper from '../Wrapper'
import ImgRightArrow from '@/assets/images/home/rightarrow.svg'
import { useNavigate } from 'react-router-dom'
import copy from '@/utils/copy'
import { NPM_COMMAND } from '@/constant'
import ImgTitle from '@/assets/images/home/title.svg'

const Intro = React.forwardRef<HTMLDivElement>((_, ref) => {
  const navigate = useNavigate()

  const handleStart = useCallback(() => {
    navigate('/guide/start')
  }, [])

  const handleCopy = useCallback(() => {
    copy(NPM_COMMAND)
    message.success('复制成功')
  }, [])

  return (
    <div className={styles.Intro} ref={ref}>
      <div className={styles.wrap}>
        <div className={styles.bg} />
        <div className={styles.bg2} />

        <Wrapper>
          <div className={styles.cont}>
            <div className={styles.text}>
              <div className={styles.title}>
                <img src={ImgTitle} alt='' width={408} />
              </div>
              <div className={styles.desc}>服务于SaaS行业的设计系统，创造高效愉悦的工作体验</div>

              <div className={styles.btns}>
                <Button className={styles.btn} size='large' type='primary' onClick={handleStart}>
                  开始使用
                  <img className={styles.arrow} src={ImgRightArrow} alt='' />
                </Button>

                <Button
                  className={cx(styles.btn, styles.npmBtn, 'font-normal')}
                  size='large'
                  onClick={handleCopy}
                >
                  {`>`}
                  npm i <span className={styles.pkgName}>@klein-design/klein-react</span>
                  <div className={styles.splitline} />
                  <div className={cx(styles.copy, 'transition-bgc')}>
                    <Icon.CopyLine className={styles.copyIcon} />
                    </div>
                </Button>
              </div>
            </div>
          </div>
        </Wrapper>
      </div>
    </div>
  )
})

export default Intro
