/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { Container } from 'react-bootstrap'

// eslint-disable-next-line react/prop-types
const ColaboraDetails = ({ location }) => {
  const [colaboraData, setColaboraData] = useState({})

  useEffect(() => {
    if (location.state.data !== undefined) {
      setColaboraData({ ...location.state.data })
    }
  }, [])

  return (
    <Layout>
      <SEO title="Foro" />
      <Container style={{ fontFamily: "'Raleway', sans-serif", textAlign: 'start' }}>
        <h2 style={{ fontSize: '50px', fontWeight: 'bold', marginTop: '50px' }}>{colaboraData.nombre}</h2>
        <div style={{ display: 'flex' }}>
          <p
            style={{
              width: '400px',
              contain: 'content',
              marginRight: '10px',
              color: 'white',
              borderRadius: '10px',
              textAlign: 'center',
              backgroundColor:
                colaboraData.categoria === 'Información verificada'
                  ? '#74BCEB'
                  : colaboraData.categoria === 'Información Oficial'
                  ? '#5C92D2'
                  : colaboraData.categoria === 'Cuidados, ayuda y bienestar'
                  ? '#CB82EB'
                  : colaboraData.categoria === 'Ocio y recreación durante la cuarentena'
                  ? '#56B69C'
                  : colaboraData.categoria === 'Oportunidades y recomendaciones laborales'
                  ? '#7ACA9C'
                  : '#ED794A',
            }}
          >
            {colaboraData.categoria}
          </p>
          <p
            style={{
              width: '400px',
              contain: 'content',
              backgroundColor: '#1FA4CE',
              marginRight: '10px',
              color: 'white',
              borderRadius: '10px',
              textAlign: 'center',
            }}
          >
            {colaboraData.subcategoria}
          </p>
        </div>
        <h4 style={{ fontSize: '24px', fontWeight: '800', marginTop: '20px' }}>Descripción</h4>
        <p>{colaboraData.descripcion}</p>
        <img style={{ height: '400px', marginTop: '50px', marginBottom: '50px' }} src={colaboraData.url} />
        <h4 style={{ fontSize: '24px', fontWeight: '800' }}>Sito Web</h4>
        <p>{colaboraData.web}</p>
        <h4 style={{ fontSize: '24px', fontWeight: '800', marginTop: '20px' }}>Autor(a)</h4>
        <p>{colaboraData.autor}</p>
      </Container>
    </Layout>
  )
}

export default ColaboraDetails
