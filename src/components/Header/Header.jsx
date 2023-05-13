import React, { useContext, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";
import './Header.scss'
import { UserContext } from '../../context/UserContext/UserState';
import { Avatar, notification, Badge } from "antd";
import { UserOutlined, ShoppingCartOutlined } from "@ant-design/icons";


function Header() {
    const {token, logout} = useContext(UserContext)
    const navigate = useNavigate()
    useEffect(()=> {
        if(!token){
            navigate("/login")
            notification.success({
                message:"Logout successesful"
            })
        }
    },[token])
  return (
    <>
      <header>
        <div className='navContainer'> 
        <nav>
           
        {token ? ( <>
        <Link to="/profile"> <Avatar icon={<UserOutlined />} /></Link> 
        <span  onClick={()=> logout}>Login</span>
        </>) : (
        <Link to = "/login">Login</Link>)}
       
        {/* <Link to="/">Home</Link> */}
        <Link to="/products">Product</Link>
        <Link to="/register">Register</Link>
        {/* {token ? (<>(<Link to="/profile"> <Avatar icon={<UserOutlined />} /></Link> ):(<Link to="/register">Register</Link>)</>) */}
          
        </nav>
        </div>
      </header>
    </>
  )
}

export default Header