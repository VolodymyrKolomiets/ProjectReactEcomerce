import './App.scss'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Products from './components/Products/Products'
import Profile from './components/Profile/Profile'
import Register from './components/Register/Register'
import { ProductProvider } from './context/ProductContex/ProductState'
import { UserProvider } from './context/UserContext/UserState'
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <UserProvider>
          <ProductProvider>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/products" element={<Products />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
            <Footer />
          </ProductProvider>
        </UserProvider>
      </BrowserRouter>
    </>
  )
}

export default App
