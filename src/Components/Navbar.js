import React from 'react'
import "../Css/Nav.css"
import {Link} from "react-router-dom"
const Navbar = () => {
  return (
    
    <div className='nav'>
        <h2 className='logo'>Explore...!</h2>
        <div className='nav-items'>
            <Link to="/"> <h3>Home</h3> </Link>
            <Link to="/login"> <h3>Login</h3> </Link>           
            <Link to="/register"> <h3>Register</h3> </Link>
            <Link to=""><h3>Contact Us</h3> </Link>
            </div>
        </div>
   
  )
}

export default Navbar