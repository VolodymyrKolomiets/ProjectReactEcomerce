import React, { useContext, useEffect} from 'react'
import { ProductContext } from '../../context/ProductContex/ProductState'
import './Products.scss'
const Products = () => {
const {getAllProducts, products, addCart} =useContext(ProductContext)
    

    useEffect(() => {
        getAllProducts()
    }, [])

    const productsInfo = products.map((product) => {
        return (
            <div key={product.id} className="product">
                <img src={`http://localhost:8080/${product.images}`} alt="imagen" />
                <div>
                    <h4>{product.name}</h4>
                    <p>{product.description}</p>
                    <span>{product.price} €  </span>
                    <span>{product.Category.category}</span>
                </div>
                    <button className='add-btn' onClick={()=>addCart(product)}>Add</button>
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
