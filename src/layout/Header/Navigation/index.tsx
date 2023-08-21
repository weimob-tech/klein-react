import React, { useCallback, useState } from 'react'
import cx from 'classnames'
import { Icon } from '@klein-design/klein-react'

import styles from './index.module.less'
import { ASSET_FIGMA, ASSET_FONT, ASSET_ICON, KLEIN_DESIGN_LOGO } from '@/constant'
import { useNavigate } from 'react-router-dom'

const { DownLine } = Icon

const MENUS = [
  {
    value: 'design',
    label: '设计',
  },
  {
    value: 'development',
    label: '开发',
  },
  {
    value: 'ecology',
    label: '生态产品',
  },
]

const DROPDONWS = [
  [
    {
      title: '设计指南',
      data: [
        {
          icon: 'https://image-c.weimobwmc.com/sass-admin/13969e68915440c9a348c12a84eb427c.png',
          name: '设计原则',
          link: '/design/design',
          // open: false,
        },
        {
          icon: 'https://image-c.weimobwmc.com/sass-admin/d0dc4202138d4728981e5b6109a36fbc.png',
          name: '样式指南',
          link: '/design/color',
          // open: false,
        },
      ],
    },
    {
      title: '设计资源',
      data: [
        {
          icon: 'https://image-c.weimobwmc.com/sass-admin/b1035216825e4ec3adaa1775af0c5749.png',
          name: 'Klein - Figma',
          link: ASSET_FIGMA,
        },
        {
          icon: 'https://image-c.weimobwmc.com/sass-admin/c8a5b5954d0b4c6e86d76a099c9c8772.png',
          name: 'Klein Font',
          link: ASSET_FONT,
        },
        // {
        //   icon: 'https://image-c.weimobwmc.com/sass-admin/94a80e031a324fd099f85547c829b695.png',
        //   name: 'Klein - Sketch',
        //   link: '',
        // },
        {
          icon: 'https://image-c.weimobwmc.com/sass-admin/39006917e81f4caa8cc4ea0aa350f648.png',
          name: '官方图标库',
          link: ASSET_ICON,
        },
      ],
    },
  ],
  [
    {
      title: '开发文档',
      data: [
        {
          icon: 'https://image-c.weimobwmc.com/sass-admin/e28a27793b6e45998d99e0ef1df035c0.png',
          name: 'React',
          link: '/guide/start',
        },
        {
          icon: 'https://image-c.weimobwmc.com/sass-admin/f7f4142f356c4f9aaac0e59b0d41d04a.png',
          name: 'Vue Web',
          link: '',
        },
      ],
    },
    {
      title: '开发资源',
      data: [
        {
          icon: 'https://image-c.weimobwmc.com/sass-admin/7571e94c2f6a46aba32bcb7b0914bee9.png',
          name: 'GitHub 代码仓库',
          link: 'https://github.com/weimob-tech/klein-react',
        },
      ],
    },
  ],
  [
    {
      title: '生态产品',
      data: [
        {
          icon: 'https://image-c.weimobwmc.com/sass-admin/5df7c2b9c7324149bd90b00ad95f48dd.png',
          name: 'Orion Fonts',
          link: '',
        },
        {
          icon: 'https://image-c.weimobwmc.com/sass-admin/39006917e81f4caa8cc4ea0aa350f648.png',
          name: 'Orio Market',
          link: '',
        },
        {
          icon: KLEIN_DESIGN_LOGO,
          name: 'Klein Pro',
          link: '',
        },
        {
          icon: 'https://image-c.weimobwmc.com/sass-admin/c0094c14331844d3b6e2c589c0f40b88.png',
          name: 'Klein Editor',
          link: '',
        },
      ],
    },
  ],
]

const Navigation: React.FC = () => {
  const [curMenu, setCurMenu] = useState(-1)

  const handleMouseEnter = useCallback((i: number) => {
    setCurMenu(i)
  }, [])

  const handleMouseLeave = useCallback(() => {
    setCurMenu(-1)
  }, [])

  const navigate = useNavigate()

  const handleClick = useCallback((link: string, open = true) => {
    if (!link) return

    if (open) {
      window.open(link)
    } else {
      navigate(link)
    }
  }, [])

  return (
    <div className={styles.Navigation}>
      {curMenu !== -1 ? <div className={styles.mask} /> : null}

      <div className={styles.menus}>
        {MENUS.map((o, i) => (
          <div
            className={styles.menuWrap}
            key={i}
            onMouseEnter={() => handleMouseEnter(i)}
            onMouseLeave={() => handleMouseLeave()}
          >
            <div className={cx(styles.menu, 'transition')}>
              <span>{o.label}</span>
              <DownLine className={cx(styles.arrow, 'transition')} />
            </div>

            <div className={cx(styles.dropdown, 'transition', styles[o.value])}>
              <div className={styles.cont}>
                {DROPDONWS[i]?.map((d, j) => (
                  <div className={styles.wrap} key={j}>
                    <div className={styles.title}>{d.title}</div>
                    <div className={styles.links}>
                      {d.data.map((item, index) => (
                        <div
                          key={index}
                          className={cx(styles.link, 'transition')}
                          onClick={() => handleClick(item.link, item.open)}
                        >
                          <div
                            className={styles.icon}
                            style={{
                              backgroundImage: `url(${item.icon})`,
                            }}
                          />
                          <div className={styles.name}>
                            <span>{item.name}</span>
                            {item.link ? null : <div className={styles.waiting}>敬请期待</div>}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.github}>
        <svg
          className={styles.icon}
          height='32'
          aria-hidden='true'
          viewBox='0 0 16 16'
          version='1.1'
          width='32'
          data-view-component='true'
          onClick={() => {
            window.open('https://github.com/weimob-tech/klein-react')
          }}
        >
          <path d='M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z'></path>
        </svg>
      </div>
    </div>
  )
}

export default Navigation
