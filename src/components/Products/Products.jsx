import React, { useContext, useEffect} from 'react'
import { ProductContext } from '../../context/ProductContex/ProductState'

const Products = () => {
const {getAllProducts, products} =useContext(ProductContext)
    

    useEffect(() => {
        getAllProducts()
    }, [])

    return (
        <div>
            {products.map((product) => {
            return (
                <div key={product.id}>
                    <img src={product.image} alt="imagen" />
                    <div>
                        <h4>{product.name}</h4>
                        
                        <p>{product.description}</p>
                        <span>{product.price}</span>
                        <span>{product.Category.category}</span>
                    </div>
                </div>
            )
        })}</div>
    )
}

export default Products
