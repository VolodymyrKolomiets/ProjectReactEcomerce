import React, { useContext, useEffect} from 'react'
import { ProductContext } from '../../context/ProductContex/ProductState'
import './Products.scss'
import {  Button } from 'antd'


const Products = () => {
const {getAllProducts, products, addCart} =useContext(ProductContext)
    
    useEffect(() => {
        getAllProducts()
    }, [])

    const productsInfo = products.map((product) => {
        return (
            <div key={product.id} className="product">
                <img src={`http://localhost:8080/${product.images}`} alt="imagen" className="product-images" />
                <div>
                    <h4>{product.name}</h4>
                    <p>{product.description}</p>
                    <span>{product.price} €  </span>
                    <span>{product.Category.category}</span>
                </div>
                    <Button type="primary" className='add-btn' onClick={() => addCart(product)}>Add to Cart</Button>

            </div>
        )
    })

    return (
        <div className='products-container'>
            {productsInfo}
        </div>
    )
}

export default Products
