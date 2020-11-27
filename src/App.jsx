import React from 'react'
/* import { ThemeProvider } from 'styled-components'; */
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { auth } from './db/firebase'
import Admin from './view/Admin'
import Login from './view/Login'
import Repository from './view/Repository'
import CrearFormulario from './view/CrearFormulario'
import NuevoUsuario from './view/NuevoUsuario'
import Alert from './view/Alert'

/* import Toggle from './components/Toggle';
import {useDarkMode} from './useDarkMode';
import { GlobalStyles } from './global'
import { lightTheme, darkTheme } from './theme'; */


const App = () => {

  React.useEffect(() => {
    auth.onAuthStateChanged(user => {
        if(user){
            console.log(user)
        }else{
            console.log('no hay usuario registrado')

        }
    })
}, ) 
  /*   const [theme, toggleTheme, componentMounted] = useDarkMode();
    const themeMode = theme === 'light' ? lightTheme : darkTheme;
    if (!componentMounted) {
      return <div />
    }; */

  return (
    /*     <ThemeProvider theme={themeMode}> */
    <>
      {/*     <GlobalStyles />
    <Toggle theme={theme} toggleTheme={toggleTheme} /> */}
      <Router>
        <Route exact path="/"
          component={Login}>
        </Route>
        <Route path="/Admin"
          component={Admin}>
        </Route>
        <Route path="/repositorio"
          component={Repository}>
        </Route>
        <Route path="/Alert"
          component={Alert}>
        </Route>
        <Route path="/formulario"
          component={CrearFormulario}>
        </Route>
        <Route path="/registro"
          component={NuevoUsuario}>
        </Route>
        <Route path="/crearalerta"
          component={CrearFormulario}>
        </Route>
      </Router>
    </>
    /*   </ThemeProvider> */
  )
}

export default App
