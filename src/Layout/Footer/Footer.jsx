import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedin,
  faTwitter,
  faYoutubeSquare,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="footer montserrat">
      <div className="footer-content">
        <div className="copyright">&copy; 2022 Pints</div>
        <div className="footer-bottom">
          <ul className="footer-links">
            <li className="footer-link">Home</li>
            <li className="footer-link">About</li>
            <li className="footer-link">Contact</li>
          </ul>
          <div className="socials">
            <FontAwesomeIcon icon={faFacebookF} className="social" />
            <FontAwesomeIcon icon={faLinkedin} className="social" />
            <FontAwesomeIcon icon={faTwitter} className="social" />
            <FontAwesomeIcon icon={faYoutubeSquare} className="social" />
            <FontAwesomeIcon icon={faInstagram} className="social" />
          </div>
        </div>
      </div>
    </footer>
  );
}
