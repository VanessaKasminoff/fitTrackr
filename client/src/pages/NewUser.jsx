import { useState } from "react";
import { Link } from "react-router-dom";
import {useNavigate} from 'react-router-dom'

function NewUser() {

  const navigate = useNavigate()

  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    gender: '',
    password: ''
  })

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
    <div>
      <h1>Log In!</h1>
      <form onSubmit={handleSubmit}>
        <label>First Name</label>
        <input
          value={user.firstName}
          onChange={e => setUser({...user, firstName: e.target.value})}
          id="firstName"
          name="firstName"
          required
        />
        <label>Last Name</label>
        <input
          value={user.lastName}
          onChange={e => setUser({...user, lastName: e.target.value})}
          id="lastName"
          name="lastName"
          required
        />
        <label>Email</label>
        <input
          value={user.email}
          onChange={e => setUser({...user, email: e.target.value})}
          id="email"
          name="email"
          required
        />
        <label>Gender</label>
        <input
          value={user.gender}
          onChange={e => setUser({...user, gender: e.target.value})}
          id="gender"
          name="gender"
          required
        />
        <label>Password</label>
        <input
          type="password"
          value={user.password}
          onChange={e => setUser({...user, password: e.target.value})}
          id="password"
          name="password"
          required
        />
        <input
          type="submit"
          value='Sign Up'
        />
      </form>
      <div>
        <Link to="/Home">Create user</Link>
      </div>
    </div>
  );
}

export default NewUser;
