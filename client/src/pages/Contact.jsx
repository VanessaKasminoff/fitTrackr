import React from "react";
import contactCard from "../assets/components/contactCard";

function Contact() {
  return (
    <div className="contact-page">
    <header className="contact-header">
      <div className="hero-image">
        <div className="hero-overlay">
          <div className="cards-container">
            <contactCard title="Find Us" content="123 FitTrackr Way, Las Vegas, NV"/>
            <contactCard title="Hours" content="Mon-Fri 9am - 5pm"/>
            <contactCard title="Call Us" content="(123) 456-789"/>
          </div>
        </div>
      </div>
    </header>
  </div>
  );
}

export default Contact;
// i am adding a sexy comment hehehe hear me roar!
