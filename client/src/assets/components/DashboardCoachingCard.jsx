import React from "react";
import kickboxingImage from "../img/kickboxing.jpg";

const DashboardCoachingCard = () => {
    return (
        <div className="coaching-card">
            <img src={kickboxingImage} alt="kickboxing" className="coaching-card-image" />
            <div className="coaching-content">
                <h2>Coaching Information</h2>
                <p>This is some information about coaching</p>
            </div>
        </div>
    );
};

export default DashboardCoachingCard