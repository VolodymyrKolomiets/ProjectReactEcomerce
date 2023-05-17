## Tienda Online utilizando React y Sequelize 

Este proyecto es una tienda online que utiliza React vite@latest y Sequelize para conectarse a una base de datos MySQL y almacenar información de los productos, informacion de usuarios y las órdenes realizadas en la plataforma. Además, se han utilizado librerías como Ant Design y React Icons para mejorar la interfaz y la experiencia de usuario en la web.

## Tecnologías 🛠️

_Visual Studio Code_
_React_
_Vite_
_Sequelize_
_MySQL_
_Ant Design_
_React Icons_
_Axios_
_React Router DOM_


## Ract Vite 

React Vite es una herramienta que se basa en el enfoque de desarrollo basado en componentes. Los componentes son bloques de construcción de una aplicación de React y representan diferentes partes de la interfaz de usuario. Estos componentes pueden ser reutilizados en diferentes partes de la aplicación, lo que facilita el proceso de desarrollo y aumenta la eficiencia del código.
Ejemlo de un componente Products.jsx

```jsx
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
```


Además, React Vite también ofrece soporte para la gestión de estado a través del contexto de React. El contexto permite el pasaje de datos de un componente a otro sin necesidad de pasarlos a través de una gran cantidad de niveles de jerarquía de componentes. Esto ayuda a reducir la complejidad y la repetición de código en la aplicación.
Ejemplo de un context ProductState.jsx:

```jsx
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
```


En resumen, React Vite es una herramienta que permite crear aplicaciones de React de forma rápida y eficiente gracias a su enfoque modularizado y basado en componentes. También ofrece soporte para el contexto de React, lo que ayuda a reducir la complejidad y la repetición de código en la aplicación.


## Instalación ⌨️

Para instalar las dependencias del proyecto, se puede utilizar el comando:

```
npm install
```


## Ejecución 🔧

Para ejecutar la aplicación en modo de desarrollo se puede utilizar el comando:

```
npm run dev
```

## Base de datos 📦

Para iniciar la base de datos escribiriamos el mismo comando en la consola de proyecto de base de datos:

```
npm run dev
```

Esto iniciará un servidor local en http://localhost:8080.
Ya que esta definido en mi proyecto de basse de datos Sequelize.


## Uso 🚀

La aplicación consta de diferentes rutas accesibles mediante React Router DOM. Algunas de las principales son:

/: muestra la página principal con una breve descripcion de la tienda.
/products: muestra la página con una lista de los productos disponibles.
/cart: muestra el carrito de compras con los productos añadidos por el usuario.


## Autore ✒️ 

* **Volodymyr Kolomiiets** - *Creado* - [VolodymyrKolomiets](https://github.com/VolodymyrKolomiets)


## Licencia 📄

_Este proyecto actualmente no tiene licencia. Puede usarse todo su contenido sin el requisito de la misma._