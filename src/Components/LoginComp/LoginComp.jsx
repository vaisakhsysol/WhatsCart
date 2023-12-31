import React, { useState } from "react";
import "./LoginComp.css";
import loginImg from "../Assets/Images/loginImage.jpg";
import { Link } from "react-router-dom";
import LoginOtpComp from "../LoginOtpComp/LoginOtpComp";

const LoginComp = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [showOtpComponent, setShowOtpComponent] = useState(false);

  const handleValidation = () => {
    let formIsValid = true;
    let newErrors = {};

    if (!username) {
      formIsValid = false;
      newErrors['username'] = 'Username is required';
    }

    if (!password) {
      formIsValid = false;
      newErrors['password'] = 'Password is required';
    }

    setErrors(newErrors);
    return formIsValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (handleValidation()) {
      console.log('Form submitted!');
      setShowOtpComponent(false); // Reset showOtpComponent state
    } else {
      console.log('Form has errors');
    }
  };

  const handleOtpButtonClick = () => {
    setShowOtpComponent(true);
  };

  const handleEmailButtonClick = () => {
    setShowOtpComponent(false);
  };

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
          <form className="inputsCredentaialsContainer" onSubmit={handleSubmit}>
            {showOtpComponent ? (
              <LoginOtpComp />
            ) : (
              <>
                <div className="usernameAndPasswordContaienr">
                  <label htmlFor="username">UserName or Email </label>
                  <input
                    type="text"
                    placeholder=""
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  {errors.username && (
                    <span style={{ color: "red", marginTop: " 4px", fontSize: "small" }} className="error">{errors.username}</span>
                  )}
                </div>
                <div className="passwordContainer">
                  <label htmlFor="password">Password </label>
                  <input
                    type="password"
                    placeholder=""
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {errors.password && (
                    <span style={{ color: "red", marginTop: " 4px", fontSize: "small" }} className="error">{errors.password}</span>
                  )}
                </div>
              </>
            )}
            <div className="buttonsContainer">
              <div className="credButtonsContainer">
                <button className="loginBtn" type="submit" onClick={handleEmailButtonClick}> Login with Email </button>
                <button style={{ backgroundColor: "orange", marginTop: "4px" }} className="loginBtn" onClick={handleOtpButtonClick}> Login with OTP</button>
                <button className="forgotBtn"> Forgot Password ? Click Here </button>
              </div>
              <h5>Dont have an Account ?</h5>
              <Link to={`/signup/`}>
                <button className="signup"> Sign Up Now </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginComp;
