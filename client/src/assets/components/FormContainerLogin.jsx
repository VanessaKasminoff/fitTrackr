import React from 'react';
<link rel="stylesheet" href="./style.css" />

const FormContainerLogin = ({ type }) => {
  const isSignUp = type === 'sign-up';

  return (
    <div className={`form-container ${type}`}>
      <form>
        <h1>{isSignUp ? 'Create Account' : 'Sign In'}</h1>
        {/* <SocialIcons /> */}
        <span>{isSignUp ? 'or use your email for registration' : 'or use your email password'}</span>
        {isSignUp && <input type="text" placeholder="First Name" />}
        {isSignUp && <input type="text" placeholder="Last Name" />}
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        {!isSignUp && <a href="#">Forget Your Password?</a>}
        <button>{isSignUp ? 'Sign Up' : 'Sign In'}</button>
      </form>
    </div>
  );
};

export default FormContainerLogin;