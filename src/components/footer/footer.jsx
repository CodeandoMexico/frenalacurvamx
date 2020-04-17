import React from "react"
import "./footer.scss";

const logoImg = require('../../images/logos/logo_footer.svg')
const fbImg = require("../../images/icons/icon_footer_Facebook.svg")
const twImg = require("../../images/icons/icon_footer_Twitter.svg")
const igImg = require("../../images/icons/icon_footer_Instagram.svg")
const Footer = () => (
    <footer className="footer footer-dark fullBox diagonalBox" style={{backgroundColor:"white", fontFamily:"'Roboto', sans-serif", color:"white"}}>
        <div className="container">
            <div className="columns" style={{marginTop:"70px"}}>
                <div className="column is-one-quarter">
                    <div className="footer-logo">
                        <img style={{height:"150px", width:"150px", marginTop:"60px"}} src={logoImg} alt="logo frena la curva méxico" />
                    </div>
                </div>
                <div style={{marginTop:"auto"}} className="column is-two-fifths">
                    <div className="footer-column">
                        <div className="footer-header">
                            <h3 style={{fontSize:"24px", fontWeight:"bold", marginBottom:"2px"}}>mexico.frenalacurva.net</h3>
                        </div>
                        <p style={{fontSize:"14px"}}>
                            Es una guía de iniciativas ciudadanas frente al coronavirus (COVID-19), innovación social y resiliencia cívica en tiempos de pandemia, que forma parte de <a style={{color:"#fff", fontWeight:"bold"}} href="http://frenalacurva.net/">FrenaLaCurva.Net</a> que está bajo una <a style={{color:"#fff", fontWeight:"bold"}} href="http://creativecommons.org/licenses/by/2.0/es/">licencia de Creative Commons Reconocimiento 2.0 España</a>.
                        </p>
                        {/* <ul className="link-list">
                            <li><a href="#">Discover features</a></li>
                            <li><a href="#">Our Roadmap</a></li>
                            <li><a href="#">Request features</a></li>
                        </ul> */}
                    </div>
                </div>
                <div style={{marginTop:"auto"}} className="column">
                    <div className="footer-column level-right">
                        <div className="footer-header">
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
                <hr style={{height:"1px"}}></hr>
                    <div styleclassName="columns">
                            <div className="level-left">

                        <div className="column is-1">
                            <a style={{color:"#fff"}} className="level-item" href="/">
                                            INICIO
                            </a>
                        </div>
                        <div className="column is-1">
                            <a style={{color:"#fff"}} className="level-item" href="https://mx.frenalacurva.net/">
                                            INICIATIVAS
                            </a>
                         </div>   
                         <div className="column is-1">
                            <a style={{color:"#fff"}} className="level-item" href="/mapa">
                                            MAPA
                            </a>
                        </div>
                        <div className="column is-1">
                            <a style={{color:"#fff"}} className="level-item" href="/">
                                            NOSOTROS
                            </a>
                        </div>
                        <div className="column is-12">
                            <a style={{color:"#fff"}} className="level-item" href="https://www.facebook.com/frenalacurvamx/">
                                        FRENA LA CURVA MÉXICO © 2020
                            </a>
                        </div>
                        </div>
                        </div>
                    </div>
    </footer>
)

export default Footer