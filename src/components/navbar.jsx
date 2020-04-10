import React from 'react'

import logoImg from '../images/logos/logo_horizontal.png'

const Navbar = () => (
    <>
        <nav className="navbar is-fresh is-transparent no-shadow" role="navigation" ariaLabel="main navigation">
            <div className="container">
                <div className="navbar-brand">
                    <a className="navbar-item" href="/">
                        <img src={logoImg} alt="" height="35" />
                    </a>

                    {/* <a className="navbar-item is-hidden-desktop is-hidden-tablet">
                        <div id="menu-icon-wrapper" className="menu-icon-wrapper" style="visibility: visible;">
                            <svg width="1000px" height="1000px">
                                <path className="path1" d="M 300 400 L 700 400 C 900 400 900 750 600 850 A 400 400 0 0 1 200 200 L 800 800"></path>
                                <path className="path2" d="M 300 500 L 700 500"></path>
                                <path className="path3" d="M 700 600 L 300 600 C 100 600 100 200 400 150 A 400 380 0 1 1 200 800 L 800 200"></path>
                            </svg>
                            <button id="menu-icon-trigger" className="menu-icon-trigger"></button>
                        </div>
                    </a> */}

                    <a role="button" className="navbar-burger" ariaLabel="menu" aria-expanded="false" data-target="navbar-menu">
                        <span ariaHidden="true" />
                        <span ariaHidden="true" />
                        <span ariaHidden="true" />
                    </a>
                </div>

                <div id="navbar-menu" className="navbar-menu is-static">

                    {/* <!-- <div className="navbar-start">
                        <a className="navbar-item is-hidden-mobile">
                            <div id="menu-icon-wrapper" className="menu-icon-wrapper" style="visibility: visible;">
                                <svg width="1000px" height="1000px">
                                    <path className="path1" d="M 300 400 L 700 400 C 900 400 900 750 600 850 A 400 400 0 0 1 200 200 L 800 800"></path>
                                    <path className="path2" d="M 300 500 L 700 500"></path>
                                    <path className="path3" d="M 700 600 L 300 600 C 100 600 100 200 400 150 A 400 380 0 1 1 200 800 L 800 200"></path>
                                </svg>
                                <button id="menu-icon-trigger" className="menu-icon-trigger"></button>
                            </div>
                        </a>
                    </div> --> */}

                    <div className="navbar-end">
                        <a href="https://www.facebook.com/frenalacurvamx/" target="_blank" className="navbar-item is-secondary" rel="noopener noreferrer">
                            <img src="icons/ico-fb.png" width="20" />
                        </a>
                        <a href="https://twitter.com/frenalacurvamx/" target="_blank" className="navbar-item is-secondary" rel="noopener noreferrer">
                            <img src="icons/ico-tw.png" width="20" />
                        </a>
                        <a href="https://www.instagram.com/frenalacurvamx/" target="_blank" className="navbar-item is-secondary" rel="noopener noreferrer">
                            <img src="icons/ico-insta.png" width="20" />
                        </a>
                        {/* <!-- <a href="#" className="navbar-item is-secondary modal-trigger" data-modal="auth-modal">
                            Log in
                        </a> --> */}
                        <a href="http://mx.frenalacurva.net" className="navbar-item">
                            <span className="button cta is-rounded">
                                ACTÚA
                            </span>
                        </a>
                        <a href="/mapa" className="navbar-item">
                            <span className="button signup-button rounded secondary-btn raised">
                                MAPA
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    </>
)


export default Navbar
