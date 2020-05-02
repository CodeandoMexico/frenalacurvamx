import React from "react"
import "./labsParticipar.scss"
const foco = require("../../images/illustrations/Labs-Foco.svg")
const Participar = () => (
    <section>
        <div className="container" style={{fontFamily:"'Spartan', sans-serif", textAlign:"center"}}>
            <img src={foco} style={{width:"150px", height:"150px", marginTop:"40px"}}></img>
            <div style={{fontSize:"35px", fontWeight:"800", color:"#252525"}}>¿Cómo puedo participar en <div>el Laboratorio Ciudadano Distribuido? </div></div>
            <div className="columns" style={{paddingLeft:"100px", paddingRight:"100px"}}>
                <div className="column">
                    <div className="box-info">Súmate al equipo de mediación: <div style={{fontWeight:"normal", textAlign:"start"}}>La labor de los mediadores es la de hacer que las cosas sucedan, es decir, crear las condiciones de cuidados necesarias para que los grupos de trabajo puedan participar y colaborar en la producción de prototipos que den solución a los problemas planteados.</div> </div>
                    <a href="https://bit.ly/labsdistribuidos-registro" target="blank"><button className="button cta is-rounded primary-btn raised">QUIERO UNIRME</button></a>
                </div>
                <div className="column">
                    <div className="box-info">Súmate como promotor de proyecto:<div style={{fontWeight:"normal", textAlign:"start"}}>Los promotores son todos aquellas personas miembros de la sociedad que viven y observan una problemática y a quienes se les ocurre una solución posible. Para pasar de la imaginación a la realidad ellas y ellos ven la necesidad de tener un proyecto abierto a la colaboración de otras personas.</div> </div>
                    <a href="https://bit.ly/labsdistribuidos-registro" target="blank"><button className="button cta is-rounded primary-btn raised">QUIERO UNIRME</button></a>
                </div>
                <div className="column">
                    <div className="box-info">Súmate como colaborador:<div style={{fontWeight:"normal", textAlign:"start"}}>Los promotores son todos aquellas personas miembros de la sociedad que viven y observan una problemática y a quienes se les ocurre una solución posible. Para pasar de la imaginación a la realidad ellas y ellos ven la necesidad de tener un proyecto abierto a la colaboración de otras personas.</div> </div>
                    <a href="https://bit.ly/labsdistribuidos-registro" target="blank"><button className="button cta is-rounded primary-btn raised">QUIERO UNIRME</button></a>
                </div>
            </div>
        </div>
    </section>
)
export default Participar;