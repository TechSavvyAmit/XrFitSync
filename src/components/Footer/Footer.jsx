import React from "react";
import "./Footer.css";
import Github from "../../assets/github.png";
import Instagram from "../../assets/instagram.png";
import Linkedin from "../../assets/linkedin.png";
import Logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div className="Footer-container">
      <hr />
      <div className="footer">
        <div className="social-links">
        <a href="https://github.com/TechSavvyAmit" target="_blank" rel="noopener noreferrer">
            <img src={Github} alt="GitHub" />
          </a>
          <a href="https://www.instagram.com/amiiithe_amit/" target="_blank" rel="noopener noreferrer">
            <img src={Instagram} alt="Instagram" />
          </a>
          <a href="https://www.linkedin.com/in/techsavvyamit/" target="_blank" rel="noopener noreferrer">
            <img src={Linkedin} alt="LinkedIn" />
          </a>
        </div>
        <div className="logo-f">
        <img src={Logo} alt="" />
      </div>
      </div>

        <div className="blur blur-f-1"></div>
        <div className="blur blur-f-2"></div>
    </div>
  );
};

export default Footer;
