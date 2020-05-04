import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import LabsParticipar from '../components/labsParticipar/labsParticipar'
import LabsCiudadanos from '../components/labsCiudadanos/labsCiudadanos'
import LabsDistribuidos from '../components/labsDistribuidos/labsDistribuidos'
import labs01 from '../images/illustrations/FLC-MX_LandingPage_LABS_01.jpg'
import labs02 from '../images/illustrations/FLC-MX_LandingPage_LABS_02.jpg'
import labs03 from '../images/illustrations/FLC-MX_LandingPage_LABS_08.jpg'

const ctaURL = 'https://bit.ly/labsdistribuidos-registro'

const LabsPage = () => (
    <Layout>
        <SEO title="Labs" />
        <LabsDistribuidos/>
        <LabsCiudadanos/>
        <LabsParticipar/>
    </Layout>
)


export default LabsPage

