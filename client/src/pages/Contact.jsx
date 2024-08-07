import React from "react";
import ContactCard from "../assets/components/ContactCard2";
import ContactForm from "../assets/components/ContactForm";
import Footer from "../assets/components/footer";

function Contact() {
  return (
    <div className="contact-page">
      <header className="contact-header">
        <div className="hero-image">
          <div className="hero-overlay">
            <div className="cards-container">
              <ContactCard title="Find Us" content="123 FitTrackr Way, Las Vegas, NV"/>
              <ContactCard title="Hours" content="Mon-Fri 9am - 5pm"/>
              <ContactCard title="Call Us" content="(123) 456-789"/>
            </div>
          </div>
        </div>
      </header>
      <main className="contact-main">
        <ContactForm />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Contact;
// i am adding a sexy comment hehehe hear me roar!
