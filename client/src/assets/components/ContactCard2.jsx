import React from "react";
import "../scss/_contactCard.scss"

const ContactCard = ({ title, content }) => {
    return (
        <div className="contactCard">
            <h3>{title}</h3>
            <p>{content}</p>
        </div>
    );
}

export default ContactCard;