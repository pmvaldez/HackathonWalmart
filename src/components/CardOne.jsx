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
                        <div class="card-footer" style={{backgroundColor:' #4773E1'}}>
                            <a href="/crearalerta">
                                <svg width="2em" height="2em" style={{float: 'right'}} viewBox="0 0 16 16" class="bi bi-plus-circle-fill" fill="#FFBC00" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
                                </svg>
                            </a>
                        </div>
                      {/*  <button className="btn btn-lg btnsing btn-block"></button> */}
                    </div>
                </div>
                <div class="card">
                    <div class="card-body">
                    <h5 class="card-title">Editar Repositorio </h5>
                    <p class="card-text">Edita, elimina y agrega nueva documentación al Repositorio de Normativas.</p>
                    <div class="card-footer" style={{backgroundColor:'#26045E'}}>
                            <a href="/Admin">
                                <svg width="2em" height="2em" style={{float: 'right'}} viewBox="0 0 16 16" class="bi bi-plus-circle-fill" fill="#0076CD" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-11.5.5a.5.5 0 0 1 0-1h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-body">
                    <h5 class="card-title">Gestionar Usuarios</h5>
                    <p class="card-text">Invita a nuevos usuarios, revisa tu historial con ellos y el estado de las alertas que comparten.</p>
                    <div class="card-footer" style={{backgroundColor:'#140035'}}>
                    <a href="/registro">
                        <svg width="2em" height="2em" style={{float: 'right'}} viewBox="0 0 16 16" class="bi bi-plus-circle-fill" fill="#0076CD" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/>
                        </svg>
                    </a>
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
