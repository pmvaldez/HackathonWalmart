import React from 'react'
import '../style/filter.css'
import minsal from '../db/minsal.json'

import Swal from 'sweetalert2'

import FiltroSelect from './FiltroSelect';

const Filter = () => {
    const data = minsal.data;
    console.log(data)


    return (
        <div className="containerRepo">
            <FiltroSelect/>
            {
              data.map((item, i) => (
                <div className="card"  key={i}>
                    <img src={item.img} class="card-img-top" alt="..."/>
                    <div className="card-body">
                        <p className="card-title">{item.title}</p>
                        <p className="card-text">Fecha: {item.date}</p>
                        <p className="card-text">Autor: {item.author}</p>
                        <button><a href={item.link} target='blank'>ver</a></button> 
                    </div>

                </div>
            ))}
        </div>
    )
}

export default Filter

