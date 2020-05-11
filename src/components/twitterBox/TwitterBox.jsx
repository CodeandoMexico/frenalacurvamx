import React, { useEffect } from 'react'

const TwitterBox = () => {
  useEffect(() => {
    const scriptElement = document.createElement('script')
    scriptElement.src = 'https://platform.twitter.com/widgets.js'
    scriptElement.charset = 'utf-8'
    scriptElement.async = true
    document.body.appendChild(scriptElement)
    return () => {
      document.body.removeChild(scriptElement)
    }
  }, [])

  return (
    <section className="section is-medium section-feature-grey initiatives">
      <div className="container">
        <div className="columns is-vcentered app-side">
          <div className="column is-4 is-offset-1">
            <h1 className="title is-1 is-bold is-spaced">¡Infórmate!</h1>
            <p className="subtitle is-5 is-muted">
              Mantente pendiente de todo lo que sucede con{' '}
              <a href="http://mexico.frenalacurva.net">Frena La Curva México</a> a través de nuestras distintas redes
              sociales.
            </p>
          </div>
          <div className="column is-5 is-offset-1">
            <a
              className="twitter-timeline"
              data-height="600"
              href="https://twitter.com/frenalacurvamx?ref_src=twsrc%5Etfw"
            >
              Tweets by frenalacurvamx
            </a>
            {/* <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script> */}
            {/* <!-- <div className="has-text-centered">
                            <img className="pushed-image" src="assets/img/illustrations/mockups/app-mockup.png">
                        </div> --> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TwitterBox
