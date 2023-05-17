import React from 'react'
import './Footer.scss'
import { GithubOutlined, FacebookOutlined } from "@ant-design/icons";

const Footer = () => {
  return (
    <div className='footer-div'>
      <footer>
        <div className="footer-container">
          <div className='footer-left'>
            <ul>
            <li><h5>Created by: Volodymyr Kolomiiets</h5></li>
            <li><h5>Created by: Volodymyr Kolomiiets</h5></li>
            </ul>
          </div>
          <div className="social-icons">
            <a href="https://github.com/VolodymyrKolomiets" className='footer-href'>
              <GithubOutlined />
            </a>
            <a href="https://facebook.com" className='footer-href'>
              <FacebookOutlined />
            </a>
          </div>
          <div className='footer-right'>
            <ul>
            <li><h5>Contact: kolomiietsv882gmail.com</h5></li>
            <li><h5>Contact: kolomiietsv882gmail.com</h5></li>
            <li><h5>Contact: kolomiietsv882gmail.com</h5></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;