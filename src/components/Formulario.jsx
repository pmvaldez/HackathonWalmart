import React from 'react'
import "../style/formulario.css"
const Formulario = () => {
    return (
        <div class="contenedorAbuelo">
            <div class="contenedorFormulario">
                <form >
                    <div class="form-row">
                        <div class="form-group col-md-5">
                            <label for="inputEmail4">Nombre Alerta</label>
                            <input type="text" class="form-control" id="inputNombre" placeholder="Nombre" />
                        </div>
                        <div class="form-group col-md-5">
                            <label for="example-datetime-local-input" >Fecha ingreso</label>
                            <div class="col-12">
                                <input class="form-control" type="datetime-local" value="20-10-2020 09:00" id="example-datetime-local-input" />
                            </div>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-4">
                            <label for="inputState">Region</label>
                            <select id="inputState" class="form-control">
                                <option selected>Todo el territorio</option>
                                <option selected>R. Los Lagos</option>
                                <option selected>R.Metropolitana</option>
                                <option selected>R. Bio-Bio</option>
                            </select>
                        </div>
                        <div class="form-group col-md-4">
                            <label for="inputState">Clasificacion</label>
                            <select id="inputState" class="form-control">
                                <option selected>General</option>
                                <option selected>Salud</option>
                                <option selected>Alimentos</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="inputAddress2">Conceptos</label>
                        <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                    </div>


                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">Mensaje</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div class="form-group col-md-5">
                        <label for="inputEmail4">Destinatarios</label>
                        <input type="text" class="form-control" id="inputNombre" placeholder="Nombre" />
                    </div>
                    <button type="submit" class="btn btn-warning">Generar nueva alerta</button>
                </form>
            </div>
        </div>
    )
}

export default Formulario
