import React from 'react'
import './labsParticipar.scss'
import foco from '../../images/illustrations/Labs-Foco.svg'
import LabsPaciente from '../../images/illustrations/LabsProyectos/LabsPaciente.png'
import LabsEspiritual from '../../images/illustrations/LabsProyectos/LabsEspiritual.png'
import LabsAmilli from '../../images/illustrations/LabsProyectos/LabsAmilli.png'
import LabsEpymes from '../../images/illustrations/LabsProyectos/LabsEpymes.png'
import LabsEconomia from '../../images/illustrations/LabsProyectos/LabsEconomia.png'
import LabsServicio from '../../images/illustrations/LabsProyectos/LabsServicio.png'
import LabsTalleres from '../../images/illustrations/LabsProyectos/LabsTalleres.png'
import LabsMariachi from '../../images/illustrations/LabsProyectos/LabsMariachi.png'
import LabsSanaMente from '../../images/illustrations/LabsProyectos/LabsSanaMente.png'
const Participar = () => (
  <section>
    <div className="container" style={{ fontFamily: "'Spartan', sans-serif", textAlign: 'center' }}>
      <img src={foco} style={{ width: '150px', height: '150px', marginTop: '40px' }}></img>
      <div style={{ fontSize: '35px', fontWeight: '800', color: '#252525' }}>
        Conoce los prototipos del primer #LabsDistribuidos en México
      </div>
      <div className="columns" style={{ marginBottom: '25px' }}>
        <div className="column">
          <div className="box-info">
            Comunica a un Paciente Covid
            <div style={{ height: '30px' }} />
            <img src={LabsPaciente} />
            <div className="box-description">
              Es una iniciativa que nace de la necesidad de comunicación entre los pacientes hospitalizados con el
              diagnóstico de COVID-19 con sus familias, comunicación que se ve limitada por el alto índice de contagio
              de esta enfermedad por lo que se restringen las visitas durante su instancia hospitalaria y el uso de sus
              dispositivos móviles no se permite ya que al ser dados de alta el virus puede permanecer hasta 72 horas
              sobre la superficie de los objetos representando una fuente de contagio.
            </div>{' '}
            <a href="https://sites.google.com/view/comunicaaunpacientecovid/prototipo" target="blank">
              <button className="button cta is-rounded primary-btn raised">Conocer más</button>
            </a>
          </div>
        </div>
        <div className="column">
          <div className="box-info">
            De lo material y lo espiritual en tiempos de Covid-19
            <img src={LabsEspiritual} />
            <div className="box-description">
              Hemos diseñado una vitrina virtual, donde reuniremos el talento, servicio y trabajo de diferentes Artistas
              y Gestores culturales. Visibilizando el trabajo de todos los artistas que se sumen a esta iniciativa, un
              espacio diseñado para la colecta de fondos y recursos que propicien el apoyo de quienes hacen parte del
              sector cultural,solicitando aportes, patrocinios y donaciones a las entidades públicas y privadas, así
              como a la ciudadanía en general.
            </div>{' '}
            <a href="https://sites.google.com/view/la-vitrina-artstica/prototipo" target="blank">
              <button className="button cta is-rounded primary-btn raised">Conocer más</button>
            </a>
          </div>
        </div>
        <div className="column">
          <div className="box-info">
            Amilli
            <div style={{ height: '30px' }} />
            <img src={LabsAmilli} />
            <div className="box-description">
              Somos un proyecto que ha surgido de un laboratorio de prácticas colaborativas en las que el diseño y otras
              disciplinas, buscan contribuir a la sensibilización y resolver de forma sencilla algunas problemáticas. Al
              mismo tiempo, esta es una plataforma que muestra maneras de desarrollar actividades encaminadas a la
              sostenibilidad de los socioecosistemas y construir redes colaborativas para captación y potabilización de
              agua así como la construcción de sistemas sencillos de cultivos agro-ecológicos.
            </div>{' '}
          </div>
          <a href="https://sites.google.com/view/disearconloquehayvivirconloque/prototipo" target="blank">
            <button className="button cta is-rounded primary-btn raised">Conocer más</button>
          </a>
        </div>
      </div>
      <div className="columns" style={{ marginBottom: '25px' }}>
        <div className="column">
          <div className="box-info">
            E-pymes
            <div style={{ height: '30px' }} />
            <img src={LabsEpymes} />
            <div className="box-description">
              Formamos un sitio web dirigido a microempresarios de zonas urbanas de México, por medio del cual se
              brindará una guía con la información necesaria (modelos de negocio, estrategias financieras y de
              mercadotecnia) para hacer frente a la situación generada por Covid19 ayudándolos a migrar a un canal de
              distribución por comercio electrónico.
            </div>{' '}
            <a href="https://sites.google.com/view/epymesepymes/prototipo" target="blank">
              <button className="button cta is-rounded primary-btn raised">Conocer más</button>
            </a>
          </div>
        </div>
        <div className="column">
          <div className="box-info">
            Economía Local Solidaria
            <div style={{ height: '30px' }} />
            <img src={LabsEconomia} />
            <div className="box-description">
              Somos una organización que nace de la iniciativa Frena la curva MX. Estamos Preocupados por el consumo y
              comercio local.
            </div>{' '}
            <a href="https://sites.google.com/view/economalocalsolidaria/prototipo" target="blank">
              <button className="button cta is-rounded primary-btn raised">Conocer más</button>
            </a>
          </div>
        </div>
        <div className="column">
          <div className="box-info">
            Servicio social d.C.
            <div style={{ height: '30px' }} />
            <img src={LabsServicio} />
            <div className="box-description-large">
              El proyecto está encaminado a rediseñar el modelo de Servicio Social universitario para que sea
              efectivamente una experiencia de aprendizaje y de desarrollo social y se ajuste a las necesidades
              derivadas del periodo post-confinamiento producido por la situación de pandemia por COVID-19. Hoy más que
              nunca, es manifiesta la necesidad de formar capacidades distribuidas que nos permitan transformarnos y
              cuidarnos para disfrutar equitativamente del bienestar. Hacer de la universidad un espacio de formación de
              ciudadanía, antes que una institución de entrenamiento laboral, es una de las aspiraciones que animan la
              reflexión sobre el servicio social universitario.
            </div>{' '}
          </div>
          <a href="https://sites.google.com/view/servicio-social-d-c/prototipo" target="blank">
            <button className="button cta is-rounded primary-btn raised">Conocer más</button>
          </a>
        </div>
      </div>
      <div className="columns" style={{ marginBottom: '25px' }}>
        <div className="column">
          <div className="box-info">
            Talleres solidarios en línea
            <div style={{ height: '30px' }} />
            <img src={LabsTalleres} />
            <div className="box-description">
              Somos una red que busca solidarizarse con quienes afecta más la pandemia; quienes la justicia social no ha
              llegado de una o otra manera, quienes han perdido su fuente de ingresos, formal o informalmente. Nuestro
              objetivo es solidarizarnos, construir juntxs una comunidad organizada y poner al alcance de todo mundo los
              saberes con los que contamos; desde sembrar una semilla, hasta escribir un libro, todas las personas
              tenemos algo por compartir.
            </div>{' '}
            <a href="https://sites.google.com/view/talleressolidarios/prototipo" target="blank">
              <button className="button cta is-rounded primary-btn raised">Conocer más</button>
            </a>
          </div>
        </div>
        <div className="column">
          <div className="box-info">
            Salvemos al mariachi
            <img src={LabsMariachi} />
            <div style={{ height: '30px' }} />
            <div className="box-description">
              Es una iniciativa de promoción, apoyo y defensa de las y los músicos que ejercen el Mariachi en la Ciudad
              de México que tiene el objetivo de activar sus ingresos económicos y su reconocimiento
            </div>{' '}
            <a href="https://sites.google.com/view/docartgs/prototipo" target="blank">
              <button className="button cta is-rounded primary-btn raised">Conocer más</button>
            </a>
          </div>
        </div>
        <div className="column">
          <div className="box-info">
            SanaMente
            <div style={{ height: '30px' }} />
            <img src={LabsSanaMente} />
            <div className="box-description">
              SanaMenteMX es una plataforma que conecta especialistas de la salud mental con personas que requieran
              apoyo o estén interesadas en aprender más para cuidarse, y así cuidarnos todos.
            </div>{' '}
          </div>
          <a href="https://sites.google.com/view/sanamentemx/prototipo" target="blank">
            <button className="button cta is-rounded primary-btn raised">Conocer más</button>
          </a>
        </div>
      </div>

      <div style={{ marginTop: '40px' }}>
        ¿Tienes algún proyecto que te gustaría desarrollar en colaboración con otras personas? Te invitamos a participar
        en el siguiente encuentro de experimentación, creación de redes, participación ciudadana y producción
        colaborativa. Puedes escribirnos al correo frenalacurvamx.labs@gmail.com y con gusto te apoyaremos.
      </div>
    </div>
  </section>
)
export default Participar
