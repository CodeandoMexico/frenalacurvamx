import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import mapa01 from '../images/illustrations/FLC-MX_Mapa_01.png'
import mapa02 from '../images/illustrations/FLC-MX_Mapa_02.png'
import mapa03 from '../images/illustrations/FLC-MX_Mapa_03.png'

const MapaPage = () => (
    <Layout>
        <SEO title="Mapa" />
        <section className="hero is-default is-bold">
            {/* {{> flags}}
            {{> navbar}}
            {{> navbar-clone}} */}
            <div className="container" style={{padding: '50px'}}>
                <div className="has-text-centered">
                    <a href="https://mx.mapa.frenalacurva.net/" target="_blank" rel="noopener noreferrer">
                        <img src={mapa01} alt="mapa temporal 1" />
                    </a>
                </div>
            </div>
        </section>
        <section className="section mb-20 initiatives hero" style={{ background:'#F04B56' }}>
            <div className="container">
                <div className="has-text-centered">
                    <a href="https://mx.mapa.frenalacurva.net/" target="_blank" rel="noopener noreferrer">
                        <img src={mapa02} alt="mapa temporal 2" />
                    </a>
                </div>
            </div>
        </section>
        <section className="section mb-20 initiatives hero">
            <div className="container">
                <div className="has-text-centered">
                    <a href="https://bit.ly/FLCMXvoluntario" target="_blank" rel="noopener noreferrer">
                        <img src={mapa03} alt="mapa temporal 3" />
                    </a>
                </div>
            </div>
        </section>
    </Layout>
)


export default MapaPage
