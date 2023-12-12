import React from "react"
import './SignUpComp.css'
import signUpImg from '../Assets/Images/signUp.jpg'
import { Link } from "react-router-dom";

const SignUpComp = (props) => {
  return (
    <div>
      <div className="signpContainer">
        <div className="container">

            <div>
                <div className="imageContainer">
                    <img src={signUpImg} alt="" />
                </div>
            </div>
            <div className="inputsContainer">
                <h3>Hi There User , Nice to Meet You</h3>

                <div className="inputsContainer">

                    <div >
                        <div className="usernameAndEmailContainer">
                            <label htmlFor=""> First Name</label>
                            <input type="text" name="" id="" />
                        </div>
                        <div className="usernameAndEmailContainer">
                            <label htmlFor=""> Last Name</label>
                            <input type="text" name="" id="" />
                        </div>
                        <div className="usernameAndEmailContainer">
                            <label htmlFor=""> Email</label>
                            <input type="email" name="" id="" />
                        </div>
                        <div className="usernameAndEmailContainer">
                            <label htmlFor=""> Password </label>
                            <input type="password" name="" id="" />
                        </div>
                        
                    </div>

                    <div>
                        <button className="signUpBtn">Sign Up</button>
                        <Link to={`/login/`}>
                            <button className="loginBtn">Already have an Account ? Login</button>
                        </Link>
                    </div>


                </div>
            </div>

        </div>
        
      </div>
    </div>
  )
};

export default SignUpComp;
