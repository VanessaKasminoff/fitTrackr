import React from 'react';
import { Link } from 'react-router-dom';
import CardContainer from '../assets/components/landingCard'; 
import Footer from '../assets/components/footer';

function Landing() {
  return (
    <div>
      <header className="header">
        {/* nav */}
        <nav>
          <input type="checkbox" id="check" />
          <label htmlFor="check" className="checkbtn">
            <i className="fas fa-bars"></i>
          </label>
          <label className="logo-box">
            <img src="src/assets/img/logo.png" alt="logo" className="logo" />
          </label>
          <ul className='nav-content'>
            <li><a className="active" href="#"></a></li>
            <li><a href="#">About</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href='/NewUser'>Sign Up</a></li>
            <li><a href="/LogIn">Login</a></li>
          </ul>
        </nav>
        {/* Hero Content */}
        <div className="text-box">
          <h1 className="heading-primary">
            <span className="heading-primary-main">FitTrackr</span>
            <span className="heading-primary-sub">Empower your fitness journey</span>
          </h1>
        </div>
      </header>
      <main className="main-content">
        <CardContainer />
        {/* Add your other sections here */}
      </main>
      <Footer />
    </div>
  );
}

export default Landing;