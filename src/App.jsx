import './App.css'
import Products from './components/Products/Products'
import GlobalProvider from './context/GlobalState'
//import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
    <GlobalProvider>
    <Products/>
    </GlobalProvider>
      {/* <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<UserForm />} />
        </Routes>
      </BrowserRouter> */}
    </>
  )
}

export default App
