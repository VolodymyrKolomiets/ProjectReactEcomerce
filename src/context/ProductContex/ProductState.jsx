import React, { createContext, useReducer } from 'react';
import ProductReducer from './ProductReducer'
import axios from 'axios';

const initialState = {
    products: []
};

const API_URL = "http://localhost:8080";

export const ProductContext = createContext(initialState);

export const ProductProvider = ({ children }) => {
    const [state, dispatch] = useReducer(ProductReducer, initialState);

    const getAllProducts = async () => {
        try {
            const res = await axios.get(API_URL + "/products/getAll")
            dispatch({
                type: "GET_PRODUCTS",
                payload: res.data.products
            })
        } catch (error) {
            console.error(error)
        }
    };
    return (
        <ProductContext.Provider
            value={{
                products: state.products,
                getAllProducts
            }}
        >
            {children}
        </ProductContext.Provider>
    );
};


export default ProductProvider