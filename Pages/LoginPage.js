import React from 'react'
import './CSS/LoginSignup.css'
import { Link } from 'react-router-dom'

const LoginPage = () => {

    const handleSubmit = () => {
        alert("Login Successfully")
    }

    return (
        <div className='login-page'>
            <div className='loginpage-container'>
                <h1>Log In</h1>
                <form onSubmit={handleSubmit}>
                    <div className='loginpage-fields'>
                        <input type='email' placeholder='Email Address' />
                        <input type='password' placeholder='Password' />
                    </div>
                    <button type='submit'>Continue</button>
                    <p className='loginpage-login'>
                        If you are a new user, please
                        <Link to='/login'> <span> Signup </span></Link> here.
                    </p>
                    <div className='loginpage-agree'>
                        <input type='checkbox' name='' id='' />
                        <p>By continuing, I agree to the terms of use & privacy policy.</p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginPage
