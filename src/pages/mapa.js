import React from "react"
import ModerationSection from "../components/moderationSection/moderationSection";
import UseMapSection from "../components/useMapSection/useMapSection";
import MapSection from "..//components/mapSection/mapSection"
import Layout from "../components/layout"
import SEO from "../components/seo"
// import "../../static";

import mapa01 from '../images/illustrations/FLC-MX_Mapa_01.png'
import mapa02 from '../images/illustrations/FLC-MX_Mapa_02.png'
import mapa03 from '../images/illustrations/FLC-MX_Mapa_03.png'

const MapaPage = () => (
    <Layout>
        <SEO title="Mapa" />
        <MapSection/>
        <UseMapSection/>
        <ModerationSection/>
    </Layout>
)


export default MapaPage
