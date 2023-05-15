import './App.scss'
import Cart from './components/Cart/Cart'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Products from './components/Products/Products'
import Profile from './components/Profile/Profile'
import Register from './components/Register/Register'
import { OrdersProvider } from './context/OrderContext/OrderState'
import { ProductProvider } from './context/ProductContex/ProductState'
import { UserProvider } from './context/UserContext/UserState'
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <UserProvider>
          <ProductProvider>
            <OrdersProvider>
              <Header />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/products" element={<Products />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/cart" element={<Cart />} />
              </Routes>
              <Footer />
            </OrdersProvider>
          </ProductProvider>
        </UserProvider>
      </BrowserRouter>
    </>
  )
}

export default App
