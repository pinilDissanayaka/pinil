import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_container container">
        <h1 className="footer_title">Pinil Dissanayaka</h1>

        <ul className="footer_list">
          <li>
            <a href="#about" className="footer_link">
              About
            </a>
          </li>

          <li>
            <a href="#skills" className="footer_link">
              Skills
            </a>
          </li>

          <li>
            <a href="#portfolio" className="footer_link">
              Portfolio
            </a>
          </li>

          <li>
            <a href="#contact" className="footer_link">
              Contact
            </a>
          </li>
        </ul>

        <div className="footer_social">
          <a href="https://www.linkedin.com/in/pinil-dissanayaka-a69a41285/" className="footer_social-link" target="_blank">
            <i className="uil uil-linkedin-alt"></i>
          </a>
          <a href="https://github.com/pinilDissanayaka" className="footer_social-link" target="_blank">
            <i className="uil uil-github-alt"></i>
          </a>
          <a href="https://medium.com/@pinildissanayaka" className="home_social-icon" target="_blank">
            <i class="uil uil-medium-m"></i>
          </a>
        </div>

        <span className="footer_copy">&#169;Pinil Dissanayaka. All rights reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
