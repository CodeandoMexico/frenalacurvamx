import React from 'react'

import logoAnimalPolitico from '../images/logos/animal_politico.svg'
import covid19Casos from '../images/illustrations/COVID-19_Outbreak_Cases_in_Mexico.wikipedia.svg'
import gobMXLogo from '../images/logos/gob_mx.svg'

const MediosOficiales = () => (
  <section className="section has-bg-blue-grey section-feature-grey initiatives">
    <div className="container">
      <div className="has-text-centered">
        <h1 className="title is-1 is-bold has-text-light has-text-centered">
          <strong>
            <span className="is-white">
              Conoce los medios oficiales en donde podrás encontrar información verificada
            </span>
          </strong>
        </h1>
        <br />
        <h3 className="subtitle is-white is-3 has-text-centered">Infórmate, cuídate y cuida, participa.</h3>
        <h3 className="subtitle is-white has-text-centered">
          Evitemos la desinformación, los #fakenews, mitos, etc. No todo lo que nos mandan en redes sociales es verdad,
          ¡infórmate! y comparte noticias que informen veracidad, no que inculquen miedo.
          <br />
          <span className="is-white has-text-weight-bold">(Da click en la imagen para ir al sitio.)</span>
        </h3>
        <br />
      </div>
      <div className="columns is-variable is-8">
        <div className="column mb-20">
          <a
            target="_blank"
            title="Animal Político, noticias verificadas"
            href="https://www.animalpolitico.com/noticias-coronavirus-covid-2019-verificacion/"
            rel="noopener noreferrer"
          >
            <br />
            <img alt="Logotipo de Animal Político" style={{ maxHeight: '100px' }} src={logoAnimalPolitico} />
            <br />
            <br />
            <h4 className="subtitle is-extra-padded has-text-light is-3 has-text-centered">Animal Político</h4>
            <p className="has-text-light has-text-centered is-4">
              Información útil y verificada sobre el Coronavirus en México.
            </p>
          </a>
        </div>
        <div className="column mb-20">
          <a
            target="_blank"
            title="Mapa en tiempo real del coronavirus en México"
            href="https://covid19enmexico.com/"
            rel="noopener noreferrer"
          >
            <img alt="Mapa del coronavirus en México" style={{ maxHeight: '128px' }} src={covid19Casos} />
            <h4 className="subtitle is-extra-padded has-text-light is-3 has-text-centered">
              Mapa de Casos de Coronavirus
            </h4>
            <p className="has-text-light has-text-centered is-4">
              Actualización en tiempo real de los casos en México.
            </p>
          </a>
        </div>
        <div className="column mb-20">
          <a
            target="_blank"
            title="Información oficial del Gobierno de México"
            href="https://coronavirus.gob.mx/"
            rel="noopener noreferrer"
          >
            <br />
            <img alt="Logotipo del Gobierno de México" style={{ maxHeight: '100px' }} src={gobMXLogo} />
            <br />
            <br />
            <h4 className="subtitle is-extra-padded has-text-light is-3 has-text-centered">Gobierno de México</h4>
            <p className="has-text-light has-text-centered is-4">Sitio oficial del Coronavirus en México.</p>
          </a>
        </div>
      </div>
    </div>
  </section>
)

export default MediosOficiales
