import React, { useState } from 'react'
import './LoginPop.css'
import { assets } from '../../assets/assets'

const LoginPop = () => {
    const [currentState,setCurrentState] = useState("Login")

  return (
    <div className='login-popup'>
     <form  className="login-popup-container">
        <div className='login-popup-title'>
            <h2>{currentState}</h2>

            <img onClick={()=> setShowLogin(false)} src={assets.cross_icon} alt="Close-login"/>
        </div>
        <div className='login-popup-inputs'>
            {currentState==="login"?<></>:<input type="text" placeholder='Your name' required/>}
           
           <input type='email' placeholder='Your email' required/>
           <input type='passward' placeholder='Passward' required/>
        </div>
        <button>{currentState==="sign up"?"Create account":"login"}</button>
     </form>
    </div>
  )
}

export default LoginPop