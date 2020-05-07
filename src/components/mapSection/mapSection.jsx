import React from 'react'
import MapaLaptop from '../../images/illustrations/Mapa_laptop.png'
import './mapSection.scss'
import MapaMexico from '../../images/illustrations/Mapa_Mexico.svg'
const MapSection = () => (
  <section>
    <div className="container" style={{ marginTop: '180px', marginBottom: '100px' }}>
      <div className="columns is-mobile">
        <div className="column is-1"></div>
        <div className="column is-half-mobile" style={{ fontFamily: "'Spartan', sans-serif", zIndex: '10' }}>
          <img style={{ width: '45vh' }} src={MapaLaptop}></img>
          <div className="container">
            <h1 className="title-frenaLaCurva">#FrenaLaCurvaMAPA</h1>
            <div style={{ fontSize: '24px', fontWeight: 'bold' }}>
              <p>Conectamos personas para recibir ayuda</p>
              <p>en tiempos del COVID-19</p>
            </div>
          </div>
          <div className="columns" style={{ marginTop: '20px', marginBottom: '20px' }}>
            <a href="https://mx.mapa.frenalacurva.net/" target="blank">
              <button className="button-mapa-mobile column button cta is-rounded primary-btn raised">IR AL MAPA</button>
            </a>
            <a href="#" target="blank">
              <button className="buttons-mobile column button cta is-rounded primary-btn raised">VER TUTORIAL</button>
            </a>
            <a href="https://bit.ly/FLCMXmapaguia" target="blank">
              <button className="buttons-mobile column button cta is-rounded primary-btn raised">MANUAL DE USO</button>
            </a>
          </div>
        </div>
        <div className="column" style={{ marginLeft: '-200px', marginTop: '-70px', zIndex: '1' }}>
          <img style={{ width: '90vh', marginTop: '-60px', maxWidth: 'none' }} src={MapaMexico}></img>
        </div>
      </div>
    </div>
  </section>
)
export default MapSection
