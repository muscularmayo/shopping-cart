import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShoppingCart from './ShoppingCart.js'
import NavBar from './NavBar.js'
import Home from './Home.js'
import Shop from './Shop.js'
import About from './About.js'
import ExpandedShopItem from './ExpandedShopItem.js'



const RouteSwitch = () => {


  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/shopping-cart/shoppingcart" element={<ShoppingCart />} />
        <Route path="/shopping-cart" element={<Home />} />
        <Route path="/shopping-cart/shop" element={<Shop />} />
        <Route path="/shopping-cart/shop/:id" element={<ExpandedShopItem />} />
        <Route path="/shopping-cart/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )


}

export default RouteSwitch;