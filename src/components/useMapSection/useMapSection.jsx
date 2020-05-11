import React from 'react'
import './useMapSection.scss'
import arrow from '../../images/icons/arrow.svg'
import bluePin from '../../images/icons/Mapa_Pin-Azul.svg'
import purplePin from '../../images/icons/Mapa_Pin-Morado.svg'
import redPin from '../../images/icons/Mapa_Pin-Rojo.svg'
import greenPin from '../../images/icons/Mapa_Pin-Verde.svg'

const UseMapSection = () => (
  <section className="container-MapSection fullBox-useMap diagonalBox-useMap">
    <div className="container" style={{ color: 'black', marginTop: '60px' }}>
      <div className="columns" style={{ marginBottom: '300px' }}>
        <div
          className="column is-one-quarter"
          style={{ padding: '40px', margin: '10px', fontFamily: "'Roboto', sans-serif", backgroundColor: 'white' }}
        >
          <h2 style={{ fontWeight: 'bold', fontSize: '24px' }}>Usa el mapa para:</h2>
          <div className="columns" style={{ marginTop: '10px' }}>
            <img className="img-map" src={arrow} alt="arrow icon" />
            <p>Solicitar apoyo a personas de tu comunidad.</p>
          </div>
          <div className="columns" style={{ marginTop: '10px' }}>
            <img className="img-map" src={arrow} alt="arrow icon" />
            <p>Conocer quiénes necesitan ayuda cerca de donde vives.</p>
          </div>
          <div className="columns" style={{ marginTop: '10px' }}>
            <img className="img-map" src={arrow} alt="arrow icon" />
            <p>Visibilizar tu negocio u organización si ofreces servicio o atención durante esta contingencia</p>
          </div>
          <p>
            Este mapa fue creado con una plataforma de software libre por gente como tú y se encuentra en constante
            construcción.
          </p>
        </div>
        <div className="column is-three-quarters">
          <hr style={{ marginLeft: '-21px', marginTop: '0px' }}></hr>
          <h1 className="principal-Title">¿Qué puedes encontrar en el mapa?</h1>
          <div className="Container">
            <div className="columns" style={{ marginLeft: '10px' }}>
              <div className="column">
                <img className="img-pin" src={bluePin} alt="pin" />
                <div>
                  <h3 className="find-map-titles">Negocios y sevicios locales</h3>
                  <p className="find-map-p">
                    Negocios que continúan ofreciendo productos y servicios y a los que puedes apoyar, como uno
                    restaurante o una tiendita de abarrotes
                  </p>
                </div>
              </div>
              <div className="column">
                <img className="img-pin" src={greenPin} alt="pin" />
                <div>
                  <h3 className="find-map-titles">Organizaciones</h3>
                  <p className="find-map-p">
                    Sociedad civil, colectivo o movimieto brindado y/o solicitando ayuda durante esta contingencia, como
                    albergues, comedores comunitarios u otros.
                  </p>
                </div>
              </div>
              <div className="column">
                <img className="img-pin" src={redPin} alt="pin" />
                <div>
                  <h3 className="find-map-titles">Tengo una necesidad personal</h3>
                  <p className="find-map-p">
                    Apoyo con alguna actividad diaria que no puedas llevar a cabo por la cuarentena, donativos
                    monetarios, de equipo o ropa para apoyar a poblaciones vulnerables.
                  </p>
                </div>
              </div>
              <div className="column">
                <img className="img-pin" src={purplePin} alt="pin" />
                <div>
                  <h3 className="find-map-titles">Quiero apoyar</h3>
                  <p className="find-map-p">
                    Comparte en qué puedes contribuir y ayudar de manera GRATUITA, como pasar por la despensa de alguien
                    en tus alrededores.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default UseMapSection
