import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShoppingCart from './ShoppingCart.js'
import NavBar from './NavBar.js'
import Home from './Home.js'
import Catalog from './Catalog.js'
import About from './About.js'

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/shoppingcart" element={<ShoppingCart />} />
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Catalog />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RouteSwitch;