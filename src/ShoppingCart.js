import './shoppingcart.css';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToShoppingCart } from './shoppingCartSlice.js'

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const shoppingCart = useSelector(state => state.shoppingCart)

  console.log(shoppingCart)
  return (
    <div className="shopping-cart">
      <h1>Shopping Cart</h1>
    </div>
  );
}

export default ShoppingCart;
