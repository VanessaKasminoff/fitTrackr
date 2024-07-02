import React from 'react';
import { Link } from 'react-router-dom';



const SignIn = () => {
  return (
    <div className="bgcontainer">
      <div className="container">
        <div className="form-container sign-in">
          <form>
            <h1>Sign In</h1>
            <div className="social-icons">
              <a href="#" className="icon"><i className="fa-brands fa-google"></i></a>
              <a href="#" className="icon"><i className="fa-brands fa-apple"></i></a>
              <a href="#" className="icon"><i className="fa-brands fa-facebook"></i></a>
            </div>
            <span>or use your email for login</span>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <a href="#">Forget Your Password?</a>
            <Link to="/Home"><button type="button">Sign In</button></Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;












// import FormContainerLogin from '../assets/components/FormContainerLogin'
// import TogglePanel from '../assets/components/TogglePanel'

// const LogIn = () => {
//   const [isActive, setIsActive] = useState(false);

//   const handleRegisterClick = () => setIsActive(true);
//   const handleLoginClick = () => setIsActive(false);

//   return (
//     <div className={`container ${isActive ? 'active' : ''}`} id="container">
//       <FormContainerLogin type="sign-up" />
//       <FormContainerLogin type="sign-in" />
//       <div className="toggle-container">
//         <div className="toggle">
//           <TogglePanel type="left" onClick={handleLoginClick} />
//           <TogglePanel type="right" onClick={handleRegisterClick} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LogIn;










// function LogIn() {
//   return (
//     <div className="container" id="container">
//       <div className="form-container sign-up">
//         <form>
//           <h1>Create Account</h1>
//           <div className="social-icons">
//             <a href="#" className="icon"><i className="fa-brands fa-google"></i></a>
//             <a href="#" className="icon"><i className="fa-brands fa-apple"></i></a>
//             <a href="#" className="icon"><i className="fa-brands fa-facebook"></i></a>
//           </div>
//           <span>or use your email for registration</span>
//           <input type="text" placeholder="Name" />
//           <input type="email" placeholder="Email" />
//           <input type="password" placeholder="Password" />
//           <button type="submit">Sign Up</button>
//         </form>
//       </div>
//       <div className="form-container sign-in">
//         <form>
//           <h1>Sign In</h1>
//           <div className="social-icons">
//             <a href="#" className="icon"><i className="fa-brands fa-google"></i></a>
//             <a href="#" className="icon"><i className="fa-brands fa-apple"></i></a>
//             <a href="#" className="icon"><i className="fa-brands fa-facebook"></i></a>
//           </div>
//           <span>or use your email password</span>
//           <input type="email" placeholder="Email" />
//           <input type="password" placeholder="Password" />
//           <a href="#">Forget Your Password?</a>
//           <button type="submit">Sign In</button>
//         </form>
//       </div>
//       <div className="toggle-container">
//         <div className="toggle">
//           <div className="toggle-panel toggle-left">
//             <h1>Welcome Back!</h1>
//             <p>Enter your personal details to use all of site features</p>
//             <button className="hidden" id="login">
//               <Link to="/Home">Log In</Link>
//             </button>
//           </div>
//           <div className="toggle-panel toggle-right">
//             <h1>Hello, Friend!</h1>
//             <p>Register with your personal details to use all of site features</p>
//             <button className="hidden" id="register">
//               <Link to="/Home">Sign Up</Link>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default LogIn;



