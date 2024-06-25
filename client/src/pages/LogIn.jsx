import { Link } from "react-router-dom";

function LogIn() {
  return (
    <div>
      <h1>Log In!</h1>
      <div>
        <Link to="/Home">Create user</Link>
      </div>
    </div>
  );
}

export default LogIn;
