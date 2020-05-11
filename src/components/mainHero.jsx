import React from 'react'

import frenaLaCurvaImg from '../images/logos/imagen-mockups.png'

const MainHero = () => (
  <div className="hero-body">
    <div className="container">
      <div className="columns is-vcentered">
        <div className="column is-7 is-offset-1">
          <figure className="image">
            <img src={frenaLaCurvaImg} alt="Frena La Curva México" />
          </figure>
        </div>
        <div className="column is-3 landing-caption">
          <h1 className="title is-1 is-bold is-spaced">
            Frena <br />
            la curva
            <br />
            México
          </h1>
          <h2 className="subtitle is-5 is-muted">
            Guía de iniciativas ciudadanas frente al coronavirus (COVID-19), innovación social y resiliencia cívica en
            tiempos de pandemia.
          </h2>
          <div className="button-wrap">
            <a href="http://mx.frenalacurva.net" className="button cta is-rounded">
              ACTÚA
            </a>
            <a href="/mapa" className="button cta is-rounded primary-btn raised">
              MAPA
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default MainHero
