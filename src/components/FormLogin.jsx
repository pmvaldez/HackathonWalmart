import React, { Fragment } from 'react'
import { Redirect } from 'react-router-dom'
import { db, auth } from '../db/firebase'
import logo from '../img/logo.png'
import '../style/login.css'
import 'antd/dist/antd.css'

const FormLogin = () => {

    const [email, setEmail] = React.useState('')
    const [pass, setPass] = React.useState('')
    const [, setError] = React.useState(null)
    const [validation, setValidation] = React.useState(false)

    const procesarDatos = e => {
        e.preventDefault()

        if (!email.trim()) {
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

    const login = React.useCallback(async () => {
        try {
            const res = await auth.signInWithEmailAndPassword(email, pass)
            setEmail('')
            setPass('')
            setError(null)
            db.collection("usuarios").doc(res.user.uid).get().then((snap) => {
                const user = snap.data();
                console.log('entro', user)
                setValidation(true)
            })
        } catch (error) {
            if (error.code === 'auth/user-not-found') {
                setError('Usuario o contraseña incorrecta')
            }
            if (error.code === 'auth/wrong-password') {
                setError('Usuario o contraseña incorrecta')
            }
            console.log(error.code)
            console.log(error.message)
        }
    }, [email, pass])

    return (

    <Fragment>
        {
            validation === false ?
                (
                <div className= "formCont">
                    <form onSubmit={procesarDatos} className="form-signin">
                        <div className="text-center mb-4">
                            <img className="mb-4" src={logo} alt="" width="200" />
                            <h1 className="h3 mb-3 font-weight-normal">Bienvenid@ a Lewalmart</h1>
                            <p>Ingresa tus datos para entrar</p>
                        </div>

                        <div className="form-label-group">
                            <input
                                className="form-control" 
                                placeholder="Usuario"
                                required autofocus
                                type="email"
                                onChange={e => setEmail(e.target.value)}
                                value={email}
                            />
                            <label for="inputEmail">Email address</label>
                        </div>
                        <div className="form-label-group">
                            <input
                                className="form-control"
                                placeholder="Contraseña"
                                required
                                type="password"
                                onChange={e => setPass(e.target.value)}
                                value={pass}
                            />
                            <label for="inputPassword">Password</label>
                        </div>
                        <div className="checkbox mb-3">
                            <a href='/'> ¿Olvidaste tu contraseña?
                            </a>
                        </div>
                        <button
                            className="btn btn-lg btnsing btn-block"
                            onClick={() => login()}>Iniciar
                        </button>
                    </form>
                </div>
            )
            : <Redirect push to="/Admin" />
        }
        </Fragment>
    )
}

export default FormLogin
