import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGoogle, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import '../styles/Forget.css'
import { useNavigate } from 'react-router-dom';

function Forget() {
const navigate=useNavigate();

  return (
      <div className="forms-container11">
        <div className="signin-signup11">
          <form action="#" className="sign-in-form11 loginForm11">
            <h2 className="title11">
  
  Forget Password</h2>
  
            <div className="input-field11">
              <FontAwesomeIcon icon={faEnvelope} className='my-auto11 mx-auto11'/>
              <input className='LoginInput11' type="email" placeholder="Email" required/>
            </div> 
            <button className="resetbutton" onClick={() => navigate('/otp')}>
      <span className="resetbutton1">Reset password</span>
    </button>
          </form>
      </div>

      <div className="panels-container11">
        <div className="panel11 left-panel1">
          <div className="content11">
            <h3 className='loginh311'>Forgot Your Password?</h3>
            <p className='loginp11'>
            Change your password to 'incorrect.' 
            That way when you forget it, 
            it always reminds you, 'Your password is incorrect.
            </p>
          </div>
          <div className='body11'></div>
          <img src="/src/gamer.jpg" class="image11" alt="" />        </div>
        <div className="panel11 right-panel11">
          <div className="content11"> 
          </div>
        </div>
      </div>
    </div>
  )}


  export default Forget;