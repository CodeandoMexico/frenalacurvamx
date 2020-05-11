import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import HeroAcercaDe from '../components/heroAcercaDe/heroAcercaDe'

import estrategiaImg from '../images/illustrations/FLC-MX_QuienesSomos_Estrategia.svg'
import SocialBox from '../components/socialBox/socialBox'

const QuienesSomos = () => (
  <Layout>
    <SEO title="Quiénes somos" />
    <HeroAcercaDe />
    <section className="section">
      <div className="container">
        <div className="columns has-text-centered">
          <div className="column">
            <div className="content readable">
              <p className="has-text-weight-semibold is-uppercase">Nuestro objectivo</p>
              <h2 className="title is-size-2">Prevenir para actuar</h2>
              <p>
                Nuestro objetivo en México es mantener a las personas sanas el mayor tiempo posible (en la salud y en lo
                económico/laboral). Trabajando en equipo podemos cerrar la brecha que existe entre la capacidad
                instalada de los servicios de salud y el pico de pacientes con Covid-19.
              </p>
              <figure className="image">
                <img src={estrategiaImg} alt="Ciclo de acciones prevenir para actuar" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="section">
      <div className="container">
        <hr className="has-background-primary" />
        <div className="columns">
          <div className="column is-6 content">
            <h2 className="title is-size-2">¿Cómo puedo colaborar con #FrenaLaCurvaMX?</h2>
          </div>
        </div>
        <div className="columns content">
          <div className="column">
            <h3 className="title">#FrenaLaCurvaFORO</h3>
            <p style={{ minHeight: '8rem' }}>
              Si conoces alguna información, idea o iniciativa ciudadana para superar esta contingencia inclúyela en el
              FORO de FLC-MX. Solo hay que registrarse con un correo electrónico y completar la información en una
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
            <p style={{ minHeight: '8rem' }}>
              Si necesitas ayuda o puedes ayudar a otras personas, publica la información ubicando a los negocios
              locales que siguen operando, personas que necesitan apoyo con alguna actividad diaria, organizaciones y
              colectivos que quieran ayudar en esta contingencia.
            </p>
            <div>
              <a href="#" role="button" className="button is-rounded is-primary">
                IR AL MAPA
              </a>
            </div>
          </div>
          <div className="column">
            <h3 className="title">@FrenaLaCurvaMX</h3>
            <p style={{ minHeight: '8rem' }}>
              Para que más gente conozca la iniciativa y encuentre lo que necesita o se ofrezca para ayudar a otras
              personas, puedes difundir lo que se publica en las redes sociales de #FrenalaCurvaMX en Facebook, Twitter
              o Instagram.
            </p>
            <div>
              <SocialBox color="red" size="medium" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="section">
      <div className="container">
        <div className="columns content">
          <div className="column">
            <h3 className="title">Si haces parte de una institución de gobierno u organización</h3>
            <ul className="list-circle-arrow list-circle-arrow--red">
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
                Envía información de la plataforma a todas las personas de tu institución para que puedan activarse como
                personas voluntarias en el mapa, si lo desean.
              </li>
              <li>
                Si tienes más dudas puedes escribirnos a{' '}
                <a href="mailto:frenalacurvamx@gmail.com">frenalacurvamx@gmail.com</a>
              </li>
            </ul>
          </div>
          <div className="column">
            <div className="card has-background-primary has-text-white">
              <div className="card-content">
                <div className="content">
                  <h3 className="title has-text-white">¡Conéctate!</h3>
                  <ul className="list-circle-arrow">
                    <li>
                      Únete al chat de conversación general de Telegram:{' '}
                      <a
                        className="has-text-white has-text-weight-bold"
                        title="link a chat frenalacurvamxchat en telegram"
                        href="https://t.me/frenalacurvamxchat"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        t.me/frenalacurvamxchat
                      </a>
                    </li>
                    <li>
                      Sigue el canal de difusión de #FrenaLaCurvaMX en Telegram:{' '}
                      <a
                        className="has-text-white has-text-weight-bold"
                        title="link a canal de difusión de #FrenaLaCurvaMX"
                        href="https://t.me/frenalacurvamx"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        t.me/frenalacurvamx
                      </a>
                    </li>
                    <li>
                      Inscríbete en el equipo de voluntariado:{' '}
                      <a
                        className="has-text-white has-text-weight-bold"
                        title="Equipo de voluntariado"
                        href="https://bit.ly/FLCMXvoluntario"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        bit.ly/FLCMXvoluntario
                      </a>
                    </li>
                    <li>
                      Únete al grupo de Coordinación de Frena la Curva en tu estado:{' '}
                      <a
                        className="has-text-white has-text-weight-bold"
                        title="Grupo de coordinacion de Frena la curva por estados"
                        href="https://facebook.com/frenalacurvamx/groups"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        facebook.com/frenalacurvamx/groups
                      </a>
                    </li>
                    <li>
                      Comparte la guía de los pásos de cómo te puedes sumar y apoyar:{' '}
                      <a
                        className="has-text-white has-text-weight-bold"
                        title="Iniciativas Frena la curva"
                        href="https://bit.ly/frenalacurvamxiniciativas"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        bit.ly/frenalacurvamxiniciativas
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default QuienesSomos
