import React from "react";
import { Link } from "react-router-dom";

const DashboardCard = ({ title, content, imageUrl }) => {
    const cardStyle = {
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        color: '#fff',
        padding: '20px',
        borderRadius: '8px',
    };

    const textContainerStyle = {
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        padding: '5px',
        borderRadius: '8px',
    };

    return (
        <div className="dashboard-card" style={cardStyle}>
            <div style={textContainerStyle}>
                <h3>{title}</h3>
                <p>{content}</p>
                <Link to="/mealprep" className="card-link">Learn more</Link>
            </div>
        </div>
    );
}

export default DashboardCard;