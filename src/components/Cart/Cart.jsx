import React, { useContext } from 'react'
import { ProductContext } from '../../context/ProductContex/ProductState'
import { Empty } from 'antd'
const Cart = () => {
  const { cart, clearCart } = useContext(ProductContext)
  if (cart.length < 1) {
    return <Empty description={
      <span>No products</span>
    } />
  }
  return (
    <div>{cart.map(product => {
      return (
        <div>
          <p>{product.name}</p>
          <p>{product.price} €</p>
        </div>
      )
    })}
    <button onClick={()=>clearCart()}>Clear cart</button>
    </div>
  )
}

export default Cart