import React from 'react';
import landingPageCard from '../scss/_landingPageCard.scss';

const cardData = [
    { title: 'card 1', content: 'Content for card 1', imageUrl: '' },
    { title: 'card 2', content: 'Content for card 2', imageUrl: '' },
    { title: 'card 3', content: 'Content for card 3', imageUrl: '' }
];

const Card = ({ title, content }) => (
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
            <Card key={index} title={item.title} content={item.content} />
        ))}
    </div>
);

export default CardContainer;