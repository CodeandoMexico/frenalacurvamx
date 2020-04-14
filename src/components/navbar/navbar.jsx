import React, { useState } from 'react'
import { Link } from "gatsby"

import './navbar.scss'
import FLCLogo from '../../images/logos/FLC-MX_Logo_Horizontal.svg'
import logoFB from '../../images/logos/FLC-MX_Facebook.svg'
import logoIG from '../../images/logos/FLC-MX_Instagram.svg'
import logoTW from '../../images/logos/FLC-MX_Twitter.svg'

export default function Navbar () {

    const [isActive, setIsActive] = useState(false)

    const toggleActive = () => setIsActive(!isActive)

    const burgerOnClickHandler = event => toggleActive()

    return (
        <div className="Navbar-wrapper">
            <div className="container">
                <nav className="navbar is-transparent Navbar" role="navigation" aria-label="main navigation">
                    <div className="navbar-brand">
                        <Link to="/" className="navbar-item">
                            <img className="Navbar-logo" src={FLCLogo} alt="Logotipo de Frena la curva México"/>
                        </Link>
                        <a
                            role="button"
                            className={`navbar-burger burger ${isActive ? 'is-active' : ''}`}
                            aria-label="menu"
                            aria-expanded={isActive}
                            onClick={burgerOnClickHandler}
                        >
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </a>
                    </div>
                    <div className={`navbar-menu is-shadowless ${isActive ? 'is-active': ''}`}>
                        <div className="navbar-start"></div>
                        <div className="navbar-end">
                            <Link className="navbar-item is-uppercase" activeClassName="is-active" to="/" onClick={toggleActive}>Inicio</Link>
                            <a className="navbar-item is-uppercase" href="https://mx.frenalacurva.net/" onClick={toggleActive} target="_blank" rel="noopener noreferrer">Foro</a>
                            <Link className="navbar-item is-uppercase" activeClassName="is-active" to="/mapa" onClick={toggleActive}>Mapa</Link>
                            <Link className="navbar-item is-uppercase" activeClassName="is-active" to="/quienes-somos" onClick={toggleActive}>Quiénes somos</Link>
                            <div className="navbar-item-social">
                                <a className="" href="https://www.facebook.com/frenalacurvamx/" onClick={toggleActive} target="_blank" rel="noopener noreferrer">
                                    <img className="navbar-item-social-logo" src={logoFB} alt="Facebook" />
                                </a>
                                <a className="" href="https://twitter.com/frenalacurvamx" onClick={toggleActive} target="_blank" rel="noopener noreferrer">
                                    <img className="navbar-item-social-logo" src={logoTW} alt="Twitter" />
                                </a>
                                <a className="" href="https://www.instagram.com/frenalacurvamx/" onClick={toggleActive} target="_blank" rel="noopener noreferrer">
                                    <img className="navbar-item-social-logo" src={logoIG} alt="Instagram" />
                                </a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}
