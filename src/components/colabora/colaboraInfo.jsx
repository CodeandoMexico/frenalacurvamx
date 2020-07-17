import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
const ForoComunidad = require('../../images/illustrations/ForoComunidad.svg')
const ColaboraInfo = () => {
  return (
    <Container>
      <Row>
        <Col>
          <div style={{ marginBottom: '38px', marginTop: '125px' }}>
            <h2
              style={{ fontFamily: "'Raleway', sans-serif", textAlign: 'start', fontSize: '50px', fontWeight: 'bold' }}
            >
              Comunidad
            </h2>
            <p style={{ fontSize: '22px', textAlign: 'start', marginTop: '5px', color: '#FF3047', fontWeight: '600' }}>
              Colabora + Comparte + Comunica
            </p>
          </div>
          <div style={{ fontSize: '18px', textAlign: 'start', marginBottom: '23px' }}>
            <h4>
              ¿Quiéres dar una clase online?, ¿compartir el directorio de negocios locales?, ¿formar parte de un grupo
              creativo para enfrentar la contingencia? Aquí las personas publican recursos, ideas y proyectos para tejer
              una red ciudadana.
            </h4>
            <h4>
              Somos{' '}
              <div>
                <span style={{ color: 'red', fontWeight: 'bold' }}>432</span> personas que hemos subido{' '}
                <span style={{ color: 'red', fontWeight: 'bold' }}>216</span> publicaciones{' '}
              </div>
            </h4>
          </div>
          <a href="https://admin.typeform.com/login/" target="blank">
            <button
              style={{ textAlign: 'start', paddingLeft: '40px', fontSize: '16px', height: '44px' }}
              className=" column button cta is-rounded primary-btn raised"
            >
              Comparte Contenido
            </button>
          </a>
        </Col>
        <Col>
          <img style={{ marginTop: '100px', marginLeft: '50px' }} src={ForoComunidad} />
        </Col>
      </Row>
    </Container>
  )
}

export default ColaboraInfo
