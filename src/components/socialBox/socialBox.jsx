import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import './socialBox.scss'
import fbLogoWhite from '../../images/logos/FLC-MX_Facebook.svg'
import igLogoWhite from '../../images/logos/FLC-MX_Instagram.svg'
import twLogoWhite from '../../images/logos/FLC-MX_Twitter.svg'
import fbLogoRed from '../../images/logos/FLC-MX_Facebook_red.svg'
import igLogoRed from '../../images/logos/FLC-MX_Instagram_red.svg'
import twLogoRed from '../../images/logos/FLC-MX_Twitter_red.svg'

const facebookURL = 'https://www.facebook.com/frenalacurvamx/'
const instagramURL = 'https://www.instagram.com/frenalacurvamx/'
const twitterURL = 'https://twitter.com/frenalacurvamx'

const variants = {
  color: { red: 'red' },
  size: { medium: 'medium' },
}

export default function SocialBox({ className, onClick, color, size }) {
  const fbLogo = color === variants.color.red ? fbLogoRed : fbLogoWhite
  const igLogo = color === variants.color.red ? igLogoRed : igLogoWhite
  const twLogo = color === variants.color.red ? twLogoRed : twLogoWhite

  const classes = classnames('SocialBox', className, {
    [`SocialBox--${size}`]: size && size,
  })

  return (
    <div className={classes}>
      <a
        href={facebookURL}
        className="SocialBox-link"
        target="_blank"
        rel="noopener noreferrer"
        title="nuevo texto Facebook"
        onClick={onClick}
      >
        <img className="SocialBox-image" src={fbLogo} alt="Facebook" />
      </a>
      <a
        href={twitterURL}
        className="SocialBox-link"
        target="_blank"
        rel="noopener noreferrer"
        title="nuevo texto Twitter"
        onClick={onClick}
      >
        <img className="SocialBox-image" src={twLogo} alt="Twitter" />
      </a>
      <a
        href={instagramURL}
        className="SocialBox-link"
        target="_blank"
        rel="noopener noreferrer"
        title="nuevo texto Instagram"
        onClick={onClick}
      >
        <img className="SocialBox-image" src={igLogo} alt="Instagram" />
      </a>
    </div>
  )
}

SocialBox.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  color: PropTypes.oneOf([variants.color.red]),
  size: PropTypes.oneOf([variants.size.medium]),
}
