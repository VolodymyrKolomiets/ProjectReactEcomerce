import React from 'react'
import './Footer.scss'
import { RiFacebookBoxFill, RiGithubFill } from "react-icons/ri"

const Footer = () => {
  return (
    <div className='footer-div'>
      <footer>
        <div className="footer-container">
          <div className='footer-left'>
            <ul>
            <li><h5>Created by: Volodymyr Kolomiiets</h5></li>
            <li><h5>Designed by: Volodymyr Kolomiiets</h5></li>
            </ul>
          </div>
          <div className="social-icons">
            <a href="https://github.com/VolodymyrKolomiets" className='footer-href'>
              <RiGithubFill className='footer-icons' />
            </a>
            <a href="https://facebook.com" className='footer-href'>
              <RiFacebookBoxFill className='footer-icons'/>
            </a>
          </div>
          <div className='footer-right'>
            <ul>
            <li><h5>Adress: Valencia, Calle Torrente 18</h5></li>
            <li><h5>Phone: +700 406 92 93 94</h5></li>
            <li><h5>Email: kolomiietsv882gmail.com</h5></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;