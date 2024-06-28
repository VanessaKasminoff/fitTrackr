import React from "react";
import './footer.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section about">
                    <h3>About Us</h3>
                    <p>
                        We are a company commited to providing the best fitness tracking and related products to our company. Our goal is to exceed customer expectations with quality and content.
                    </p>
                </div>
                <div className="footer-section links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Coaching</a></li>
                        <li><a href="#">Fitness</a></li>
                        <li><a href="#">Meal Prep</a></li>
                    </ul>
                </div>
                <div className="footer-section social">
                    
                </div>
            </div>
        </footer>
    )
}