import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Welcome Home Fitness Warrior!</h1>
      <div>
        <Link to="/Coaching">Coaching</Link>
      </div>
      <div>
        <Link to="/MealPrep">Meal Prepping</Link>
      </div>
      <div>
        <Link to="/Fitness">Lets get Fit!</Link>
      </div>
      <div>
        <Link to="/Contact">Contact us</Link>
      </div>
      <div>
        <Link to="/LearnMore">Learn More</Link>
      </div>
    </div>
  );
}

export default Home;
