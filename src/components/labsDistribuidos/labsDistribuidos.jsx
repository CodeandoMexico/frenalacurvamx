import React from 'react'
import './labsDistribuidos.scss'
import labsPc from '../../images/illustrations/labsPC.svg'
const labsDistribuidos = () => (
  <section>
    <div style={{ fontFamily: "'Spartan', sans-serif", marginTop: '65px', marginBottom: '60px' }} className="container">
      <div style={{ padding: '100px', paddingTop: '15px' }} className="columns">
        <div className="column is-two-thirds pad-title">
          <h1 className="title-LabsDistribuidos">#LabsDistribuidos</h1>
          <h4 style={{ fontSize: '24px', fontWeight: 'bold', color: '#E84652' }}>
            Aporta ideas, suma tu creatividad y energía.{' '}
          </h4>
          <h4 style={{ fontSize: '24px', fontWeight: 'bold', marginTop: '30px' }}>
            Convocamos a personas que quieran colaborar y experimentar nuevas posibilidades de ayuda en tiempos del
            COVID-19.
          </h4>
          {/* <a href="https://bit.ly/labsdistribuidos-colaboradores" target="blank">
            <button style={{ marginTop: '30px' }} className="button cta is-rounded primary-btn raised">
              QUIERO UNIRME
            </button>
          </a> */}
          {/* <div style={{display:"flex", marginTop:"30px"}}>
                        <a href="https://mx.mapa.frenalacurva.net/" target="blank"><button className="button-mapa-mobile column button cta is-rounded primary-btn raised">IR AL LAB</button></a>
                        <a href="#" target="blank"><button className="buttons-mobile column button cta is-rounded primary-btn raised">VER TUTORIAL</button></a>
                        <a href="https://bit.ly/FLCMXmapaguia" target="blank"><button  className="buttons-mobile column button cta is-rounded primary-btn raised">MANUAL DE USO</button></a>
                    </div> */}
        </div>
        <div className="column">
          <img src={labsPc} alt="" />
        </div>
      </div>
    </div>
  </section>
)
export default labsDistribuidos
