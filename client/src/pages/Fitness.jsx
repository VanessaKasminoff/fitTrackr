function Fitness() {
  return (
    <header className="coaching-header">
      <div className="logo-container">
        <img src="../assets/img/logo.png" alt="logo" className="logo" />
      </div>
          <nav className="coaching-nav">
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Login</a></li>
            </ul>
          </nav>
      <div className="coaching-text-box">
        <h1 className="coaching-heading-primary">
          <span className="coaching-heading-primary-main">coaching services</span>
          <span className="coaching-heading-primary-sub">welcome to our coaching services guide</span>
        </h1>
      </div>
  </header>
  );
}

export default Fitness;
