import React, { useState } from 'react'
import './login.css'

import header from '../header'

const Loginpopup = ({setshowlogin}) => {

  const [currentstate,setcurrentstate]=useState("login")

  return (
    <div className='login-popup'>

      <form className='login-popup-container'>
        <div className="login-popup-title">
          <h2>{currentstate}</h2>
        <p onClick={()=>setshowlogin(false)}>X</p>  

          </div>

          <div className="input-container">
            {currentstate==="login"?<></>:  <input  className='linput' type="text" placeholder='Your name' required />}
          
            <input className='linput' type="email" placeholder='Your email' required />
            <input  className='linput' type="password" placeholder='Your password' required />
            
          </div>
          <button>{currentstate==="Sign Up"?"Create account":"Login"}</button>
           
           <div className="login-popup-conditions">
            <input type="checkbox" />
            <p className='opt'>By continuing,i agree to the term of use & privacy policy</p>
           </div>

           <div className="login-popup-condition2">
           {currentstate==="login"?  <p className='opt'>Create a new account? <span onClick={()=>setcurrentstate("Sign Up")}>Click here</span></p>
           : <p className='opt'>Already have an account? <span onClick={()=>setcurrentstate("login")}>Login here</span></p>}
         </div>
       

      </form>
      
    </div>
  )
}

export default Loginpopup
