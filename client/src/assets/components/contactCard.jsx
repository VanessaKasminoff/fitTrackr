import React from "react";

const contactCard = ({ title, content}) => {
    return (
        <div className="contactCard">
            <h3>{title}</h3>
            <p>{content}</p>
        </div>
    )
}

export default contactCard