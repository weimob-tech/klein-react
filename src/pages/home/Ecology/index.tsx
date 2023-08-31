import React, { useCallback, useEffect, useState } from 'react'
import cx from 'classnames'
import { Button } from '@klein-design/klein-react'
import ImgArrow from '@/assets/images/home/rightarrow.svg'

import styles from './index.module.less'
import Wrapper from '../Wrapper'
import { useNavigate } from 'react-router-dom'
import { Animate } from '@/components'
import useNormalHome from '@/hooks/useNormalHome'
import { KLEIN_DESIGN_LOGO } from '@/constant'

const IMG_ORION_FONT =
  'https://image-c.weimobwmc.com/sass-admin/39fb40d3ca47415db8da67376cb3639a.png'
const IMG_KLEIN_PRO =
  'https://image-c.weimobwmc.com/sass-admin/86c2b93dd1b84c7c95945005551435ef.png'
const IMG_KLEIN_EDITOR =
  'https://image-c.weimobwmc.com/sass-admin/c81ef3afa6514828bcbb870a9c4e8be2.png'
const IMG_MARKET = 'https://image-c.weimobwmc.com/sass-admin/34a58c6e10674ac4bcf104a7f4769c25.png'

const TABS = [
  {
    icon: KLEIN_DESIGN_LOGO,
    name: 'Klein Design',
    children: {
      title: 'Klein Design',
      desc: 'WEB端基础组件库，从微盟SaaS业务中磨合诞生的基础组件库，服务于SaaS行业开发者。',
      link: '/components/button',
      bg: 'https://image-c.weimobwmc.com/sass-admin/8ff746dfdf6d442d8c2170a5485cf2a3.png',
    },
  },
  {
    icon: 'https://image-c.weimobwmc.com/sass-admin/efce698b9ff74f68bea8296e12ef40a8.png',
    name: 'Orion Fonts',
    children: {
      title: 'Orion Fonts',
      desc: '一站式素材管理平台，提供了图标、插图、Json动画、APNG动画等丰富类型的素材管理能力。',
      link: '',
      bg: 'https://image-c.weimobwmc.com/sass-admin/0ee0220644834cd19d9926dd6573241a.png',
    },
  },
  {
    icon: KLEIN_DESIGN_LOGO,
    name: 'Klein Pro',
    children: {
      title: 'Klein Pro',
      desc: 'WEB端最佳实践，经过微盟多年SaaS业务实践沉淀的中后台前端最佳解决方案。',
      link: '',
      bg: IMG_KLEIN_PRO,
    },
  },
  {
    icon: 'https://image-c.weimobwmc.com/sass-admin/9a1b12897b564a12bf367df93155524a.png',
    name: 'Orio Market',
    children: {
      title: 'Orio Market',
      desc: '物料管理平台，帮助前端团队对组件等物料进行可视化管理的平台消除团队内信息差的重要抓手。',
      link: '',
      bg: IMG_MARKET,
    },
  },
  {
    icon: 'https://image-c.weimobwmc.com/sass-admin/e2a4f22127014ed28d3c75c7d35105c5.png',
    name: 'Klein Editor',
    children: {
      title: 'Klein Editor',
      desc: '多场景富文本编辑器，简洁好用的富文本编辑器，在PC端做了多种模式的优化设计，轻松嵌入到各种场景。',
      link: '',
      bg: 'https://image-c.weimobwmc.com/sass-admin/54aa8b85c80e442696e36ca8f9c62228.png',
    },
  },
]

const getRoot = () => document.getElementById('intro')?.parentElement as HTMLDivElement

type EcologyProps = React.HTMLAttributes<HTMLDivElement> & {
  activeTab: number
  onTabChange: (i: number) => void
}

const Ecology: React.FC<EcologyProps> = (props) => {
  const { className, activeTab, onTabChange, ...restProps } = props

  const navigate = useNavigate()
  const isNormal = useNormalHome()

  const [curTab, setCurTab] = useState(0)
  const curTabData = TABS[curTab]

  useEffect(() => {
    setCurTab(activeTab)
  }, [activeTab])

  const handleTabClick = useCallback(
    (i: number) => {
      setCurTab(i)
      onTabChange(i)
    },
    [onTabChange]
  )

  const handleJump = useCallback((url: string, open = true) => {
    if (!url) return

    if (open) {
      window.open(url)
      return
    }

    navigate(url)
  }, [])

  return (
    <div className={cx(styles.Ecology, className)} {...restProps}>
      <Wrapper className={styles.wrapper}>
        <Animate root={isNormal ? undefined : getRoot}>
          <div className={styles.title}>丰富全面的设计系统</div>
        </Animate>
        <Animate root={isNormal ? undefined : getRoot} animate={{ extraDelay: 100 }}>
          <div className={styles.desc}>为企业构建丰富灵活的生态平台，为开发者提供高效愉悦的开发体验</div>
        </Animate>

        <Animate
          root={isNormal ? undefined : getRoot}
          animate={{ extraDelay: 200 }}
          className={styles.tabs}
        >
          {TABS.map((o, i) => (
            <div
              key={i}
              className={cx(styles.tab, 'transition-bg', curTab === i ? styles.active : null)}
              onClick={() => handleTabClick(i)}
            >
              <div className={styles.tabIcon}>
                <img className={styles.tabIconImg} src={o.icon} alt='' />
              </div>
              <div>{o.name}</div>
            </div>
          ))}
        </Animate>

        <Animate
          className={styles.cont}
          style={{
            backgroundImage: `url('https://image-c.weimobwmc.com/sass-admin/696dd041658d4ae0a7d05f1d19819505.png')`,
          }}
          animate={{ extraDelay: 300 }}
          root={isNormal ? undefined : getRoot}
        >
          {TABS.map((o, i) => {
            if (curTab !== i) return null;
            return (
              <React.Fragment key={i}>
                <Animate animate={{ delay: 0 }} visible={true} className={styles.info}>
                  <div className={styles.infoTitle}>{o.children.title}</div>
                  <div className={styles.infoDesc}>{o.children.desc}</div>
                  <Button
                    className={styles.btn}
                    size='large'
                    type='primary'
                    disabled={!o.children.link}
                    onClick={() => {
                      handleJump(o.children.link, false)
                    }}
                  >
                    {o.children.link ? '查看详情' : '敬请期待'}
                    <img
                      className={cx(styles.arrow, !o.children.link ? styles.disable : null)}
                      src={ImgArrow}
                      alt=''
                    />
                  </Button>
                </Animate>
                <Animate
                  animate={{ delay: 100 }}
                  visible={true}
                  className={styles.bg}
                  style={{
                    backgroundImage: `url(${o.children.bg})`,
                  }}
                />
              </React.Fragment>
            )
          })}
        </Animate>
      </Wrapper>
    </div>
  )
}

export default Ecology
