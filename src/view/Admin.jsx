import React from 'react'
import CardOne from '../components/CardOne'
/* import CardTwo from '../components/CardTwo' */
import Navbar from '../components/Navbar'
import NavbarLeft from '../components/NavbarLeft'

const Admin = () => {

    return (
        <>
        <Navbar />
{/*         <div style={{display:'flex', flexDirection:'row'}}> */}
            <NavbarLeft />
            <CardOne />
{/*             <CardTwo /> */}

        </>
    )
}

export default Admin
