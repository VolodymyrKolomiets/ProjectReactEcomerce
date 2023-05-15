import React, { useContext, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";
import './Header.scss'
import { UserContext } from '../../context/UserContext/UserState';
import { Avatar, notification, Badge } from "antd";
import { UserOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { ProductContext } from '../../context/ProductContex/ProductState';
import logo from '../../img/logo.png'


function Header() {
  const { token, logout, logoutMessage } = useContext(UserContext)
  const { cart } = useContext(ProductContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (logoutMessage) {
      navigate("/login")
      notification.success({
        message: logoutMessage
      })
    }
  }, [logoutMessage])

  const logoutUser = () => {
    logout();
    setTimeout(() => {
      navigate("/")
    }
      , 2000)
  };

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  return (
    <>
      <header>
        <div className='nav-container'>
        <img src={logo} alt="images" className='img-logo' style={{ width: '110px', height: '50px' }}/>
          <nav>

            {token ? (<div className='div-navbar'>
              <Link to="/">Home</Link>
              <Link to="/profile"> <Avatar icon={<UserOutlined />} /></Link>
              <Link to="/products">Product</Link>
              <Link to="/cart">
                <Badge count={cart.length}>
                  <ShoppingCartOutlined />
                </Badge>
              </Link>
              <span onClick={logoutUser}><Link to="/">Logout</Link></span>
            </div>
            ) : (
              <>
              <div className='div-navbar'>
                <Link to="/">Home</Link>
                <Link to="/register">Register</Link>
                <Link to="/login">Login</Link>
                </div>
              </>)}

            {/* {token ? (<>(<Link to="/profile"> <Avatar icon={<UserOutlined />} /></Link> ):(<Link to="/register">Register</Link>)</>) */}

          </nav>
        </div>
      </header>
    </>
  )
}

export default Header