import React from 'react'
import { Progress } from 'antd';
import '../style/card.css'
import graf from '../img/covid.PNG'
const CardOne = () => {
    return (
        <div className="containerCard">
            <h1>Bienvenida Daniela</h1>
            <p >¿Qué necesitas hacer hoy?</p>
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
                        <Progress percent={30} />
                        <Progress percent={50} status="active" />
                        <Progress percent={30} />
                        <Progress percent={50} status="active" />
                        <Progress percent={30} />
                        <Progress percent={50} status="active" />
                        <Progress percent={30} />
                        <Progress percent={50} status="active" />
                        <Progress percent={30} />
                        <Progress percent={50} status="active" />
                        <Progress percent={30} />
                        <Progress percent={50} status="active" />
                    </div>
                    <div className="card">
                        <img src={graf} alt="" style={{width:'100%'}}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardOne
