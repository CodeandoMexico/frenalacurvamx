import React from 'react'

import './heroAcercaDe.scss'
import logoSquareWhite from '../../images/illustrations/FLC-MX_QuienesSomos_Logo.cuadrado.white.svg'

export default function HeroAcercaDe() {
  return (
    <>
      <div className="hero is-primary HeroAcercaDe">
        <div className="hero-body">
          <div className="container">
            <div className="columns">
              <div className="column is-5">
                <figure className="image">
                  <img
                    className="HeroAcercaDe-heroImage"
                    src={logoSquareWhite}
                    width={360}
                    height={450}
                    alt="Logo Frena la curva México"
                  />
                </figure>
              </div>
              <div className="column is-7">
                <div className="content">
                  <h1 className="title is-size-1">#FrenaLaCurvaMX</h1>
                  <h2 className="subtitle is-size-3">
                    RED CIUDADANA DE SOLIDARIDAD, de cuidados, información, inovación social y resiliencia cívica
                    contral el #COVID19
                  </h2>
                  <p>
                    Somos una plataforma ciudadana donde personas voluntarias, emprendedoras, activistas, organizaciones
                    sociales, makers y laboratorios de innovación pública y abierta, estamos cooperando para canalizar y
                    organizar la energía social y la resiliencia cívica frente a la pandemia del Covid-19 (coronavirus)
                    dando una respuesta desde la sociedad civil complementaria a la del gobierno y los servicios
                    públicos esenciales.
                  </p>
                  <p>
                    Frena la Curva nace en España durante los días previos al confinamiento, y en simultánea en otros
                    países, entre ellos México, nos auto organizamos para replicar la plataforma.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="DiagonalSpacer" />
    </>
  )
}
