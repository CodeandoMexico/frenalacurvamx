import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MediosOficiales from '../components/mediosOficiales'
import Iniciativas from '../components/iniciativas'
import Twitter from "../components/twitter"
import MainHero from "../components/mainHero"

const IndexPage = () => (
    <Layout>
        <SEO title="Inicio" />
        <MainHero />
        <MediosOficiales />
        <Iniciativas />
        <Twitter />
    </Layout>
)
export default IndexPage
