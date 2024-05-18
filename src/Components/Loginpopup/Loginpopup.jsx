import React, { useState } from 'react'
import './Loginpopup.css'
const Loginpopup = ({ setShowLogin }) => {
    const [currState, setcurrState] = useState("Login")




    return (
        <div className='loginpopup'>
            <form className="login-popup-container">
                <div className="login-popup-title">
                    <h2>{currState}</h2>
                    <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
                </div>
                <div className="login-popup-input">
                    {currState === "Login" ? <></> : <input type="text" placeholder='Your name' required />}

                    <input type="email" placeholder='email' required />
                    <input type="password" placeholder='password' required />
                </div>
                <button>{currState === "sign up" ? "create account" : "Login"} </button>
                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>By continuing, i agree to the terms of use & privacy policy</p>
                </div>
                {currState === "Login"
                    ? <p>Create a New Acount? <span onClick={()=>setcurrState("sign up")} >Click here</span> </p>
                    : <p>Already have an account? <span onClick={()=>setcurrState("Login")} >Login here</span> </p>
                }
            </form>
        </div>
    )
}
import './Loginpopup.css'
import { assets } from '../../assets/assets'
export default Loginpopup
