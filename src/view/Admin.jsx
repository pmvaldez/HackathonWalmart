import React from 'react'
import Navbar from '../components/Navbar'
import NavbarLeft from '../components/NavbarLeft'


const Admin = () => {
    return (
        <>
        <Navbar />
        <div className="container-fluid">
            <div className="row">
            <NavbarLeft />
            </div>
        </div>
        </>
    )
}

export default Admin
