import React from 'react'
const labsPc = require('../../images/illustrations/labsPC.svg')
const labsDistribuidos = () =>(
    <section>
        <div style={{fontFamily:"'Spartan', sans-serif", marginTop:"65px", marginBottom:"60px"}} className="container">
        <h1 style={{color:"#F04B56", textAlign:"center", fontSize:"65px",fontWeight:"800"}}>#LabsDistribuidos</h1>
            <div style={{padding:"100px", paddingTop:"15px"}} className="columns">
                <div style={{padding:"50px", paddingTop:"100px", paddingLeft:"100px"}} className="column is-two-thirds">
                    <h4 style={{fontWeight:"700"}}>Aporta ideas, suma tu creatividad y energía. </h4>
                    <h4 style={{fontWeight:"700", marginTop:"16px"}}>Convocamos a personas que quieran colaborar y experimentar nuevas posibilidades de ayuda en tiempos del COVID-19.</h4>
                    {/* <div style={{display:"flex", marginTop:"30px"}}>
                        <a href="https://mx.mapa.frenalacurva.net/" target="blank"><button className="button-mapa-mobile column button cta is-rounded primary-btn raised">IR AL LAB</button></a>
                        <a href="#" target="blank"><button className="buttons-mobile column button cta is-rounded primary-btn raised">VER TUTORIAL</button></a>
                        <a href="https://bit.ly/FLCMXmapaguia" target="blank"><button  className="buttons-mobile column button cta is-rounded primary-btn raised">MANUAL DE USO</button></a>
                    </div> */}
                </div>  
                <div className="column">
                    <img src={labsPc} alt=""/>
                </div>
            </div>
        </div>
    </section>
)
export default labsDistribuidos