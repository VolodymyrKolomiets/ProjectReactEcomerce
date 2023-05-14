import React, { createContext, useReducer } from 'react';
import ProductReducer from './ProductReducer'
import axios from 'axios';

const cart =JSON.parse(localStorage.getItem('cart'))
const initialState = {
    products: [],
    cart: cart ? cart : []
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

    const addCart = (product) => {
        dispatch({
            type: "ADD_CART",
            payload: product,
        });
    };
    const clearCart = () => {
        dispatch({
            type: "CLEAR_CART",
        });
    };



    return (
        <ProductContext.Provider
            value={{
                products: state.products,
                cart: state.cart,
                getAllProducts,
                addCart,
                clearCart
            }}
        >
            {children}
        </ProductContext.Provider>
    );
};


export default ProductProvider