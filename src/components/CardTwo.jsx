import React from 'react'
import '../style/card.css'
import aler from '../img/alert.PNG'
import alerB from '../img/docAler.PNG'

const CardTwo = () => {
    return (
        <>
        <h1 style={{marginLeft:'22rem', marginTop:'3rem'}}>Alertas</h1>
        <div className="containerCard">
            <div class="card-deck" style={{width:'90%' }}>
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Alertas Recibidas</h5>
                        <p class="card-text">Revisa y edita las alertas emitidas por otros usuarios</p>              
                        <button className="btn btn-lg btnsing btn-block"></button>
                    </div>
                </div>
                <div class="card">
                    <div class="card-body">
                    <h5 class="card-title">Alertas Automaticas</h5>
                    <p class="card-text">Verifica y edita las alertas enviadas automaticamente por sistema</p>
                    <button className="btn btn-lg btnsing btn-block"></button>
                    </div>
                </div>
                <div class="card">
                    <div class="card-body">
                    <h5 class="card-title">Gestionar Usuarios</h5>
                    <p class="card-text">Invita a nuevos usuarios, revisa tu historial con ellos y el estado de las alertas que comparten.</p>
                    <div class="card-footer" style={{backgroundColor:'red'}}>
                    </div>
                    </div>
                </div>
            </div>
            <div className="containerBar">
                <div class="card-deck" style={{width:'90%' }}>
                    <div className="cardB">
                    <img src={aler} alt="" style={{width:'100%'}}/>
                    </div>
                    <div className="card">
                    <img src={alerB} alt="" style={{width:'100%'}}/>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default CardTwo
