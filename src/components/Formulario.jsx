import React from 'react'
import "../style/formulario.css"
import { db } from '../db/firebase'
import Swal from 'sweetalert2'


const Formulario = () => {


    const [tarea, setTarea] = React.useState('')
    const [tareas, setTareas] = React.useState('')
    const [fecha, setFecha] = React.useState("")
    const [texto, setTexto] = React.useState("")
    const [region, setRegion] = React.useState("")
    const [concepto, setConcepto] = React.useState("")
    const [clasificacion, setClasificacion] = React.useState("")


    const agregar = async (e) => {
        e.preventDefault()
        if (!tarea.trim()) {
            console.log('sin texto')
            return
        }
        console.log(tarea)
        try {

            const nuevaTarea = {
                name: tarea,
                fecha: Date.now(),
                fechaDos: fecha,
                texto: texto,
                region: region,
                concepto: concepto,
                clasificacion: clasificacion
            }
            const data = await db.collection('tareas').add({
                name: tarea,
                fecha: Date.now(),
                fechaDos: fecha,
                texto: texto,
                region: region,
                concepto: concepto,
                clasificacion: clasificacion
            })
            setTareas([
                ...tareas,
                { id: data.id, ...nuevaTarea },

                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: '¡Tu alerta fue enviada exitosamente !',
                    showConfirmButton: false,
                    timer: 1500
                })
            ])
            setTarea('')
        } catch (error) {
            console.log(error)
        }

    }
    console.log(region)
    return (
        <div class="contenedorAbuelo">
            <div class="contenedorFormulario">
                <form onSubmit={agregar}>
                    <div class="form-row">
                        <div class="form-group col-md-5">
                            <label for="inputNombre">Nombre Alerta</label>
                            <input type="text" class="form-control" id="inputNombre" placeholder="Nombre" value={tarea}
                                onChange={e => setTarea(e.target.value)} />
                        </div>
                        <div class="form-group col-md-5">
                            <label for="example-datetime-local-input" >Fecha ingreso</label>
                            <div class="col-12">
                                <input class="form-control" type="datetime" placeholder="dd-mm-aa" value={fecha}
                                    onChange={e => setFecha(e.target.value)} />
                            </div>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-4">
                            <label for="inputState">Region</label>
                            <select id="inputState" class="form-control" onChange={e => setRegion(e.target.value)}>
                                <option value="Todo el terriotrio"
                                >Todo el territorio</option>
                                <option value="Region de Los Lagos"
                                >R. Los Lagos</option>
                                <option value="Region Metropolitana"
                                >R.Metropolitana</option>
                                <option value="Region del Bio-Bio"
                                >R. Bio-Bio</option>
                            </select>
                        </div>
                        <div class="form-group col-md-4">
                            <label for="inputState">Clasificacion</label>
                            <select id="inputState" class="form-control" onChange={e => setClasificacion(e.target.value)}>
                                <option value="General">General</option>
                                <option value="Salud">Salud</option>
                                <option value="Alimentos">Alimentos</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="inputAddress2">Conceptos</label>
                        <input type="text" class="form-control" id="inputAddress2" placeholder="decreto,mascarilla,informe..." value={concepto}
                            onChange={e => setConcepto(e.target.value)} />
                    </div>


                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">Mensaje</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" value={texto}
                            onChange={e => setTexto(e.target.value)}></textarea>
                    </div>
                    <div class="form-group col-md-5">
                        <label for="inputEmail4">Destinatarios</label>
                        <input type="text" class="form-control" id="inputNombre" placeholder="Nombre" />
                    </div>
                    <button type="reset" class="btn btn-warning" onClick={agregar} reset>Generar nueva alerta</button>
                </form>
            </div>
        </div>
    )
}

export default Formulario
