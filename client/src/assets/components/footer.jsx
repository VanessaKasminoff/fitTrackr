import React from "react";
import { Link } from "react-router-dom";
import '../scss/_footer.scss'

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
                        <li><Link to="landing">About</Link></li>
                        <li><a href="#">Services</a></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Coaching</a></li>
                        <li><a href="#">Fitness</a></li>
                        <li><a href="#">Meal Prep</a></li>
                    </ul>
                </div>
                <div className="footer-section social">
                    <h3>Follow Us</h3>
                    <div className="social-icons">
                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                &copy; 2024 FitTrackr. All rights reserved.
            </div>
        </footer>
    )
}

export default Footer;