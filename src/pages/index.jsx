import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import MediosOficiales from '../components/mediosOficiales'
import Iniciativas from '../components/iniciativas'
import TwitterBox from '../components/twitterBox/TwitterBox'
import MainHero from '../components/mainHero'

const IndexPage = () => (
  <Layout>
    <SEO title="Inicio" />
    <MainHero />
    <MediosOficiales />
    <Iniciativas />
    <TwitterBox />
  </Layout>
)
export default IndexPage
