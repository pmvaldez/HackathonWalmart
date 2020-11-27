import React from 'react'
/* import Filter from '../components/Filter'
 */import CardOne from '../components/CardOne'
import Navbar from '../components/Navbar'
import NavbarLeft from '../components/NavbarLeft'

const Admin = () => {

    return (
        <>
        <Navbar />
        <div style={{display:'flex', flexDirection:'row'}}>
            <NavbarLeft />
            <CardOne />
            </div>
        </>
    )
}

export default Admin
