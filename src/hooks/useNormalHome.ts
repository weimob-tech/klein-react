import { useEffect, useState } from 'react'
import { throttle } from 'lodash'
import { useMatch } from 'react-router-dom'

function useNormalHome() {
  const isHome = !!useMatch('/')
  const [isNormal, setIsNormal] = useState(window.innerHeight < 840)

  useEffect(() => {
    const resize = throttle(function () {
      setIsNormal(window.innerHeight < 840)
    }, 1000)

    window.addEventListener('resize', resize)

    return () => {
      window.removeEventListener('resize', resize)
    }
  }, [])

  const isNormalHome = isNormal && isHome
  return isNormalHome
}

export default useNormalHome
