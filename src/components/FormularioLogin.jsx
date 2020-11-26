import React from 'react'

const Login = () => {

    const [email, setEmail] = React.useState('')
    const [pass, setPass] = React.useState('')
    const [error, setError] = React.useState(null)

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
    return (
        <div className="mt-5">
            <h3 className="text-center">Acceso o Registro de usuarios</h3>
            <hr />
            <div className="row justify-content-center">
                <div className="col-12 col-sm-8 col-md-6 col-xl-4">
                    <form>
                        <input
                            type="email"
                            className="form-control mb-2"
                            placeholder="Ingrese Email"
                        />
                        <input
                            type="password"
                            className="form-control mb-2"
                            placeholder="Ingrese Contraseña"
                        />
                        <button
                            className="btn btn-lg btn-dark btn-block"
                            type="submit"
                        >
                            Ingresar
                    </button>
                        <button
                            className="btn btn-sm btn-info btn-block"
                            type="button"
                        >
                            ¿No tienes cuenta?
                    </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
