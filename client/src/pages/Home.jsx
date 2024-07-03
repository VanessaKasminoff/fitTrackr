import { Link } from "react-router-dom";
import {React, useContext} from 'react'
import DashboardCard from "../assets/components/DashboardCard";
import '../assets/scss/_dashboardCard.scss';
import DashboardCircularGraphCard from "../assets/components/DashboardCircularGraphCard";
import DashboardCoachingCard from "../assets/components/DashboardCoachingCard";
import dashBoy from "../assets/img/stayactive.png";
import { CurrentUser } from '../contexts/CurrentUser';

function Home() { 
  const { currentUser } = useContext(CurrentUser)

  let greetingDiv;

  if (currentUser) {
    greetingDiv = (
      <div className="main-card">
        <DashboardCard title="Main Card" content={`Hello ${currentUser.firstName}`} />
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
          <DashboardCard title="Diet card 1" content="This is diet card 1 info" />
          <DashboardCard title="Diet card 2" content="This is diet card 2 info" />
          <DashboardCard title="Diet card 3" content="This is diet card 3 info" />
        </div>
      </main>
      <section className="additional-content">
        <DashboardCircularGraphCard />
        <img className="dashBoy-img" src={dashBoy} />
        <DashboardCoachingCard />
      </section>
      
 
    </div>
  );
}

export default Home;
