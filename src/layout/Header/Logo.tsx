import * as React from 'react'
import ImgLogo from '@/assets/images/home/logo.svg'
import './index.less'

export interface LogoProps {
  isZhCN?: boolean
  location?: any
}

const Logo: React.FC<LogoProps> = ({ isZhCN }) => {
  const handleClick = React.useCallback(() => {
    location.href = '/'
  }, [])

  return (
    <div className='klein-headers-logo-wrapper' onClick={handleClick}>
      <img
        className='logo-icon'
        src={ImgLogo}
        alt=''
      />
    </div>
  )
}

export default Logo
