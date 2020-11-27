import React from 'react'

const CardTwo = () => {
    return (
        <div>
            <h1 class="h2">Ultimas Novedades</h1>
            <div class="card-deck">
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
                    <button className="btn btn-lg btnsing btn-block"></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardTwo
