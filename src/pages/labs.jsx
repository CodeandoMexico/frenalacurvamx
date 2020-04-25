import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import labs01 from '../images/illustrations/FLC-MX_LandingPage_LABS_01.jpg'
import labs02 from '../images/illustrations/FLC-MX_LandingPage_LABS_02.jpg'
import labs03 from '../images/illustrations/FLC-MX_LandingPage_LABS_03.jpg'

const LabsPage = () => (
    <Layout>
        <SEO title="Labs" />
        <section className="hero is-default is-bold">
            <div className="container" style={{ padding: '50px' }}>
                <div className="has-text-centered">
                    <a href="https://forms.gle/RePGicQCeEanBPz67/" target="_blank" rel="noopener noreferrer">
                        <img src={labs01} alt="frena la curva temporal" />
                    </a>
                </div>
            </div>
        </section>

        <section className="section mb-20 initiatives hero" style={{ background: '#F04B56' }}>	
            <div className="container">
                <div className="has-text-centered">
                    <img src={labs02} alt="frena la curva temporal" />
                </div>
            </div>
        </section>

        <section className="section mb-20 initiatives hero">	
            <div className="container">
                <div className="has-text-centered">
                    <a href="https://forms.gle/RePGicQCeEanBPz67" target="_blank" rel="noopener noreferrer">
                        <img src={labs03} alt="frena la curva temporal" />
                    </a>
                </div>
            </div>
        </section>
    </Layout>
)


export default LabsPage

