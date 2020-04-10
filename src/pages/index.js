import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MediosOficiales from '../components/mediosOficiales'

const IndexPage = () => (
    <Layout>
        <SEO title="Inicio" />
        <MediosOficiales />
    </Layout>
)
export default IndexPage
