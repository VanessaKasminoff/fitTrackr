import { Link } from "react-router-dom";

function Landing() {
  return (
    <header class="header">
    {/* nav */}
    <nav>
      <input type="checkbox" id="check" />
      <label for="check" class="checkbtn">
        <i class="fas fa-bars"></i>
      </label>
      <ul>
        <li><a class="active" href="#"></a></li>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
    {/* Logo */}
    <div class="logo-box">
      <img src="src/assets/img/logo.png" alt="logo" class="logo" />
    </div>
    {/* Hero Content */}
    <div class="text-box">
      <h1 class="heading-primary">
        <span className="heading-primary-main">FitTrackr</span>
        <span className="heading-primary-sub">Empower your fitness journey</span>
      </h1>
    </div>
  </header>
    // <div>
    //   <h1>Landing Page!</h1>
    //   <div>
    //   <Link to="/NewUser">New User</Link>
    //   </div>
    //   <Link to="/LogIn">Log In</Link>
    // </div>
  );
}

export default Landing;
