import React from 'react'
import laptop from '../../images/illustrations/Quieres-ser-parte-moderacion.svg'
const Moderation = () => (
  <section>
    <div className="container" style={{ fontFamily: "'Spartan', sans-serif", textAlign: 'center' }}>
      <img src={laptop} style={{ width: '150px', height: '150px', marginTop: '40px' }}></img>
      <div style={{ fontSize: '35px', fontWeight: 'bold' }}>
        ¿Quieres ser parte <div>del equipo de moderación?</div>
      </div>
      <div style={{ fontFamily: "'Roboto', sans-serif", fontSize: '18px', marginTop: '15px', marginBottom: '40px' }}>
        Estamos buscando manos que nos ayuden a que este sea un espacio seguro y verificado dentro de la plataforma, a
        revisar las solicitudes de anuncios para homologar información, detectar actividades o información sospechosa,
        verificar la autenticidad de los anuncios e identificar similitudes entre solicitudes y ofrecimientos de apoyo.{' '}
      </div>
      <a href="https://bit.ly/FLCMXvoluntario" target="blank">
        <button className="button cta is-rounded primary-btn raised">QUIERO UNIRME</button>
      </a>
    </div>
  </section>
)
export default Moderation
