import React from "react"

import logoImg from '../../images/logos/logo_horizontal_blanco.png'
import fbImg from '../../images/icons/ico-fb.png'
import twImg from '../../images/icons/ico-tw.png'
import igImg from '../../images/icons/ico-insta.png'

const Footer = () => (
    <footer className="footer footer-dark">
        <div className="container">
            <div className="columns">
                <div className="column">
                    <div className="footer-logo">
                        <img src={logoImg} alt="logo frena la curva méxico" />
                    </div>
                </div>
                <div className="column">
                    <div className="footer-column">
                        <div className="footer-header">
                            <h3>Frena La Curva México</h3>
                        </div>
                        <p>
                            <a href="http://mexico.frenalacurva.net/">Mexico.FrenaLaCurva.net</a> es una guía de iniciativas ciudadanas frente al coronavirus (COVID-19), innovación social y resiliencia cívica en tiempos de pandemia, que forma parte de <a href="http://frenalacurva.net/">FrenaLaCurva.Net</a> que está bajo una <a href="http://creativecommons.org/licenses/by/2.0/es/">licencia de Creative Commons Reconocimiento 2.0 España</a>.
                        </p>
                        {/* <ul className="link-list">
                            <li><a href="#">Discover features</a></li>
                            <li><a href="#">Our Roadmap</a></li>
                            <li><a href="#">Request features</a></li>
                        </ul> */}
                    </div>
                </div>
                <div className="column">
                    <div className="footer-column">
                        <div className="footer-header">
                            <h3>Sigue la conversación</h3>
                            <nav className="level is-mobile">
                                <div className="level-left">
                                    <a className="level-item" href="https://www.facebook.com/frenalacurvamx/">
                                        <span className="icon">
                                            <img src={fbImg} width="20" alt="logo facebook" />
                                        </span>
                                    </a>
                                    <a className="level-item" href="https://twitter.com/frenalacurvamx">
                                        <span className="icon">
                                            <img src={twImg} width="20" alt="logo twitter" />
                                        </span>
                                    </a>
                                    <a className="level-item" href="https://www.instagram.com/frenalacurvamx/">
                                        <span className="icon">
                                            <img src={igImg} width="20" alt="logo instagram" />
                                        </span>
                                    </a>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
)

export default Footer
