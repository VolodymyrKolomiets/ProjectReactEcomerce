import axios from 'axios'
import React, { useEffect } from 'react'

const Products = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('http://localhost:8080/products/getAll')
        console.log('res', res.data.products)
      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
  }, [])
  
  return (
    <div>Products</div>
  )
}

export default Products
