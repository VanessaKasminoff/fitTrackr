import React from 'react';

const cardData = [
    { title: 'card 1', content: 'Content for card 1' },
    { title: 'card 2', content: 'Content for card 2' },
    { title: 'card 3', content: 'Content for card 3' }
];

const Card = ({ title, content }) => (
    <div className="card">
        <h2>{title}</h2>
        <p>{content}</p>
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