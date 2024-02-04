import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import '../styles/login.css';
import axios from 'axios';
import { toast } from 'react-toastify';
function LoginPage() {
  const navigate=useNavigate();

  const [isSignUpMode, setIsSignUpMode] = useState(false);

  const handleSignUpClick = () => {
    setIsSignUpMode(true);
  };

  const handleSignInClick = () => {
    setIsSignUpMode(false);
  };


  const [loginData, setLoginData] = useState({  username: '', password: '' ,email: ''});
  const [errorMessage, setErrorMessage] = useState('');
let nav = useNavigate();
    
  const onInputChange = (e) =>{

  const{name,value} =e.target;
  setLoginData((prevUser) => ({...prevUser,[name]: value}));
 }
  const handleLoginFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/Signin', loginData);

      if((response.data)==="success")
      {
          toast.success("Logged in successfully :)");
          nav("/");
      }
      else
      {
        toast.error("Invalid");
         console.log(response.data);
      }
      // Handle successful login, e.g., redirect to another page  
    } catch (error) {
      if (error.response)  {
        // Something else went wrong
        toast.error("Incorrect Credentials :(")
    }
}
};

//signup 

let navigate1 = useNavigate();

const [user, setUser] = useState({
  username: '',
  password: '',
  email: '',

});

const onInputChange1 = (e) => {
  setUser({ ...user, [e.target.name]: e.target.value });
};

const { username,email,password } = user;

const onSubmit = async (e) => {
  e.preventDefault();
  await axios.post("http://localhost:8080/Signup",user);
  toast.success("User registration successfully !!!");
  navigate('/main');
};
  return (
    <div className={`loginContainer ${isSignUpMode ? 'sign-up-mode' : ''}`}>
      <div className="forms-container">
        <div className="signin-signup">
          <form onSubmit={(e) => handleLoginFormSubmit(e)} action="#" className="sign-in-form loginForm">
            <h2 className="title">Login</h2>

            <div className="input-field">
              <FontAwesomeIcon icon={faUser} className='my-auto mx-auto'/>
              <input className='LoginInput' type="text" placeholder="Username" name="username" required value={loginData.username} 
              
                onChange={(e) => onInputChange(e)}/>
            </div>
            <div className="input-field">
              <FontAwesomeIcon icon={faEnvelope} className='my-auto mx-auto'/>
              <input className='LoginInput' type="email" placeholder="Email" name = "email" required value= {loginData.email}
              onChange={(e) => onInputChange(e)}/>
            </div>
            <div className="input-field">
              <FontAwesomeIcon icon={faLock} className='my-auto mx-auto'/>
              <input className='LoginInput' type="password" placeholder="Password" name="password" required value ={loginData.password}
              onChange={(e) => onInputChange(e)}/>
            </div>
            <button type="submit" className='loginbtn'>Login</button>
            <p className="social-text loginp"> Sign in with social platforms</p>
            <div className="social-media">
            </div>
          </form>
          <Link to={'/forget'}>
          <button className="forgetpass" >  
          <span>Forget password?</span>
          </button>
          </Link>

          {/* sign up */}

          <form onSubmit={(e) => onSubmit(e)}action="#" className="sign-up-form loginForm">
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <FontAwesomeIcon icon={faUser} className='my-auto mx-auto'/>
              <input className='LoginInput' type="text" placeholder="Username"  name = "username" required value={user.username}
              onChange={(e) => onInputChange1(e)}/>
            </div>
            <div className="input-field">
              <FontAwesomeIcon icon={faEnvelope} className='my-auto mx-auto'/>
              <input className='LoginInput' type="email" placeholder="Email" name="email" required value={user.email}
              onChange={(e) => onInputChange1(e)}/>
            </div>
            <div className="input-field">
              <FontAwesomeIcon icon={faLock} className='my-auto mx-auto'/>
              <input className='LoginInput' type="password" placeholder="Password" name="password" required value={user.password}
              onChange={(e) => onInputChange1(e)}/>
            </div>
            <button className='loginbtn' >Sign Up</button>
            <p className="social-text loginp">Or Sign up with social platforms</p>
            <div className="social-media">
             
            </div>
          </form>
        </div>
      </div>
      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3 className='loginh3'>New here?</h3>
            <p className='loginp'>
            The best way to predict the future is to create it
            </p>
            <button className="loginbtn transparent" onClick={handleSignUpClick}>
              Sign up
              </button>
          </div>
          <div className='body'></div>
          <img src="/img/dogLogin1.svg" class="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3 className='loginh3'>One of us ?</h3>
            <p className='loginp'>
            I'm a gamer. Not because I don't have a life. But because I choose to have many.
            </p>
            <button onClick={handleSignInClick} className="loginbtn transparent" id="sign-in-loginbtn">
              Sign in
            </button>
          </div>
          <img src="/src/gamer.jpg" class="image" alt="" />
        </div>
      </div>
    </div>
  )}

  
  export default LoginPage