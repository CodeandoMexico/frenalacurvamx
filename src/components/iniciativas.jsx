import React from 'react'

import iniciativa1 from '../images/illustrations/iniciativas/1.png'
import iniciativa2 from '../images/illustrations/iniciativas/2.png'
import iniciativa3 from '../images/illustrations/iniciativas/3.png'
import iniciativa4 from '../images/illustrations/iniciativas/4.png'

const Iniciativas = () => (
  <section className="section mb-20 initiatives">
    <div className="container">
      <div className="has-text-centered">
        <h2 className="title is-1 is-bold is-spaced">Conoce las iniciativas </h2>
        <h3 className="subtitle is-muted">
          Conoce las <strong>iniciativas de solidaridad</strong> que han brotado en estos últimos días, van desde dar
          una clase online, compartir el directorio de los negocios locales hasta formar parte de un grupo de makers
          para crear distintas soluciones.
        </h3>
        <h3 className="subtitle is-muted">
          Desde la sociedad civil, desde nuestras organizaciones sociales, nuestras empresas o nuestra propia familia,{' '}
          <strong>JUNTXS como ciudadanía podemos hacerle frente al #COVID19</strong>.
        </h3>
      </div>

      <div className="columns mt-60 has-text-centered desktop">
        <div className="column is-3 is-green">
          <a target="_blank" href="https://mx.frenalacurva.net/c/cuidados" rel="noopener noreferrer">
            <img src={iniciativa1} alt="Cuidados" className="maxw-img" />
            <p className="subtitle is-5 is-bold is-lightpurple">Cuidados</p>
          </a>
        </div>
        <div className="column is-3 is-green">
          <a
            target="_blank"
            href="https://mx.frenalacurva.net/c/que-puedo-hacer-durante-la-cuarentena"
            rel="noopener noreferrer"
          >
            <img src={iniciativa2} alt="¿Qué puedo hacer durante la cuarentena?" className="maxw-img" />
            <p className="subtitle is-5 is-bold is-green">¿Qué puedo hacer durante la cuarentena?</p>
          </a>
        </div>
        <div className="column is-3 is-green">
          <a target="_blank" href="https://mx.frenalacurva.net/c/trabajo" rel="noopener noreferrer">
            <img src={iniciativa3} alt="Trabajos" className="maxw-img" />
            <p className="subtitle is-5 is-bold is-lightgreen">Trabajos</p>
          </a>
        </div>
        <div className="column is-3 is-green">
          <a target="_blank" href="https://mx.frenalacurva.net/c/educacion-para-aprender" rel="noopener noreferrer">
            <img src={iniciativa4} alt="Educación / Para aprender" className="maxw-img" />
            <p className="subtitle is-5 is-bold raised is-orange">Educación / Para aprender</p>
          </a>
        </div>
      </div>

      <div className="title-wrapper mt-60 has-text-centered">
        <h3 className="subtitle is-5 is-muted">
          ¿Prefieres leer un documento?
          <a href="https://bit.ly/frenalacurvamx" target="_blank" rel="noopener noreferrer">
            Puedes hacerlo aquí.
          </a>
        </h3>
      </div>
    </div>
  </section>
)

export default Iniciativas
