import React, { useState } from 'react'
import './Loginpopup.css';
import { assets } from '../../assets/assets';
const Loginpopup = ({setshowLogin}) => {
    const [curState,setcurState] = useState('Login')
    return (
        <div className='login-popup'>
            <form  className="login-popup-container">
                <div className="login-popup-title">
                    <h2>{curState}</h2>
                    <img onClick={()=>setshowLogin(false)} src={assets.cross_icon} alt="" />
                </div>
                <div className="login-popup-inputs">
                    {curState === 'Login'?<></>: <input type="text" placeholder='your name required' />}
                    <input type="email" placeholder='your email required' />
                    <input type="password" placeholder='password  required' />
                </div>
                <button>{curState==='Sign Up'?'Create account':'Login'}</button>
                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>By contininug, i agree to the terms of use & privacy policy.</p>
                </div>
                {curState === 'Login'? <p>Create a new account?
                     <span onClick={()=>setcurState('Sign Up')} >Click here</span></p>:
                      <p>Already have an account? 
                        <span onClick={()=>setcurState('Login')}>Login here</span></p>}
            </form>
        </div>
    )
}

export default Loginpopup
//2:27