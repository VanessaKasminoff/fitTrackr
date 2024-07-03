import { Link } from "react-router-dom";
import DashboardCard from "../assets/components/DashboardCard";
import '../assets/scss/_dashboardCard.scss';
import DashboardCircularGraphCard from "../assets/components/DashboardCircularGraphCard";
import DashboardCoachingCard from "../assets/components/DashboardCoachingCard";
import Footer from "../assets/components/footer";

function Home() {
  return (
    <div className="home-page">
      <header className="home-header">
      <h1>Welcome to your Dashboard</h1>
      </header>
      <main className="home-main">
        <div className="main-card">
          <DashboardCard title="Main Card" content="This is the main card info" />
        </div>
        <div className="diet-cards">
          <DashboardCard title="Diet card 1" content="This is diet card 1 info" />
          <DashboardCard title="Diet card 2" content="This is diet card 2 info" />
          <DashboardCard title="Diet card 3" content="This is diet card 3 info" />
        </div>
      </main>
      <section className="additional-content">
        <DashboardCircularGraphCard />
        <DashboardCoachingCard />
      </section>
      <Footer />
    </div>
  );
}

export default Home;
