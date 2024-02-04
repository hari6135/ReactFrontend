import React from 'react';
import '../styles/OtpForm.css'
import { useNavigate } from 'react-router-dom';
function OtpForm(){
  const navigate=useNavigate
    return (
      <div className="input-field22">

    <form className="otp-Form22">  
      <span className="mainHeading22">Enter OTP</span>
      <p className="otpSubheading22">We have sent a verification code to your mobile number</p>
      <div className="inputContainer22" >
        <input required="required" maxLength="1" type="text" className="otp-input22" id="otp-input1" autoFocus/>
        <input required="required" maxLength="1" type="text" className="otp-input22" id="otp-input2" />
        <input required="required" maxLength="1" type="text" className="otp-input22" id="otp-input3" />
        <input required="required" maxLength="1" type="text" className="otp-input22" id="otp-input4" />
      </div>
      <button className="verifyButton22" type="submit" >Verify</button>
      <button className="exitBtn22" onClick={()=>navigate('/login')}>×</button>
      <p className="resendNote22">Didn't receive the code? <button className="resendBtn22">Resend Code</button></p>
    </form>


    {/* Hamster */}
    <div aria-label="Orange and tan hamster running in a metal wheel" role="img" className="wheel-and-hamster">
      <div className="wheel"></div>
      <div className="hamster">
        <div className="hamster__body">
          <div className="hamster__head">
            <div className="hamster__ear"></div>
            <div className="hamster__eye"></div>
            <div className="hamster__nose"></div>
          </div>
          <div className="hamster__limb hamster__limb--fr"></div>
          <div className="hamster__limb hamster__limb--fl"></div>
          <div className="hamster__limb hamster__limb--br"></div>
          <div className="hamster__limb hamster__limb--bl"></div>
          <div className="hamster__tail"></div>
        </div>
      </div>
      <div className="spoke"></div>
    </div>

    </div>
    );
  }
export default OtpForm
;

   
