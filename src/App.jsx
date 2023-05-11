import './App.scss'
import Login from './components/Login/Login'
import Products from './components/Products/Products'
import { ProductProvider } from './context/ProductContex/ProductState'
import { UserProvider } from './context/UserContex/UserState'
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <ProductProvider>
        <UserProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/products" element={<Products />} />
            </Routes>
          </BrowserRouter>
        </UserProvider>
      </ProductProvider>
    </>
  )
}

export default App
