import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="hero is-medium">
      <div className="hero-body">
        <div className="container">
          <div className="content has-text-centered">
            <h1 className="title is-size-1">
              404
              <br />
              Contenido no encontrado
            </h1>
            <h2 className="subtitle is-size-3">Aquí no está lo que buscas</h2>
            <h3 className="subtitle is-size-3">😢</h3>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
