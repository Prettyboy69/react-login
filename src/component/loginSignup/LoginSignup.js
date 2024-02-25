import React, { useState } from 'react'
import './LoginSignup.css'
import user_icon from './Assets/user_icon.jpg'
import gmail_icon from './Assets/gmail_icon.png'
import password_icon from './Assets/password icon.png'


const LoginSignup = () => {
    const [Action, setAction] = useState("Login");
  return (
    <div className='container'>
        <div className='header'>
            
            
            <div className='text'>{Action}</div>
            <div className='underline'></div>
        </div>
        <div className='inputs'>
            {Action==="Login"?<div></div>: <div className='input'>
            <input type='text'  placeholder='user_name'/>
            </div>}
            
                <div className='input'>
                <input type='email' placeholder='email'/>
            </div>
                <div className='input'>
                <input type='password' placeholder='password' />
            </div>
        </div>
        {Action==="Sign up"? <div></div>:<div className='forgot-password'>forget password? <span>Click Here</span></div>}
        
        <div className='submit-container'>
            <div className={Action ==="Login"? "submit gray": "submit"} onClick={()=>{setAction("Sign up")}}>Sign up</div>
            <div className={Action === "Sign Up"?"Submit gray":"submit"} onClick={()=>{setAction('Login')} }>Login</div>
        </div>
    </div>
  )
}

export default LoginSignup;
