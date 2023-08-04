import React, { useCallback, useEffect, useRef, useState } from 'react'
import cx from 'classnames'
import { throttle } from 'lodash'
import ReactFullpage from '@fullpage/react-fullpage'
import styles from './index.module.less'
import Intro from './Intro'
import Ecology from './Ecology'
import Tour from './Tour'
import Footer from '@/layout/Footer'
import Preview from './Preview'
import useNormalHome from '@/hooks/useNormalHome'
import { Animate } from '@/components'

const MEDIA_LIMIT_HEIGHT = 840
const FILLBOX_HEIGHT = 5000
const TAB_COUNT = 5
const INTRO_HEIGHT = 440 + 492

type HomeProps = React.HTMLAttributes<HTMLDivElement> & {
  setHasScrollTop: React.Dispatch<React.SetStateAction<boolean>>
}

const Home: React.FC<HomeProps> = (props) => {
  const { setHasScrollTop } = props

  const isNormal = useNormalHome()

  // const [isScrollTab, setIsScrollTab] = useState(window.innerHeight > MEDIA_LIMIT_HEIGHT)

  // useEffect(() => {
  //   const resize = throttle(function () {
  //     setIsScrollTab(window.innerHeight > MEDIA_LIMIT_HEIGHT)
  //   }, 1000)

  //   window.addEventListener('resize', resize)

  //   return () => {
  //     window.removeEventListener('resize', resize)
  //   }
  // }, [])

  // const fillboxRef = useRef<HTMLDivElement>(null)

  const [activeTab, setActiveTab] = useState(0)

  const handleScroll = useCallback(
    throttle(() => {
      if (!isNormal) {
        const scrollEl = document.querySelector('.fp-overflow')
        if (scrollEl) {
          const scrollTop = scrollEl.scrollTop
          setHasScrollTop(scrollTop > 0)
        }
      }

      // if (!isScrollTab) return

      // if (!fillboxRef.current) return

      // 计算 tab index
      // const fillboxEl = fillboxRef.current
      // const offsetHeight = fillboxEl.offsetHeight
      // const windowHeight = window.innerHeight
      // const top = fillboxEl.getBoundingClientRect().top

      // let scrollPercent = (windowHeight - top) / offsetHeight
      // if (scrollPercent < 0) {
      //   scrollPercent = 0
      // }
      // if (scrollPercent >= 1) {
      //   scrollPercent = 0.9
      // }

      // const scrollRate = scrollPercent * 100
      // const scrollIndex = Math.floor(scrollRate / (100 / TAB_COUNT))

      // setActiveTab(scrollIndex)
    }, 100),
    [setHasScrollTop, isNormal]
  )

  const handleTabChange = useCallback((i: number) => {
    // if (!isScrollTab) return

    // const scrollEl = document.querySelector('.fp-overflow')
    // if (!scrollEl) return

    // 计算 scrollTop
    // const height = i * (FILLBOX_HEIGHT / TAB_COUNT)

    // const scrollTop = INTRO_HEIGHT + height

    // scrollEl.scrollTop = scrollTop

    setActiveTab(i)
  }, [])

  const renderNormalCont = (state?: any) => {
    return (
      <>
        <div className={cx('section', styles.container)} onScroll={handleScroll}>
          {isNormal ? null : <div className={styles.bg} />}
          <div
            id='intro'
            style={{
              position: 'relative',
            }}
          >
            <Intro />
            <Ecology
              // style={
              //   isScrollTab
              //     ? {
              //         position: 'sticky',
              //         top: 0,
              //       }
              //     : {}
              // }
              activeTab={activeTab}
              onTabChange={handleTabChange}
            />

            {/* {isScrollTab ? (
              <div
                ref={fillboxRef}
                style={{
                  height: FILLBOX_HEIGHT,
                }}
              />
            ) : null} */}
          </div>
        </div>
        <div className='section'>
          <Preview active={state ? state.destination?.index === 1 : undefined} />
        </div>
        <div className='section'>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              minHeight: '100vh',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                flex: 1,
                minHeight: 720,
              }}
            >
              <Tour
                style={{
                  flex: 1,
                }}
                active={state ? state.destination?.index === 2 : undefined}
              />
            </div>

            <Footer containerStyle={{ maxWidth: 1200 }} isHome={true} />
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      {isNormal ? <div className={cx(styles.bg, isNormal ? styles.noTransform : null)} /> : null}
      <div className={cx(styles.home, 'font-klein')}>
        {isNormal ? (
          renderNormalCont()
        ) : (
          <ReactFullpage
            onLeave={() => {}}
            render={({ state }) => {
              return <ReactFullpage.Wrapper>{renderNormalCont(state)}</ReactFullpage.Wrapper>
            }}
          />
        )}
      </div>
    </>
  )
}

export default Home
