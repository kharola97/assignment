import React, { useState } from 'react'
import "../Css/Login.css"
import {Link} from "react-router-dom"
export const Login = () => {
  const [isChecked, setIsChecked] = useState(false)

  return (
    <div className='main-login'>
        <form className='form-elements'>
        <h1>Login</h1>
            <label htmlFor='username'>username</label>
            <input type='text' id='text' name='password'/>
            <label htmlFor='password'>password</label>
            <input type={isChecked ? "text" : "password"} id='password' name='password'/>
            <div className='checkbox'>
            <label htmlFor='checkbox'>show password</label>
            <input type='checkbox' className='check' id='checkbox' onClick={()=>setIsChecked(!isChecked)}></input>
            </div>
            <button type='submit'>Log in</button>
            <p>Dont have an account? <Link to='/register'>Register</Link></p>
        </form>
        </div>
  )
}
