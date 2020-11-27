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
                        <div class="card-footer" style={{backgroundColor:'#4773E1'}}>
                    <svg width="2em" height="2em" style={{float: 'right'}} viewBox="0 0 16 16" class="bi bi-plus-circle-fill" fill="#FFBC00" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
                                </svg>
                    </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-body">
                    <h5 class="card-title">Alertas Automaticas</h5>
                    <p class="card-text">Verifica y edita las alertas enviadas automaticamente por sistema</p>
                    <div class="card-footer" style={{backgroundColor:'#26045E'}}>
                    <svg width="2em" height="2em" style={{float: 'right'}} viewBox="0 0 16 16" class="bi bi-plus-circle-fill" fill="#0076CD" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-11.5.5a.5.5 0 0 1 0-1h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5z"/>
                                </svg>
                    </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-body">
                    <h5 class="card-title">Gestionar Usuarios</h5>
                    <p class="card-text">Invita a nuevos usuarios, revisa tu historial con ellos y el estado de las alertas que comparten.</p>
                    <div class="card-footer" style={{backgroundColor:'#140035'}}>
                    <svg width="2em" height="2em" style={{float: 'right'}} viewBox="0 0 16 16" class="bi bi-plus-circle-fill" fill="#0076CD" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/>
                        </svg>
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
