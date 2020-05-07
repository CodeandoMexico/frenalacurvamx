import React from 'react'
import './labsCiudadanos.scss'

const LabsCiudadanos = () => (
  <section className=" fullBox-useMap diagonalBox-useMap">
    <div
      className="container"
      style={{ color: 'white', marginTop: '100px', marginBottom: '300px', paddingRight: '100px', paddingLeft: '100px' }}
    >
      <hr />
      <h2 style={{ fontFamily: "'Spartan', sans-serif", textAlign: 'center', fontSize: '35px', fontWeight: '800' }}>
        Laboratorios Ciudadanos Distribuidos
      </h2>
      <h4
        style={{
          fontFamily: "'Spartan', sans-serif",
          textAlign: 'center',
          fontSize: '18px',
          fontWeight: '800',
          marginTop: '40px',
        }}
      >
        Experimentación, Colaboración e Innovación en condiciones de aislamiento
      </h4>
      <p style={{ fontFamily: "'Roboto', sans-serif", textAlign: 'center', marginTop: '20px' }}>
        Los Laboratorios Ciudadanos Distribuidos son espacios donde la sociedad civil se organiza en búsqueda de
        producir un bienestar común para afrontar la situación producida por el coronavirus (COVID-19). Para ello se
        proponen detectar buenas ideas y personas interesadas en ayudar a llevarlas a cabo mediante la experimentación,
        la colaboración y la innovación ciudadana. Los laboratorios ciudadanos buscan conectar a las diversas voces,
        inquietudes, inteligencias e iniciativas presentes en tiempos de la pandemia y potenciarlas a través de la
        escucha, la experimentación, la convivencia y la producción colaborativa.
      </p>
    </div>
  </section>
)

export default LabsCiudadanos
