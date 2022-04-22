import React from 'react'
import './footer.css';
import { FiFacebook, FiInstagram, FiTwitter } from 'react-icons/fi';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__inner container">
                <div className="footer__title">
                    QuangNI
                </div>
                <div className="footer__section">
                    <a href="#about" className="footer__section--item">About</a>
                    <a href="#experience" className="footer__section--item">Experience</a>
                    <a href="#portfolio" className="footer__section--item">Portfolio</a>
                    <a href="#testimonial" className="footer__section--item">Testimonial</a>
                    <a href="#contact" className="footer__section--item">Contact</a>
                </div>
                <div className="footer__social">
                    <div className="footer__social--item">
                        <a href="https://www.facebook.com/" target="_blank">
                            <FiFacebook />
                        </a>
                    </div>
                    <div className="footer__social--item">
                        <a href="https://www.instagram.com/" target="_blank">
                            <FiInstagram />
                        </a>
                    </div>
                    <div className="footer__social--item">
                        <a href="https://www.facebook.com/" target="_blank">
                            <FiTwitter />
                        </a>
                    </div>
                </div>
                <div className="footer__copyright">
                    QuangNi Portfolio
                </div>
            </div>

        </footer>
    )
}

export default Footer