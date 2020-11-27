import React from 'react'
import '../style/filter.css'

const FiltroSelect = () => {
    return (
        <div className="contselects">
            <div className="selects"> 
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
    )
}

export default FiltroSelect
