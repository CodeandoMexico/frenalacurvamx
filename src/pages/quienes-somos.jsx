import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

const QuienesSomos = () => (
  <Layout>
    <SEO title="Quiénes somos" />
    <section className="hero is-primary">
      <div className="hero-body">
        <div className="container">
          <div className="columns">
            <div className="column is-5">
              <figure className="image">
                <img src="https://via.placeholder.com/400" alt="temporal" />
              </figure>
            </div>
            <div className="column is-7">
              <h1 className="title">#FrenaLaCurvaMX</h1>
              <h2 className="subtitle">
                RED CIUDADANA DE SOLIDARIDAD, de cuidados, información, inovación social y resiliencia cívica contral el
                #COVID19
              </h2>
              <div className="content">
                <p>
                  Somos una plataforma ciudadana donde personas voluntarias, emprendedoras, activistas, organizaciones
                  sociales, makers y laboratorios de innovación pública y abierta, estamos cooperando para canalizar y
                  organizar la energía social y la resiliencia cívica frente a la pandemia del Covid-19 (coronavirus)
                  dando una respuesta desde la sociedad civil complementaria a la del gobierno y los servicios públicos
                  esenciales.
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
    </section>
    <div>
      <section className="section">
        <div className="container content">
          <div className="columns has-text-centered">
            <div className="column">
              <h3>Nuestro objetivo</h3> <h2 className="title">Prevenir para actuar</h2>
              <p>
                Nuestro objetivo en México es mantener a las personas sanas el mayor tiempo posible (en la salud y en lo
                económico/laboral). Trabajando en equipo podemos cerrar la brecha que existe entre la capacidad
                instalada de los servicios de salud y el pico de pacientes con Covid-19.
              </p>
              <figure className="image">
                <img src="https://via.placeholder.com/800x300" alt="temporal" />
              </figure>
            </div>
          </div>
        </div>
      </section>
      <div className="section">
        <div className="container content">
          <div className="columns">
            <div className="column">
              <h2 className="title">¿Cómo puedo colaborar con #FrenaLaCurvaMX?</h2>
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <h3 className="title">#FrenaLaCurvaFORO</h3>
              <p>
                Si conoces alguna información, idea o iniciativa ciudadana para superar esta contingencia inclúyela en
                el FORO de FLC-MX. Solo hay que registrarse con un correo electrónico y completar la información en una
                plantillas muy sencillas para subir las propuestas.
              </p>
              <div>
                <a href="#" role="button" className="button is-rounded is-primary">
                  IR AL FORO
                </a>
              </div>
            </div>
            <div className="column">
              <h3 className="title">#FrenaLaCurvaMAPA</h3>
              <p>
                Si necesitas ayuda o puedes ayudar a otras personas, publica la información ubicando a los negocios
                locales que siguen operando, personas que necesitan apoyo con alguna actividad diaria, organizaciones y
                colectivos que quieran ayudar en esta contingencia.
              </p>
              <a href="#" role="button" className="button is-rounded is-primary">
                IR AL MAPA
              </a>
            </div>
            <div className="column">
              <h3 className="title">@FrenaLaCurvaMX</h3>
              <p>
                Para que más gente conozca la iniciativa y encuentre lo que necesita o se ofrezca para ayudar a otras
                personas, puedes difundir lo que se publica en las redes sociales de #FrenalaCurvaMX en Facebook,
                Twitter o Instagram.
              </p>
              {/* TODO: Implement social butons */}
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <h3 className="title">Si haces parte de una institución de gobierno u organización</h3>
              <ul>
                <li>
                  Dale difusión a la plataforma por todos los medios digitales que tenga tu institución (
                  <a
                    href="https://drive.google.com/open?id=18n8px7p-a9N8zKQgOUGHoyDloCuWn66a"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    aquí tienes elementos gráficos
                  </a>
                  ).
                </li>
                <li>Recomiéndala a las organizaciones sociales y vecinales de tu entorno como una herramienta útil.</li>
                <li>
                  Enlaza equipos y grupos de atención social para detectar necesidades de vecinos y vecinas a través del
                  mapa, así como identificar recursos informales de autoayuda.
                </li>
                <li>
                  Envía información de la plataforma a todas las personas de tu institución para que puedan activarse
                  como personas voluntarias en el mapa, si lo desean.
                </li>
                <li>
                  Si tienes más dudas puedes escribirnos a
                  <a href="mailto:frenalacurvamx@gmail.com">frenalacurvamx@gmail.com</a>
                </li>
              </ul>
            </div>
            <div className="column">
              <div className="card has-background-primary">
                <div className="card-content">
                  <div className="content">
                    <ul>
                      <li>únete</li> <li>sigue el canal</li> <li>inscribete en el </li> <li>unete al grupo de </li>
                      <li>comparte la guia con </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="container content">
          <figure className="image">
            <img className="image" src="https://via.placeholder.com/800x300" alt="temporal" />
          </figure>
        </div>
      </div>
    </div>
  </Layout>
)

export default QuienesSomos
