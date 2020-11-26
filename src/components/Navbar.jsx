import React from 'react'
import { auth} from '../db/firebase'
import {withRouter} from 'react-router'
import '../style/dashboard.css'
import logo from '../img/logo.png'
const Navbar = (props) => {

    const logOut = () => {
        auth.signOut()
        .then(()=>{
                props.history.push('/')
        })
      }
    return (
        <nav class="navbar navbar-dark sticky-top flex-md-nowrap p-0 shadow" style={{background:'#0076CD'}}>
            <img src={logo} alt="" class="navbar-brand col-md-3 col-lg-2 mr-0 px-3" href="#"/>
{/*             <div className="input">
            <input class="form-control dropdown-toggle" type="text" placeholder="Search" aria-label="Search"></input>
            </div> */}
            <button class="navbar-toggler position-absolute d-md-none collapsed" type="button" data-toggle="collapse" data-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
               <span class="navbar-toggler-icon"></span>
            </button>
            <input class="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search"></input>
            <ul class="navbar-nav px-3">
                <li class="nav-item text-nowrap">
                    <a class="nav-link" onClick={logOut}>Cerrar Sesion</a>
                </li>
            </ul>
        </nav>
    )
}

export default withRouter(Navbar)
