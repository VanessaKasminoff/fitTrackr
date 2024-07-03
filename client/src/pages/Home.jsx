import { Link } from "react-router-dom";
import {React, useContext} from 'react'
import DashboardCard from "../assets/components/DashboardCard";
import '../assets/scss/_dashboardCard.scss';
import DashboardCircularGraphCard from "../assets/components/DashboardCircularGraphCard";
import DashboardCoachingCard from "../assets/components/DashboardCoachingCard";
import Footer from "../assets/components/footer";
import dashBoy from "../assets/img/stayactive.png";
import mealPrepping from "../assets/img/mealprep-jars.jpg";
import recipesImg from "../assets/img/recipes.jpg";
import faqImg from "../assets/img/healthyfood.jpg"
import { CurrentUser } from '../contexts/CurrentUser';

function Home() { 
  const { currentUser } = useContext(CurrentUser)
  let greetingDiv;
  
  if (currentUser) {
    greetingDiv = (
      <div className="main-card">
        <DashboardCard title="Find your Fit" content={`Hello ${currentUser.firstName}, what are your goals today?`} />
      </div>
    )
  }

  return (
    <div className="home-page">
      <header className="home-header">
      <h1>Welcome to your Dashboard</h1>
      </header>
      <main className="home-main">
{/* 
        <div className="main-card">
          <DashboardCard title="Main Card" content={`Hello ${currentUser.firstName}`} />
        </div> */}
        {greetingDiv}
        <div className="diet-cards">
          <DashboardCard title="Meal Prep" content="Meal prep for success." imageUrl={mealPrepping} />
          <DashboardCard title="Recipes" content="Discover new recipes." imageUrl={recipesImg}/>
          <DashboardCard title="FAQ" content="Answer questions you may have." imageUrl={faqImg}/>
        </div>
      </main>
      <section className="additional-content">
        <DashboardCircularGraphCard />
        <img className="dashBoy-img" src={dashBoy} />
        <DashboardCoachingCard />
      </section>
      <Footer />
    </div>
  );
}

export default Home;
