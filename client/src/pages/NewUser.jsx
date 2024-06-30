import React from 'react';
import { Link } from "react-router-dom";


const SignUp = () => {
  return (
    <div className="container">
      <div className="form-container sign-up">
        <form>
          <h1>Create Account</h1>
          <div className="social-icons">
            <a href="#" className="icon"><i className="fa-brands fa-google"></i></a>
            <a href="#" className="icon"><i className="fa-brands fa-apple"></i></a>
            <a href="#" className="icon"><i className="fa-brands fa-facebook"></i></a>
          </div>
          <span>or use your email for registration</span>
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="button">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

