import React, { useContext } from 'react'
import { ProductContext } from '../../context/ProductContex/ProductState'
import { Empty, notification } from 'antd'
import './Cart.scss'
import { OrdersContext } from '../../context/OrderContext/OrderState'
import { useNavigate } from "react-router-dom";


const Cart = () => {
  const { cart, clearCart } = useContext(ProductContext)
  const { createOrder } = useContext(OrdersContext)
  const navigate = useNavigate();

  const orderFinish = () => {
    createOrder(cart)
    navigate("/profile");
    setTimeout(() => {
      clearCart()
    }, 1000)
    notification.success({
      message: 'Order created'
    })
  }

  if (cart.length < 1) {
    return <div className='container-cart'><Empty description={
      <h3>Empety</h3>
    } /></div>
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
      <button className='cart-btn' onClick={() => clearCart()}>Clear cart</button>
      <button className='cart-btn' onClick={() => orderFinish()}
      >Create order
      </button>
      </div>
    </div>
  )
}

export default Cart