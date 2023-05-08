import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const getAllProducts = async () => {
            try {
                const res = await axios.get('http://localhost:8080/products/getAll')
                setProducts(res.data.products)
                console.log('res', res.data.products)
            } catch (error) {
                console.error(error)
            }
        }
        getAllProducts()
    }, [])

    return (
        <div>{products.map( (product) => {
            return(
                <div key={product.id}>
                        <img src="{product.image}" alt="imagen" />
                    <div>
                        <h4>{product.name}</h4>
                        {/* <p>{product.description}</p> */}
                        <span>{product.price}</span>
                        <span>{product.Category.category}</span>
                    </div>
                </div>
            )
        })}</div>
    )
}

export default Products
