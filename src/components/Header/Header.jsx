import React, { useContext, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";
import './Header.scss'
import { UserContext } from '../../context/UserContext/UserState';
import { Avatar, notification, Badge } from "antd";
import { UserOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { ProductContext } from '../../context/ProductContex/ProductState';


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
        <div className='navContainer'>
          <h3>Header</h3>
          <nav>

            {token ? (<div>
              <Link to="/profile"> <Avatar icon={<UserOutlined />} /></Link>
              <Link to="/products">Product</Link>
              <Link to="/cart">
                <Badge count={cart.length}>
                <ShoppingCartOutlined />
              </Badge>
              </Link>
              <Link to="/">Home</Link>
              <span onClick={logoutUser}><Link to="/">Logout</Link></span>
            </div>
            ) : (
              <>
                <Link to="/">Home</Link>
                <Link to="/register">Register</Link>
                <Link to="/login">Login</Link>
              </>)}

            {/* {token ? (<>(<Link to="/profile"> <Avatar icon={<UserOutlined />} /></Link> ):(<Link to="/register">Register</Link>)</>) */}

          </nav>
        </div>
      </header>
    </>
  )
}

export default Header