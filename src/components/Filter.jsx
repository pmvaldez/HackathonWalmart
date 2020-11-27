import React from 'react'
import '../style/filter.css'
import minsal from '../db/minsal.json'

const Filter = () => {
    const [region, setRegion] = React.useState( "minsal")
 
    let data = minsal.data.filter(element=>element.author === region)

    return (
        <div className="containerRepo">
            <div className="contselects">
            <div className="selects"> 
                <select name="regiones" id="region" onChange={e => setRegion(e.target.value)}>
                    <option value="minsal">Todas</option>
                    <option value="Seremi RM" >Metropolitana</option>
      {/*               <option value="biobio">BioBio</option>
                    <option value="loslagos">Los Lagos</option> */}
                    <option value= "Seremi Región de Magallanes">Magallanes</option>
                </select>

                <select name="regiones" id="region">
                    <option value="todas">Clasificación</option>
                    <option value="metropolitana"></option>
                    <option value="biobio"></option>
                    <option value="loslagos"></option>
                    <option value="magallanes"></option>
                </select>

                <select name="regiones" id="region">
                    <option value="todas">Conceptos</option>
                    <option value="metropolitana"></option>
                    <option value="biobio"></option>
                    <option value="loslagos"></option>
                    <option value="magallanes"></option>
                </select>

    {/*             <select name="regiones" id="region">
                    <option value="todas">Fecha</option>
                    <option value="metropolitana"></option>
                    <option value="biobio"></option>
                </select> */}
            </div>
        </div>
            {
              data.map((item, i) => (
                <div className="card"  key={i}>
                    <img src={item.img} class="card-img-top" alt="..."/>
                    <div className="cardbody">
                        <p className="cardtitle">{item.title}</p>
                        <p className="cardtext">Fecha: {item.date}</p>
                        <p className="cardtext">Autor: {item.author}</p>
                        <button><a href={item.link} target='blank'>ver</a></button> 
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Filter
