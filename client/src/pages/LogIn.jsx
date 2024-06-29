import { useContext, useState } from 'react';
import { CurrentUser } from '../contexts/CurrentUser';
import {useNavigate} from 'react-router-dom'

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
      // idk why i have to specify http://localhost:3008 when i have proxy setup in the package.json D:
      // AND IT CANT EVEN BE FOUND >~<
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
    // <div className="container" id="container">
    //   <div className="form-container sign-up">
    //     <form>
    //       <h1>Create Account</h1>
    //       <div className="social-icons">
    //         <a href="#" className="icon"><i className="fa-brands fa-google"></i></a>
    //         <a href="#" className="icon"><i className="fa-brands fa-apple"></i></a>
    //         <a href="#" className="icon"><i className="fa-brands fa-facebook"></i></a>
    //       </div>
    //       <span>or use your email for registration</span>
    //       <input type="text" placeholder="Name" />
    //       <input type="email" placeholder="Email" />
    //       <input type="password" placeholder="Password" />
    //       <button type="submit">Sign Up</button>
    //     </form>
    //   </div>
    //   <div className="form-container sign-in">
    //     <form>
    //       <h1>Sign In</h1>
    //       <div className="social-icons">
    //         <a href="#" className="icon"><i className="fa-brands fa-google"></i></a>
    //         <a href="#" className="icon"><i className="fa-brands fa-apple"></i></a>
    //         <a href="#" className="icon"><i className="fa-brands fa-facebook"></i></a>
    //       </div>
    //       <span>or use your email password</span>
    //       <input type="email" placeholder="Email" />
    //       <input type="password" placeholder="Password" />
    //       <a href="#">Forget Your Password?</a>
    //       <button type="submit">Sign In</button>
    //     </form>
    //   </div>
    //   <div className="toggle-container">
    //     <div className="toggle">
    //       <div className="toggle-panel toggle-left">
    //         <h1>Welcome Back!</h1>
    //         <p>Enter your personal details to use all of site features</p>
    //         <button className="hidden" id="login">
    //           <Link to="/Home">Log In</Link>
    //         </button>
    //       </div>
    //       <div className="toggle-panel toggle-right">
    //         <h1>Hello, Friend!</h1>
    //         <p>Register with your personal details to use all of site features</p>
    //         <button className="hidden" id="register">
    //           <Link to="/Home">Sign Up</Link>
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          required
          value={credentials.email}
          onChange={e => setCredentials({...credentials, email: e.target.value})}
          id='email'
          name='email'
        />
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          required
          value={credentials.password}
          onChange={e => setCredentials({...credentials, password: e.target.value})}
          id='password'
          name='password'
        />
        <input
          type='submit'
          value='Login'
        />
      </form>
    </div>
  );
}

export default LogIn;