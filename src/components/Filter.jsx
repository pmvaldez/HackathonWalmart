import React from 'react'
import '../style/filter.css'
import minsal from '../db/minsal.json'
import Swal from 'sweetalert2'


const Filter = () => {
    const data = minsal.data;
    console.log(data)


    return (
        <div className="containerRepo">
            <h1>filter</h1>
            {data.map((item, i) => (
                <div key={i}>
                    <ul>
                        <img src={item.img} alt="" />
                        <li> {item.date}</li>
                        <li> {item.title}</li>
                        <a href={item.link}>link</a>
                    </ul>
                </div>
            ))}
        </div>
    )
}

export default Filter
