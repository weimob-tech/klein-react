import React, { useCallback } from 'react'
import cx from 'classnames'
import { Button, Icon, message } from '@klein-design/klein-react'
import styles from './index.module.less'
import Wrapper from '../Wrapper'
import ImgDesigner from '@/assets/images/home/designer.svg'
import ImgDeveloper from '@/assets/images/home/developer.svg'
import ImgFigma from '@/assets/images/home/figma.png'
import { NPM_COMMAND } from '@/constant'
import copy from '@/utils/copy'
import { Animate } from '@/components'

interface TourProps extends React.HTMLAttributes<HTMLDivElement> {
  active: boolean | undefined
}

const Tour: React.FC<TourProps> = (props) => {
  const { className, active, ...restProps } = props

  const handleCopy = useCallback(() => {
    copy(NPM_COMMAND)
    message.success('复制成功')
  }, [])

  const ROLES = [
    {
      avatar: 'https://image-c.weimobwmc.com/sass-admin/0963ec12701648f2842a5a760b436ea7.png',
      name: '我是设计师',
      desc: '了解Klein Design 的设计思想，这里有包括全局色、文字、图表和布局的指南',
      btn: (
        <Button
          className={styles.btn}
          size='large'
          icon={<img className={styles.img} src={ImgFigma} alt='' />}
        >
          Figma 组件库资源
        </Button>
      ),
    },
    {
      avatar: 'https://image-c.weimobwmc.com/sass-admin/24c96966eed94ef5be2954662c94b2cc.png',
      name: '我是工程师',
      desc: '组件用于更快捷、更简便的 web 开发，您也可以建立自己的设计系统，从 Klein Design 开始',
      btn: (
        <Button className={cx(styles.btn, styles.npmBtn)} size='large' onClick={handleCopy}>
          {`>`}
          {NPM_COMMAND}
          <div className={cx(styles.copy, 'transition')}>
            <Icon.CopyLine className={styles.copyIcon} />
          </div>
        </Button>
      ),
    },
  ]

  return (
    <div className={cx(className, styles.Tour)} {...restProps}>
      <Wrapper>
        <Animate visible={active}>
          <div className={styles.title}>开启你的体验旅程</div>
        </Animate>
        <div className={styles.roles}>
          {ROLES.map((o, i) => (
            <Animate
              visible={active}
              animate={{ extraDelay: (i + 1) * 150 }}
              key={i}
              className={cx(styles.role, 'transition-bg')}
            >
              <img className={styles.avatar} src={o.avatar} alt='' />
              <div className={styles.name}>{o.name}</div>
              <div className={styles.desc}>{o.desc}</div>
              {o.btn}
            </Animate>
          ))}
        </div>
      </Wrapper>
    </div>
  )
}

export default Tour
