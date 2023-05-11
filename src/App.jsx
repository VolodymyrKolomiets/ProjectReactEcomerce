import './App.scss'
import Products from './components/Products/Products'
import ProductProvider from './context/ProductContex/ProductState'
//import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
    <ProductProvider>
    <Products/>
    </ProductProvider>
      {/* <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profil" element={<Perfil />} />
        </Routes>
      </BrowserRouter> */}
    </>
  )
}

export default App
