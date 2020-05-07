import React, { useState } from 'react'
import useEventListener from '../../hooks/useEventListener'

import './backToTop.scss'

const BackToTop = () => {
  const displayThreshold = 600

  const [isVisible, setVisibility] = useState(false)

  const scrollHandler = () => setVisibility(window.scrollY > displayThreshold)

  useEventListener('scroll', scrollHandler)

  const handleOnClick = e => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div id="backtotop" className={isVisible ? 'visible' : ''} onClick={handleOnClick}>
      <a href="#" />
    </div>
  )
}

export default BackToTop
