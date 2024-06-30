// import React from 'react';
// import SocialIcons from './SocialIcons';

// const FormContainerLogin = ({ type }) => {
//   let title, emailText, firstNameInput, lastNameInput, passwordText, forgotPasswordLink, buttonText;

//   if (type === 'sign-up') {
//     title = 'Create Account';
//     emailText = 'or use your email for registration';
//     firstNameInput = <input type="text" placeholder="First Name" />;
//     lastNameInput = <input type="text" placeholder="Last Name" />;
//     passwordText = 'Password';
//     buttonText = 'Sign Up';
//   } else {
//     title = 'Sign In';
//     emailText = 'or use your email password';
//     firstNameInput = null;
//     lastNameInput = null;
//     passwordText = 'Password';
//     forgotPasswordLink = <a href="#">Forget Your Password?</a>;
//     buttonText = 'Sign In';
//   }

//   return (
//     <div className={`form-container ${type}`}>
//       <form>
//         <h1>{title}</h1>
//         <SocialIcons />
//         <span>{emailText}</span>
//         {firstNameInput}
//         {lastNameInput}
//         <input type="email" placeholder="Email" />
//         <input type="password" placeholder={passwordText} />
//         {forgotPasswordLink}
//         <button>{buttonText}</button>
//       </form>
//     </div>
//   );
// };

// export default FormContainerLogin;










// import React from 'react';
// import SocialIcons from './SocialIcons';

// const FormContainerLogin = ({ type }) => {
//   const isSignUp = type === 'sign-up';

//   return (
//     <div className={`form-container ${type}`}>
//       <form>
//         <h1>{isSignUp ? 'Create Account' : 'Sign In'}</h1>
//         <SocialIcons />
//         <span>{isSignUp ? 'or use your email for registration' : 'or use your email password'}</span>
//         {isSignUp && <input type="text" placeholder="First Name" />}
//         {isSignUp && <input type="text" placeholder="Last Name" />}
//         <input type="email" placeholder="Email" />
//         <input type="password" placeholder="Password" />
//         {!isSignUp && <a href="#">Forget Your Password?</a>}
//         <button>{isSignUp ? 'Sign Up' : 'Sign In'}</button>
//       </form>
//     </div>
//   );
// };

// export default FormContainerLogin;