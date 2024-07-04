import React from "react";
import kickboxingImage from "../img/kickboxing.jpg";
import { Link } from "react-router-dom";

const DashboardCoachingCard = () => {
    return (
        <div className="coaching-card">
            <img src={kickboxingImage} alt="kickboxing" className="coaching-card-image" />
            <div className="coaching-content">
                <h2>Fitness Coaching</h2>
                <p>Here are some pre-designed workouts or create your own!</p>
                <Link to="/fitness" className="fitness-link">Get Fit</Link>
            </div>
        </div>
    );
};

export default DashboardCoachingCard