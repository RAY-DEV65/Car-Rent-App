import {
  FaCopyright,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaTwitter,
  FaVoicemail,
} from "react-icons/fa";
import "./Footer.css";
import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column footer-about">
          <div className="footer-logo">
            <h2>
              Car <span>Search</span>
            </h2>
          </div>

          <p>
            Your trusted partner for comfortable, reliable and affordable car
            rental services. Find the right car for your journey and enjoy the
            road with confidence.
          </p>

          <div className="social-icons">
            <a href="#" aria-label="Facebook">
              <FaFacebook />
            </a>
            <a href="#" aria-label="Instgram">
              <FaInstagram />
            </a>
            <a href="#" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="#" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
          </div>
        </div>

        <div className="footer-column">
          <h3>Quick Links</h3>

          <ul>
           <li> <Link to="/">Home</Link></li>
            <li>
              <Link to="/car">Cars</Link>
            </li>
            <li>
             <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Support</h3>

          <ul>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="">Help Center</a>
            </li>
            <li>
              <a href="#">Terms & Condition</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Rental Guide</a>
            </li>
            <li>
              <a href="#">Booking Policy</a>
            </li>
          </ul>
        </div>

        <div className="footer-column footer-contact">
          <h3>Contact Us</h3>

          <div className="contact-item">
            <span>
              <FaPhone />{" "}
            </span>
            <div>
              <small>Phone</small>
              <p>+234 800 000 0000</p>
            </div>
          </div>

          <div className="contact-item">
            <span>
              <FaVoicemail />{" "}
            </span>
            <div>
              <small>Email</small>
              <p>hello@example.com</p>
            </div>
          </div>

          <div className="contact-item">
            <span>
              <FaLocationDot />{" "}
            </span>
            <div>
              <small>Location</small>
              <p>Ibadan, Nigeria</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            <FaCopyright /> 2026 Car Rental. All rights reserved.
          </p>
          <p>Designed & Developed with R.A.Y</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
