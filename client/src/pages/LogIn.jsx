import { React, useContext, useState } from 'react';
import { CurrentUser } from '../contexts/CurrentUser';
import {useNavigate, Link} from 'react-router-dom'

function LogIn() {

  const navigate = useNavigate()

  const {setCurrentUser} = useContext(CurrentUser)

  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  })

  const [errorMessage, setErrorMessage] = useState(null)

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      const response = await fetch('/api/authentication', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
      })
      const data = await response.json()

      console.log(data)

      if (response.status === 200) {
        setCurrentUser(data.user)
        localStorage.setItem('token', data.token)
        navigate('/')
      } else {
        setErrorMessage(data.message)
      }
    } catch (error) {
      console.error('An error occured:', error)
      setErrorMessage('An error occured, please try again')
    }
  }
  
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

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor='email'>Email</label>
//         <input
//           type='email'
//           required
//           value={credentials.email}
//           onChange={e => setCredentials({...credentials, email: e.target.value})}
//           id='email'
//           name='email'
//         />
//         <label htmlFor='password'>Password</label>
//         <input
//           type='password'
//           required
//           value={credentials.password}
//           onChange={e => setCredentials({...credentials, password: e.target.value})}
//           id='password'
//           name='password'
//         />
//         <input
//           type='submit'
//           value='Login'
//         />
//       </form>
//     </div>
//   );
}

export default LogIn;