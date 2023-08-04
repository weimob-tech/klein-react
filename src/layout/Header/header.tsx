import React from 'react'
import cx from 'classnames'
import Logo from './Logo'
import './index.less'
import Navigation from './Navigation'
import Docsearch from './Docsearch'

type HeaderProps = React.HTMLAttributes<HTMLDivElement> & {
  isHome?: boolean
}

const Header: React.FC<HeaderProps> = (props) => {
  const { className, isHome } = props

  return (
    <div className={cx('klein-headers-headers', 'transition', 'font-klein', className, isHome ? 
    'klein-headers-headers-home' : '')}>
      {isHome ? <div className='klein-headers-bg' /> : null}

      <div className='klein-headers-cont'>
        <Logo />
        <div className='flex1' />
        <div className='klein-headers-center-content'>
          <Docsearch />
          <Navigation />
        </div>
      </div>
    </div>
  )
}

export default Header
