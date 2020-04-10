import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MediosOficiales from '../components/mediosOficiales'
import Iniciativas from '../components/iniciativas'

const IndexPage = () => (
    <Layout>
        <SEO title="Inicio" />
        <MediosOficiales />
        <Iniciativas />
    </Layout>
)
export default IndexPage
