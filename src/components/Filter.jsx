import React from 'react'
import '../style/filter.css'
import minsal from '../db/minsal.json'

const Filter = () => {

    const data = minsal.data;
   /* const [region, setRegion] = React.useState('')
    const [, setData] = React.useState()
    console.log('data',data)
    let house = data.filter((dato) => dato.author === region)
    setData(house)
       const filtroRegion = () =>{
      
        let house = data.filter((dato) => dato.author === region);
        setData(house)
        console.log('house',data)
      }; 
      filtroRegion() */

    return (
        <div className="containerRepo">
            <div className="contselects">
            <div className="selects"> 
                <select name="regiones" id="region" /* onClick={e => setRegion(e.target.value)} */>
                    <option value="todas">Todas</option>
                    <option value="Seremi RM" >Metropolitana</option>
                    <option value="biobio">BioBio</option>
                    <option value="loslagos">Los Lagos</option>
                    <option value="magallanes">Magallanes</option>
                </select>

                <select name="regiones" id="region">
                    <option value="todas">Todas</option>
                    <option value="metropolitana">Metropolitana</option>
                    <option value="biobio">BioBio</option>
                    <option value="loslagos">Los Lagos</option>
                    <option value="magallanes">Magallanes</option>
                </select>

                <select name="regiones" id="region">
                    <option value="todas">Todas</option>
                    <option value="metropolitana">Metropolitana</option>
                    <option value="biobio">BioBio</option>
                    <option value="loslagos">Los Lagos</option>
                    <option value="magallanes">Magallanes</option>
                </select>

                <select name="regiones" id="region">
                    <option value="todas">Fecha</option>
                    <option value="metropolitana">Metropolitana</option>
                    <option value="biobio">BioBio</option>
                </select>
            </div>
        </div>
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

