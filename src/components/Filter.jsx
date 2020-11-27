import React from 'react'
import '../style/filter.css'
import minsal from '../db/minsal.json'

const Filter = () => {
     const  data = minsal.data;
    console.log(data) 
    
    return (
        <div className="containerRepo">
            {
              data.map((item, i) => (
                <div className="card" style={{width: '15rem'}} key={i}>
                    <img src={item.img} class="card-img-top" alt="..."/>
                    <div className="card-body">
                        <p className="card-text">{item.title}</p>
                        <a href={item.link}>link</a>
                    </div>
                </div>
              ))
            }
        </div>
    )
}

export default Filter
