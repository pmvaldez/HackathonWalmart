import React from 'react'
import { auth} from '../db/firebase'
import {withRouter} from 'react-router'

const Navbar = (props) => {

    const logOut = () => {
        auth.signOut()
        .then(()=>{
                props.history.push('/')
        })
      }
    return (
        <div>
            <h1>soy el navbar</h1>
            <button onClick={logOut}>Cerrar Sesion</button>
        </div>
    )
}

export default withRouter(Navbar)
