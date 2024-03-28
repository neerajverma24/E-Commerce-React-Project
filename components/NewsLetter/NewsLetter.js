import React, { useState } from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
    const [emailValue, setEmailValue] = useState('');

    const handleChange = (e) => {
        setEmailValue(e.target.value)
    }
    const handleSubscribe = () => {
        if (!emailValue) {
            alert('Email field is empty!');
        } else if (!isValidEmail(emailValue)) {
            alert('Invalid email format. Please enter a valid email address.');
        } else {
            alert('Thanks to subscribe');
        }
    };

    const isValidEmail = (email) => {
        // Basic email validation with regex
        return /^\S+@\S+\.\S+$/.test(email);
    }

    return (
        <div className='newsletter'>
            <h1>Get Exclusive Offers On Your Email</h1>
            <p>Subscribe to our newletter and stay updated</p>
            <div>
                <input type='email'
                    value={emailValue}
                    placeholder='Your Email Id'
                    onChange={handleChange}
                />
                <button onClick={handleSubscribe}>Subscribe</button>
            </div>
        </div>
    )
}

export default NewsLetter
