import React from 'react'

import './flags.scss'
import spainFlag from '../../images/flags/Bandera_Espana.svg'
import colombiaFlag from '../../images/flags/Bandera_Colombia.svg'
import mexicoFlag from '../../images/flags/Bandera_Mexico.svg'
import costaricaFlag from '../../images/flags/Bandera_CostaRica.svg'
import poloniaFlag from '../../images/flags/Bandera_Polonia.svg'
import ecuadorFlag from '../../images/flags/Bandera_Ecuador.svg'
import franciaFlag from '../../images/flags/Bandera_Francia.svg'
import brasilFlag from '../../images/flags/Bandera_Brasil.svg'
import uruguayFlag from '../../images/flags/Bandera_Uruguay.svg'
import argentinaFlag from '../../images/flags/Bandera_Argentina.svg'
import peruFlag from '../../images/flags/Bandera_Peru.svg'
import portugalFlag from '../../images/flags/Bandera_Portugal.svg'

const flagsItems = [
  {
    country: 'España',
    url: 'https://frenalacurva.net/',
    src: spainFlag,
    alt: `Bandera de España`,
  },
  {
    country: 'Colombia',
    url: 'https://colombia.frenalacurva.net/',
    src: colombiaFlag,
    alt: `Bandera de Colombia`,
  },
  {
    country: 'México',
    url: 'https://mexico.frenalacurva.net/',
    src: mexicoFlag,
    alt: `Bandera de México`,
  },
  {
    country: 'Costa Rica',
    url: 'https://costarica.frenalacurva.net/',
    src: costaricaFlag,
    alt: `Bandera de Costa Rica`,
  },
  {
    country: 'Polonia',
    url: 'http://widzimy.online/',
    src: poloniaFlag,
    alt: `Bandera de Polonia`,
  },
  {
    country: 'Ecuador',
    url: 'https://ecuador.frenalacurva.net',
    src: ecuadorFlag,
    alt: `Bandera de Ecuador`,
  },
  {
    country: 'Francia',
    url: 'http://co-confines.fr/',
    src: franciaFlag,
    alt: `Bandera de Francia`,
  },
  {
    country: 'Brasil',
    url: 'http://www.seguraaonda.com.br/',
    src: brasilFlag,
    alt: `Bandera de Brasil`,
  },
  {
    country: 'Urugay',
    url: 'http://www.acaestamos.uy/',
    src: uruguayFlag,
    alt: `Bandera de Uruguay`,
  },
  {
    country: 'Argentina',
    url: 'http://argentina.frenalacurva.net/',
    src: argentinaFlag,
    alt: `Bandera de Argentina`,
  },
  {
    country: 'Perú',
    url: 'http://frenalacurva.org.pe/',
    src: peruFlag,
    alt: `Bandera de Perú`,
  },
  {
    country: 'Portugal',
    url: 'https://achataacurva.com/',
    src: portugalFlag,
    alt: `Bandera de Portugal`,
  },
]

const Flags = () => (
  <div className="container">
    <div className="Flags">
      <p className="Flags-item has-text-danger">Países actuando:</p>
      {flagsItems.map(flag => (
        <a
          className="Flags-item"
          key={flag.country}
          href={flag.url}
          title={flag.country}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={flag.src} alt={flag.alt} width={45} height={30} />
        </a>
      ))}
    </div>
  </div>
)

export default Flags
