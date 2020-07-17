import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Colabora from '../components/colabora/colabora'
import ColaboraInfo from '../components/colabora/colaboraInfo'

const ForoPage = () => (
  <Layout>
    <SEO title="Foro" />
    <ColaboraInfo />
    <Colabora />
  </Layout>
)

export default ForoPage
