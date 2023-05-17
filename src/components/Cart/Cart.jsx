import React, { useContext } from 'react'
import { ProductContext } from '../../context/ProductContex/ProductState'
import { notification, Button } from 'antd'
import './Cart.scss'
import { OrdersContext } from '../../context/OrderContext/OrderState'
import { useNavigate } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa"
import { Link } from "react-router-dom";


const Cart = () => {
  const { cart, clearCart } = useContext(ProductContext)
  const { createOrder } = useContext(OrdersContext)
  const navigate = useNavigate();

  const orderFinish = () => {
    createOrder(cart)
    setTimeout(() => {
      navigate("/profile");
      clearCart()
    }, 1500)
    notification.success({
      message: 'Order created'
    })
  }

  if (cart.length < 1) {
    return <div className='container-cart'>
      <h3> <FaCartPlus className='cart-icon' /> </h3>
      <Link to="/products" className='cart-ref'>Show Products</Link>
    </div>
  }

  return (
    <div className='cart-container'>{cart.map((product,i) => {
      return (
        <div key={i} className='cart-container-product'>
          <p>{product.name}</p>
          <p>{product.price} €</p>
        </div>
      )
   
    })}
      <div className='btn-div'>
      <Button  className='cart-btn' onClick={() => clearCart()}>Clear cart</Button>
     
      <Button  className='cart-btn' type="primary"  onClick={() => orderFinish()}>Create Order</Button>

      </div>
    </div>
  )
}

export default Cart