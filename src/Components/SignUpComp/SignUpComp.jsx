import React, { useState } from "react";
import './SignUpComp.css';
import signUpImg from '../Assets/Images/signUp.jpg';
import { Link } from "react-router-dom";

const SignUpComp = (props) => {
  const [firstName, setFirstName] = useState('');
  const [phoneNumber, setphoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleValidation = () => {
    let formIsValid = true;
    let newErrors = {};

    if (!firstName) {
      formIsValid = false;
      newErrors['firstName'] = 'First Name is required';
    }

    if (!phoneNumber) {
      formIsValid = false;
      newErrors['lastName'] = 'Last Name is required';
    }

    if (!email) {
      formIsValid = false;
      newErrors['email'] = 'Email is required';
    } else {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        formIsValid = false;
        newErrors['email'] = 'Invalid email address';
      }
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
    } else {
      console.log('Form has errors');
    }
  };

  return (
    <div className="signpContainer">
      <div className="container">
        <div>
          <div className="imageContainer">
            <img src={signUpImg} alt="" />
          </div>
        </div>
        <div className="inputsContainer">
          <h3>Hi There User, Nice to Meet You</h3>
          <form onSubmit={handleSubmit}>
            <div className="inputsContainer">
              <div className="usernameAndEmailContainer">
                <label htmlFor="firstName"> First Name</label>
                <input
                  type="text"
                  id="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                {errors.firstName && <span style={{color:"red" , marginTop:" 4px", fontSize:"small"}} className="error">{errors.firstName}</span>}
              </div>
              <div className="usernameAndEmailContainer">
                <label htmlFor="phoneNumber">  Phone Number</label>
                <input
                  type="number"
                  id="phoneNumber"
                  value={phoneNumber}
                  onChange={(e) => setphoneNumber(e.target.value)}
                />
                {errors.phoneNumber && <span style={{color:"red" , marginTop:" 4px",fontSize:"small"}} className="error">{errors.phoneNumber}</span>}
              </div>
              <div className="usernameAndEmailContainer">
                <label htmlFor="email"> Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && <span style={{color:"red" , marginTop:" 4px",fontSize:"small"}} className="error">{errors.email}</span>}
              </div>
              <div className="usernameAndEmailContainer">
                <label htmlFor="password"> Password </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {errors.password && <span style={{color:"red" , marginTop:" 4px",fontSize:"small"}} className="error">{errors.password}</span>}
              </div>
            </div>
            <div>
              <button className="signUpBtn" type="submit">Sign Up</button>
              
                <h5>Already have an Account ?</h5>
                <Link to={`/login/`}>
                <button className="loginBtn"> Login</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpComp;
