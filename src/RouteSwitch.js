import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShoppingCart from './ShoppingCart.js'
import NavBar from './NavBar.js'
import Home from './Home.js'
import Shop from './Shop.js'
import About from './About.js'
import ExpandedShopItem from './ExpandedShopItem.js'


import { useSelector, useDispatch } from 'react-redux'
import store from './store';
// import { fetchShopData } from './shopDataSlice.js'

const RouteSwitch = () => {
  //await axios.get('https://fakestoreapi.com/products/:id')
  const shop = useSelector(state => state.shopData)
  console.log(shop)

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/shoppingcart" element={<ShoppingCart />} />
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        {/* <Route path="/shop/:id" element={<ExpandedShopItem />} /> */}
        {shop.shopArray.map((item, index) => {
              let path = `/shop/:${index}`
              return (
                <Route path={path} element={<ExpandedShopItem item={item}/>}/>
              )
            })}
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RouteSwitch;