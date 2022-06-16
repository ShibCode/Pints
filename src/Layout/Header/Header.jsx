import React, { useState } from "react";
import logo from "../../Assets/logo.png";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  let [hammenuIsOpen, setHammenuIsOpen] = useState(false);

  return (
    <header>
      <nav>
        <img src={logo} alt="logo" className="logo" />
        <ul className={`nav-links ${hammenuIsOpen ? "show-hammenu" : ""}`}>
          <li className="nav-link montserrat">Home</li>
          <li className="nav-link montserrat">About Us</li>
          <li className="nav-link montserrat">Plans</li>
        </ul>
        <div className="hammenu-btn">
          <FontAwesomeIcon
            icon={faBars}
            className={`open-ham ${hammenuIsOpen ? "" : "show-img"}`}
            onClick={() => {
              setHammenuIsOpen(!hammenuIsOpen);
            }}
          />
          <FontAwesomeIcon
            icon={faClose}
            className={`close-ham ${hammenuIsOpen ? "show-img" : ""}`}
            onClick={() => {
              setHammenuIsOpen(!hammenuIsOpen);
            }}
          />
        </div>
      </nav>
    </header>
  );
}
