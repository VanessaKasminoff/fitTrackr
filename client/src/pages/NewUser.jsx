import {React, useState} from 'react';
import {useNavigate, Link} from 'react-router-dom'

const SignUp = () => {
  
   const navigate = useNavigate()

    const [user, setUser] = useState({
      firstName: '',
      lastName: '',
      email: '',
      gender: '',
      password: ''
    })
  
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen)
    }

   async function handleSubmit(e) {
    e.preventDefault()
    await fetch ('/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    navigate('/NewUser')
  }
  
  return (
    <div className="bgcontainer">
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
            <div className="dropdown">
            <label htmlFor="dropdown" className="dropdown-btn" onClick={toggleDropdown}>
              <span className='gender'>Gender</span>
              <span className="arrow"></span>
            </label>
            <input 
            type="checkbox"
            id="dropdown"
            checked={isDropdownOpen}
            onChange={toggleDropdown}
            />
            {isDropdownOpen && (
              <ul className="dropdown-content">
                  <li>
                    <label htmlFor="male">Male</label>
                    <input type="radio" name='gender' id="male" value="male" />
                  </li>
                  <li>
                    <label htmlFor="female">Female</label>
                    <input type="radio" name='gender' id="female" value="female" />
                  </li>
                  <li>
                    <label htmlFor="non-binary">Non-Binary</label>
                    <input type="radio" name='gender' id="non-binary" value="non-binary" />
                  </li>
              </ul>
            )}
          </div>
            <Link to="/Home"><button type="button">Sign Up</button></Link>
          </form>
        </div>
);

//   return (
//     <div>
//       <h1>Log In!</h1>
//       <form onSubmit={handleSubmit}>
//         <label>First Name</label>
//         <input
//           value={user.firstName}
//           onChange={e => setUser({...user, firstName: e.target.value})}
//           id="firstName"
//           name="firstName"
//           required
//         />
//         <label>Last Name</label>
//         <input
//           value={user.lastName}
//           onChange={e => setUser({...user, lastName: e.target.value})}
//           id="lastName"
//           name="lastName"
//           required
//         />
//         <label>Email</label>
//         <input
//           value={user.email}
//           onChange={e => setUser({...user, email: e.target.value})}
//           id="email"
//           name="email"
//           required
//         />
//         <label>Gender</label>
//         <input
//           value={user.gender}
//           onChange={e => setUser({...user, gender: e.target.value})}
//           id="gender"
//           name="gender"
//           required
//         />
//         <label>Password</label>
//         <input
//           type="password"
//           value={user.password}
//           onChange={e => setUser({...user, password: e.target.value})}
//           id="password"
//           name="password"
//           required
//         />
//         <input
//           type="submit"
//           value='Sign Up'
//         />
//       </form>
//       <div>
//         <Link to="/Home">Create user</Link>
//       </div>
//     </div>
//   );

};

export default SignUp;