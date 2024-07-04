import React from "react";
<link rel="stylesheet" href="./style.css" />
import graphPercentage from "../img/percentagegraph.gif";


// const dashboardCircularGraphCardData = [
//     {  imageUrl: graphPercentage },
// ];


const DashboardCircularGraphCard = () => {
    return (
      <div className="circular-graph-card">
        <div className="circular-graph">
          <div className="circle-content">
            <img src={graphPercentage} />
          </div>
        </div>
      </div>
    );
  };
  ;

export default DashboardCircularGraphCard;


