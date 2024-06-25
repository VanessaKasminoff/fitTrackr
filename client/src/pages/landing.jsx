import { Link } from "react-router-dom";

function Landing() {
  return (
    <div>
      <h1>Landing Page!</h1>
      <div>
        <Link to="/NewUser">New User</Link>
      </div>
      <Link to="/LogIn">Log In</Link>
    </div>
  );
}

export default Landing;
