import './App.scss'
import Header from './components/Header/Header'
import Login from './components/Login/Login'
import Products from './components/Products/Products'
import Profile from './components/Profile/Profile'
import { ProductProvider } from './context/ProductContex/ProductState'
import { UserProvider } from './context/UserContex/UserState'
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <UserProvider>
          <ProductProvider>
            <Header />
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/products" element={<Products />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </ProductProvider>
        </UserProvider>
      </BrowserRouter>
    </>
  )
}

export default App
