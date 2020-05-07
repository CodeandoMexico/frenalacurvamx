import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import LabsParticipar from '../components/labsParticipar/labsParticipar'
import LabsCiudadanos from '../components/labsCiudadanos/labsCiudadanos'
import LabsDistribuidos from '../components/labsDistribuidos/labsDistribuidos'

const LabsPage = () => (
  <Layout>
    <SEO title="Labs" />
    <LabsDistribuidos />
    <LabsCiudadanos />
    <LabsParticipar />
  </Layout>
)

export default LabsPage
