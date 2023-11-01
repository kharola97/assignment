import React from 'react'
import Body from "./Components/Body"
import Nav from './Components/Navbar'
import Register from './Components/Register'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Login } from './Components/Login'
import "./App.css"
const App = () => {
  return (
    <div className="App" >
     <Router>
      <Nav/>
      <Routes>
        <Route path='/' element={<Body/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/Contactus' element={<Body/>}></Route>
     
      </Routes>
      </Router>
      </div>
  )
}

export default App
