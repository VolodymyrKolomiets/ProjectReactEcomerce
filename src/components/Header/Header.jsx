import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import { UserContext } from '../../context/UserContex/UserState';
import './Header.scss'
function Header() {
  const {token} = useContext(UserContext)
  return (
    <>
      <header>
        <div className='navContainer'> 
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li></li>
          </ul>
        </nav>
        </div>
      </header>
    </>
  )
}

export default Header