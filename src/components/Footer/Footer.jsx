import React from 'react'
import './Footer.scss'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faGithub, faFacebook } from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <h5>Created by: Volodymyr Kolomiiets</h5>
        <div className="social-icons">
        <a href="https://github.com">
          {/* <FontAwesomeIcon icon={faGithub} />  */}Facebook
        </a>
        <a href="https://facebook.com">
          {/* <FontAwesomeIcon icon={faFacebook} /> */}Github
        </a>
        </div>
        <h5>Contact: kolomiietsv882gmail.com</h5>
      </div>
    </footer>
  );
}

export default Footer;