import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import cx from 'classnames'
import Footer from './Footer'
import Header from './Header/header'
import LeftSide from './Sidebar'
import Avatars from './Avatars'
import './index.less'
import './default.less'
import { useMatch, useLocation, useNavigate } from 'react-router-dom'
import Home from '@/pages/home'
import menus from '@/config/menus'
import useNormalHome from '@/hooks/useNormalHome'

interface BasicLayoutProps {
  children: any
}

const BasicLayout: React.FC<BasicLayoutProps> = (props: any) => {
  const isHome = !!useMatch('/')
  const isGuide = !!useMatch('/guide/*')
  const isComponents = !!useMatch('/components/*')
  const isDesign = !!useMatch('/design/*')
  const [acfix, setAcfix] = useState<any>([])
  const [selectItem, setSelectItem] = useState<any>('基础分页')

  const location = useLocation()
  const { hash, pathname } = location

  const navigate = useNavigate()

  useEffect(() => {
    if (!pathname) return
    const acfix = document.querySelectorAll('h3')
    setAcfix([...acfix].filter((_) => _.id))
    if (isGuide || isComponents || isDesign) {
      if (scrollRef.current) {
        scrollRef.current.scrollTop = 0
      }
    }
  }, [pathname])

  const scrollRef = useRef<HTMLDivElement>(null)

  const handleScroll = useCallback(
    (e, id) => {
      if (e) e.preventDefault()

      const hash = `#${id}`

      const top = (document.querySelector(hash) as HTMLElement)?.offsetTop - 64

      if (scrollRef.current) {
        scrollRef.current.scrollTop = top
        navigate(pathname + hash)
      }
    },
    [pathname]
  )

  useEffect(() => {
    if (!hash) return

    const id = decodeURIComponent(hash).replace('#', '')

    handleScroll(null, id)
    setSelectItem(id)
  }, [hash])

  // set menu bg
  const menuBg = useMemo(() => {
    function findMenuBg(data, path = '', bg = '') {
      for (let i = 0; i < data.length; i++) {
        const menu = data[i]
        const routes = menu.routes

        let menuPath = menu.path || ''
        if (menuPath && menuPath.indexOf('/') !== 0) {
          menuPath = '/' + menuPath
        }
        const curPath = path + menuPath

        const curBg = menu.bg || bg

        if (menu.routes) {
          const menuBg = findMenuBg(routes, curPath, curBg)
          if (menuBg) return menuBg
        }

        if (pathname === curPath) {
          return curBg
        }
      }
    }

    return findMenuBg(menus)
  }, [pathname])

  const isNormal = useNormalHome()

  const [hasScrollTop, setHasScrollTop] = useState(false)

  const handleHomeScroll = useCallback(() => {
    if (!isNormal) return

    const scrollEl = document.querySelector('.klein-basicLayout')
    if (scrollEl) {
      const scrollTop = scrollEl.scrollTop
      setHasScrollTop(scrollTop > 0)
    }
  }, [isNormal])

  return (
    <main
      className={cx(
        'klein-basicLayout',
        isHome ? 'klein-basicLayout-home' : null,
        isNormal ? 'klein-basicLayout-normal' : null
      )}
      onScroll={handleHomeScroll}
    >
      <header className='klein-headers'>
        <Header
          className={cx(
            isHome ? '' : 'klein-headers-border',
            isHome && !hasScrollTop ? 'klein-headers-transparent' : ''
          )}
          isHome={isHome}
        />
      </header>

      {isHome ? (
        <Home setHasScrollTop={setHasScrollTop} />
      ) : (
        <section className='klein-contents'>
          <div className='klein-left-wrapper'>
            <LeftSide />
          </div>
          <section className='klein-right-wrapper' ref={scrollRef}>
            <div className='klein-right-top-wrapper'>
              <div className='right-center-wrapper'>
                <section
                  className='center-content'
                  style={{
                    backgroundImage: `url(${menuBg})`,
                  }}
                >
                  {props.children}
                  {!isGuide ? <Avatars /> : null}
                </section>
              </div>

              <div className='right-side-wrapper'></div>
            </div>

            <section className='klein-fix-anchor'>
              {acfix.map((item) => (
                <div
                  onClick={(e) => setSelectItem(item.id)}
                  className={`klein-fix-anchor-item transition ${
                    selectItem === item.id ? 'klein-fix-anchor-item-active' : null
                  }`}
                >
                  <a href={'#' + item.id} type='link' onClick={(e) => handleScroll(e, item.id)}>
                    {item.innerText}
                  </a>
                </div>
              ))}
            </section>

            <Footer className='klein-footer' isHome={false} />
          </section>
        </section>
      )}
    </main>
  )
}

export default BasicLayout
