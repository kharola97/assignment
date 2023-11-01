import React from 'react'
import { Link } from 'react-router-dom'
import "../Css/Register.css"
const Register = () => {
  return (
    <div className='register'>
        <h2>Register</h2>
        <form className='register-elements'>
            <div className='details'>
            <label htmlFor='username'>Username</label>
            <input type='text' id='username' required></input>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' required></input>
            <label htmlFor='phone'>Phone</label>
            <input type='tel' id='phone' required></input>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' required></input>
            <button type='submit'>register</button>
            </div>
            <div className='address' >
            <label htmlFor='state'>State</label>
            <input type='text' id='state' required></input>
            <label htmlFor='city'>City</label>
            <input type='text' id='city' required></input>
            <label htmlFor='street'>Street</label>
            <input type='text' id='street' required></input>
            <label for="img">Select image:</label>
            <input type="file" id="img" name="img" accept="image/*"/>
            <p>Already have an account? <Link to="/login" className='link'>Login</Link></p>
            </div>
        </form>
           
            
    </div>
  )
}

export default Register