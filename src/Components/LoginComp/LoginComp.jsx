import React from "react"
import './LoginComp.css'
import loginImg from '../Assets/Images/loginImage.jpg'
import { Link } from "react-router-dom";

const LoginComp = (props) => {
  return (
    <div className="loginContainer">
        <div className="container">
            <div className="imageContainer"> 
                <img src={loginImg} alt="" />
             </div>
            <div className="inputsContianer"> 
                <div>
                    <h2>Welcome Back User</h2>
                </div>

                <div className="inputsCredentaialsContainer">
                    <div className="usernameAndPasswordContaienr">
                        <label htmlFor="">UserName or Email </label>
                        <input type="text" placeholder="" />
                    </div>
                    <div className="passwordContainer">
                        <label htmlFor="">Password </label>
                        <input type="password" placeholder="" />
                    </div>

                    <div className="buttonsContainer">
                        
                        <div className="credButtonsContainer">
                            <button  className="loginBtn"> Login </button>
                            <button  className="forgotBtn"> Forgot Password ? Click Here </button>

                        </div>
                       
                        <h5>Dont have an Account ?</h5>
                        <Link to={`/signup/`}>
                         <button  className="signup"> Sign Up Now </button>

                        </Link>
                    </div>

                    <div>
                        {/* <hr/> */}
                        
                    </div>
                    
                </div>
            </div>
        </div>
      
    </div>
  )
};

export default LoginComp;
