import React from 'react'
import './CSS/LoginPage.css'
import { Link } from 'react-router-dom'

const LoginSignup = () => {

  const handleSubmit = () => {
    alert("Welcome to E-Commerce")
  }

  return (
    <div className='loginsignup'>
      <div className='loginsignup-container'>
        <h1>Sign Up</h1>

        <form onSubmit={handleSubmit}>
          <div className='loginsignup-fields'>
            <input type='text' placeholder='Enter Your Name' />
            <input type='email' placeholder='Email Address' />
            <input type='password' placeholder='Password' />
            <input type='text' placeholder='Enter Your Number' />

          </div>
          <button type='submit'>Continue</button>
          <p className='loginsignup-login'>
            Already have an account?
            <Link style={{ textDecoration: 'none'}} to='/LoginPage'>
              <span>  Login here</span>
            </Link>
          </p>
          <div className='loginsignup-agree'>
            <input type='checkbox' name='' id='' />
            <p>By continuing, I agree to the terms of use & privacy policy.</p>
          </div>
        </form>

      </div>
    </div>
  )
}

export default LoginSignup
