import React, { useContext } from 'react'
import { ProductContext } from '../../context/ProductContex/ProductState'
import { Empty, notification } from 'antd'
import { OrdersContext } from '../../context/OrderContext/Orderstate'
import './Cart.scss'

const Cart = () => {
  const { cart, clearCart } = useContext(ProductContext)
  const { createOrder } = useContext(OrdersContext)

  const orderFinish = () => {
    createOrder(cart)
    setTimeout(() => {
      clearCart()
    }, 1000)
    notification.success({
      message: 'Order created'
    })
  }

  if (cart.length < 1) {
    return <div className='container-cart'><Empty description={
      <span>No products</span>
    } /></div>
  }

  return (
    <div className='cart-container'>{cart.map(product => {
      return (
        <div key={product.id} className='cart-container-product'>
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