import React, { useContext, useEffect} from 'react'
import { ProductContext } from '../../context/ProductContex/ProductState'

const Products = () => {
const {getAllProducts, products, addCart} =useContext(ProductContext)
    

    useEffect(() => {
        getAllProducts()
    }, [])

    const productsInfo = products.map((product) => {
        return (
            <div key={product.id}>
                {/* <img src="https://www.pexels.com/photo/opened-book-on-tree-root-3358707/" alt="imagen" /> */}
                <img src={product.image} alt="imagen" />
                <div>
                    <h4>{product.name}</h4>
                    <p>{product.description}</p>
                    <span>{product.price} €</span>
                    <span>{product.Category.category}</span>
                </div>
                    <button className='add-btn' onClick={()=>addCart(product)}>Add</button>
            </div>
        )
    })

    return (
        <div>
            {productsInfo}
        </div>
    )
}

export default Products
