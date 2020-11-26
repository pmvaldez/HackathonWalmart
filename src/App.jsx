import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Admin from './view/Admin'
import Login from './view/Login'

const App = () => {
  return (
    <>
    <Router>
      <Route exact path="/" 
        component={ Login }> 
      </Route>
      <Route path="/Admin" 
        component={ Admin }>
      </Route>
    </Router>
  </>
)
}

export default App
