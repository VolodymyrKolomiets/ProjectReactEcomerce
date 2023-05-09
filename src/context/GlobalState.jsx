import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer'
import axios from 'axios';

const initialState = {
    products: []
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    const getAllProducts = async () => {
        try {
            const res = await axios.get('http://localhost:8080/products/getAll')
            dispatch({
                type: "GET_PRODUCTS",
                payload: res.data.results
            })
        } catch (error) {
            console.error(error)
        }
    };
    return (
        <GlobalContext.Provider
            value={{
                products: state.products,
                getAllProducts
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};


export default GlobalProvider