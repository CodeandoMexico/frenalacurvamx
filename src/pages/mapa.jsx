import React from 'react'
import ModerationSection from '../components/moderationSection/moderationSection'
import UseMapSection from '../components/useMapSection/useMapSection'
import MapSection from '../components/mapSection/mapSection'
import Layout from '../components/layout'
import SEO from '../components/seo'

const MapaPage = () => (
  <Layout>
    <SEO title="Mapa" />
    <MapSection />
    <UseMapSection />
    <ModerationSection />
  </Layout>
)

export default MapaPage
