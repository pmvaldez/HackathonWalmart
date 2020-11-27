import React from 'react'
import { db, auth } from '../db/firebase'
import Swal from 'sweetalert2'
const Registro = () => {

    const [email, setEmail] = React.useState('')
    const [pass, setPass] = React.useState('')
    const [rol, setRol] = React.useState('')
    const [error, setError] = React.useState(null)

    //validación de campos vacios y password de 6 caracteres
    const procesarDatos = e => {
        e.preventDefault()
        if (!email.trim() || !pass.trim()) {
            console.log('Datos vacíos email!')
            setError('Datos vacíos email!')
            return
        }
        if (!pass.trim()) {
            console.log('Datos vacíos pass!')
            setError('Datos vacíos pass!')
            return
        }
        if (pass.length < 6) {
            console.log('6 o más carácteres')
            setError('6 o más carácteres en pass')
            return
        }
        console.log('correcto...')
        setError(null)
    }

    //funcion para registrar usuarios por correo y guardar datos en firebase
    const registrar = React.useCallback(async () => {
        try {
            const res = await auth.createUserWithEmailAndPassword(email, pass)
            console.log(res.user)
            await db.collection('usuarios').doc(res.user.uid).set({
                fechaCreacion: Date.now(),
                displayName: res.user.displayName,
                photoURL: res.user.photoURL,
                email: res.user.email,
                uid: res.user.uid,
                ocupacion: rol,
            })

            setEmail('')
            setPass('')
            setRol('')
            setError(null)
            Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: '¡Usuario registrado con éxito !',
                showConfirmButton: false,
                timer: 1500
            })
      
            //props.history.push('/Admin')
        } catch (error) {
            console.log(error)
            setError(error.message)
            if (error.code === 'auth/email-already-in-use') {
                setError('Usuario ya registrado...')
                return
            }
            if (error.code === 'auth/invalid-email') {
                setError('Email no válido')
                return
            }
        }
    }, [email, pass,rol])

    return (
        <div style={{marginTop: '50px'}}>
            <h3 className="text-center">
                Registro
            </h3>
            <div className="row justify-content-center">
                <div className="col-12 col-sm-8 col-md-6 col-xl-4">
                    <form onSubmit={procesarDatos}>
                        {
                            error ? (
                                <div className="alert alert-danger">
                                    {error}
                                </div>
                            ) : null
                        }
                        <input
                            type="email"
                            className="form-control mb-2"
                            placeholder="Ingrese Email"
                            onChange={e => setEmail(e.target.value)}
                            value={email}
                        />
                        <input
                            type="password"
                            className="form-control mb-2"
                            placeholder="Ingrese Contraseña"
                            onChange={e => setPass(e.target.value)}
                            value={pass}
                        />
                         <select className="form-control mb-2" name="function" onChange={e => setRol(e.currentTarget.value)}>
                            <option value=''>Elige Ocupación</option>
                            <option value="admin">Administrador</option>
                         </select>
                        <button
                            className="btn btn-lg btn-block"
                            style={{backgroundColor:'#FFBC00'}}
                            type="submit"
                            onClick={registrar}
                        >
                            Registro
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Registro
