import React from 'react'
import './Footer.scss'
import { GithubOutlined, FacebookOutlined } from "@ant-design/icons";

const Footer = () => {
  return (
    <div className='footer-div'>
    <footer>
      <div className="footer-container">
        <h5>Created by: Volodymyr Kolomiiets</h5>
        <div className="social-icons">
        <a href="https://github.com/VolodymyrKolomiets">
        <GithubOutlined />
        </a>
        <a href="https://facebook.com">
          <FacebookOutlined />
        </a>
        </div>
        <h5>Contact: kolomiietsv882gmail.com</h5>
      </div>
    </footer>
    </div>
  );
}

export default Footer;