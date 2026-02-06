import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Nav from './Main/Nav'
import Footer from './Main/Footer'
import Home from './Pages/Home'
import About from './Pages/About'
import Cater from './Pages/Cater'
import Career from './Pages/Career'
import Menu from './Pages/Menu'
import Order from './Order/Order'
import Login from './Order/Login'
import Cart from './Order/Cart'
import OrderTracking from "./Order/OrderTracking";
import { CartProvider } from "./CartContext.jsx";


function App(){
  return (
    <div>
      <CartProvider>
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/cater' element={<Cater/>}/>
        <Route path='/career' element={<Career/>}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/order' element={<Order/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path="/tracking" element={<OrderTracking />} />
      </Routes>
      <Footer/>
      </BrowserRouter>
      </CartProvider>
    </div>
      )
}
export default App