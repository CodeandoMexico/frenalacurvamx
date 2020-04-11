import React from 'react'

import spainFlag from '../../images/icons/spain.png'
import colombiaFlag from '../../images/icons/colombia.png'
import mexicoFlag from '../../images/icons/mexico.png'
import costaricaFlag from '../../images/icons/costarica.png'
import poloniaFlag from '../../images/icons/polonia.png'
import ecuadorFlag from '../../images/icons/ecuador.png'
import franciaFlag from '../../images/icons/francia.png'
import brasilFlag from '../../images/icons/brasil.png'
import uruguayFlag from '../../images/icons/uruguay.png'
import argentinaFlag from '../../images/icons/argentina.png'
import peruFlag from '../../images/icons/peru.jpg'

const Flags = () => (
    <nav className="navbar is-fresh is-transparent no-shadow" role="navigation" aria-label="main navigation">
        <div className="container">
            <div className="navbar-end is-pulled-right">
                <div className="navbar-brand navbar-flags">
                    <p className="flags-item is-secondary">Paises actuando:</p>
                    <a href="https://frenalacurva.net/" target="_blank" className="flags-item is-secondary" rel="noopener noreferrer">
                        <img src={spainFlag} alt="bandera de España" />
                    </a>
                    <a href="https://colombia.frenalacurva.net/" target="_blank" className="flags-item is-secondary" rel="noopener noreferrer">
                        <img src={colombiaFlag} alt="bandera de Colombia" />
                    </a>
                    <a href="https://mexico.frenalacurva.net/" target="_blank" className="flags-item is-secondary" rel="noopener noreferrer">
                        <img src={mexicoFlag} alt="bandera de México" />
                    </a>
                    <a href="https://costarica.frenalacurva.net/" target="_blank" className="flags-item is-secondary" rel="noopener noreferrer">
                        <img src={costaricaFlag} alt="bandera de Costa Rica" />
                    </a>
                    <a href="http://widzimy.online/" target="_blank" className="flags-item is-secondary" rel="noopener noreferrer">
                        <img src={poloniaFlag} alt="bandera de Polonia" />
                    </a>
                    <a href="https://ecuador.frenalacurva.net/" target="_blank" className="flags-item is-secondary" rel="noopener noreferrer">
                        <img src={ecuadorFlag} alt="bandera de Ecuador" />
                    </a>
                    <a href="http://co-confines.fr/" target="_blank" className="flags-item is-secondary" rel="noopener noreferrer">
                        <img src={franciaFlag} alt="bandera de Francia" />
                    </a>
                    <a href="http://www.seguraaonda.com.br/" target="_blank" className="flags-item is-secondary" rel="noopener noreferrer">
                        <img src={brasilFlag} alt="bandera de Brasil" />
                    </a>
                    <a href="http://www.acaestamos.uy/" target="_blank" className="flags-item is-secondary" rel="noopener noreferrer">
                        <img src={uruguayFlag} alt="bandera de Uruguay" />
                    </a>
                    <a href="http://argentina.frenalacurva.net/" target="_blank" className="flags-item is-secondary" rel="noopener noreferrer">
                        <img src={argentinaFlag} alt="bandera de Argentina" />
                    </a>
                    <a href="http://frenalacurva.org.pe/" target="_blank" className="flags-item is-secondary" rel="noopener noreferrer">
                        <img src={peruFlag} alt="bandera de Perú" />
                    </a>
                </div>
            </div>
        </div>
    </nav>
)

export default Flags
