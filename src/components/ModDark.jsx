import React from 'react'

const ModDark = () => {

    
    const style = {
        oscuro: {
            backgroundColor: '#092D53', 
            color: '#fff',
    }
    } 
    const cambiarModo = () => { 
        let cuerpoweb = document.body; 
        cuerpoweb.classList.toggle('oscuro'); 
      } 
    
    return (
        <div style={style.oscuro}>
             <img  src="./Initial.png" alt="" onClick={cambiarModo()}></img>
        </div>
    )
}

export default ModDark
