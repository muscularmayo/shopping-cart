import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShoppingCart from './ShoppingCart.js'
import NavBar from './NavBar.js'
import Home from './Home.js'
import Shop from './Shop.js'
import About from './About.js'
import ExpandedShopItem from './ExpandedShopItem.js'

const RouteSwitch = () => {
  //await axios.get('https://fakestoreapi.com/products/:id')
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/shoppingcart" element={<ShoppingCart />} />
        <Route path="/" element={<Home />} />
        <Route path="/shop/" element={<Shop />} />
        {/* <Route path="/shop/:id" element={<ExpandedShopItem item={}/>} /> */}
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RouteSwitch;