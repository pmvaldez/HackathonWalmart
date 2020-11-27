import React from 'react'
import { Progress } from 'antd';
import '../style/card.css'
import graf from '../img/covid.PNG'
const CardOne = () => {
    return (
        <>
        <h1 style={{marginLeft:'22rem', marginTop:'3rem'}}>Bienvenida Daniela</h1>
        <div className="containerCard">
            <div class="card-deck" style={{width:'90%' }}>
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Crear Alerta Prioritaria</h5>
                        <p class="card-text">Notifica al instante las nuevas normativas anunciadas por las Seremis Regionales</p>              
                        <button className="btn btn-lg btnsing btn-block"></button>
                    </div>
                </div>
                <div class="card">
                    <div class="card-body">
                    <h5 class="card-title">Editar Repositorio </h5>
                    <p class="card-text">Edita, elimina y agrega nueva documentación al Repositorio de Normativas.</p>
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
                        <Progress percent={90} style={{color:'rgb(0 0 0 / 89%)'}} />
                        <Progress percent={80} status="active" />
                        <Progress percent={70} />
                        <Progress percent={70} status="active" />
                        <Progress percent={65} />
                        <Progress percent={65} status="active" />
                        <Progress percent={60} />
                        <Progress percent={55} status="active" />
                        <Progress percent={50} />
                        <Progress percent={40} status="active" />
                        <Progress percent={30} />
                        <Progress percent={20} status="active" />
                    </div>
                    <div className="card">
                        <img src={graf} alt="" style={{width:'100%'}}/>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default CardOne
