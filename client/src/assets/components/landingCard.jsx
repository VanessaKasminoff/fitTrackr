import React from 'react';
<link rel="stylesheet" href="style.css" />

import chartImage from '../img/kickboxing.jpg';
import appleWatchImage from '../img/appleWatch.png';
import graphImage from '../img/graph.png';

const cardData = [
    { title: 'card 1', content: 'Content for card 1', imageUrl: chartImage },
    { title: 'card 2', content: 'Content for card 2', imageUrl: appleWatchImage },
    { title: 'card 3', content: 'Content for card 3', imageUrl: graphImage }
];

const Card = ({ title, content, imageUrl }) => (
    <div className="card">
        <div className='card-text'>
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
            <Card key={index} title={item.title} content={item.content} imageUrl={item.imageUrl} />
        ))}
    </div>
);

export default CardContainer;