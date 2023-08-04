import React, { useCallback } from 'react'
import cx from 'classnames'
import { useNavigate } from 'react-router-dom'
import { Button } from '@klein-design/klein-react'
import styles from './index.module.less'
import Wrapper from '../Wrapper'
import ImgArrow from '@/assets/images/home/rightarrow.svg'

type EntryProps = React.HTMLAttributes<HTMLDivElement>

const Entry: React.FC<EntryProps> = (props) => {
  const { className, ...restProps } = props

  const navigate = useNavigate()

  const handleStart = useCallback(() => {
    navigate('/guide/start')
  }, [])

  const handleGuide = useCallback(() => {
    navigate('/guide/pracite')
  }, [])

  return (
    <div className={cx(className, styles.Entry)} {...restProps}>
      <Wrapper>
        <div className={styles.title}>Klein Design</div>
        <div className={styles.desc}>桌面端全场景组件库</div>
        <div className={styles.btns}>
          <Button className={cx(styles.btn, styles.blackBtn)} type='primary' onClick={handleStart}>
            开始使用 <img className={styles.arrow} src={ImgArrow} alt='' />
          </Button>
          <Button className={styles.btns} onClick={handleGuide}>
            阅读文档
          </Button>
        </div>
      </Wrapper>
    </div>
  )
}

export default Entry
