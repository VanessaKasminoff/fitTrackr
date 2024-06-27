import React from 'react';
<link rel="stylesheet" href="./style.css" />

import chartImage from '../img/kickboxing.jpg';
import appleWatchImage from '../img/appleWatch.png';
import graphImage from '../img/graph.png';
import gifPhone from '../img/fitTrackr.gif';
import workoutBoy from '../img/workoutBoy.gif';

const cardData = [
    { title: 'your personal fitness companion!', content: 'Track your workouts, monitor progress, and achieve your fitness goals with our intuitive app. Stay motivated with real time stats and personilized data', imageUrl: gifPhone },
    { title: 'fitness insights at your fingertips!', content: 'Empower yourself with in-depth analytics and actionable feedback. From calorie counting to heart rate monitoring, our app supports your quest for a healthier lifestyle.', imageUrl: appleWatchImage },
    { title: 'Reach New Heights with Every Workout!', content: "Elevate your fitness game with our app's advanced analytics and goal-setting features. Whether you run, cycle, or lift, track performance and celebrate milestones effortlessly.", imageUrl: graphImage },
    {title: 'Your Path to Peak Performance Starts Here!', content: "Achieve optimal fitness with our app's personalized plans and real-time coaching. Stay accountable, stay motivated, and see results like never before.", imageUrl: workoutBoy }
];

const Card = ({ title, content, imageUrl, index }) => (
    <div className={`card card-${index}`}>
        <div className="card-text" >
            <h2 className='card-title'>{title}</h2>
            <p className='card-content'>{content}</p>
        </div>
        <div className='card-image'>
            <img src={imageUrl} alt={title} />
        </div>
    </div>
);

const CardContainer = () => (
    <div id="cardContainer">
        {cardData.map((item, index) => (
            <Card key={index} index={index} title={item.title} content={item.content} imageUrl={item.imageUrl} />
        ))}
    </div>
);

export default CardContainer;