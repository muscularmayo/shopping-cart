import './shoppingcart.css';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToShoppingCart } from './shoppingCartSlice.js'

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const shoppingCart = useSelector(state => state.shoppingCart)
  let numberOfItems = 0;
  shoppingCart.shoppingCartArray.forEach((e) => {
    numberOfItems += e.quantity;
  })
  console.log(shoppingCart)
  return (
    <div className="shopping-cart">
      <h1>Shopping Cart</h1>
      <div>
        Number of items in cart: {numberOfItems}
      </div>
      {shoppingCart.shoppingCartArray.map((item) => {
        return (
          <div>{item.name + ' ' + item.price + ' ' + item.quantity}</div>
        )
      })}
    </div>
  );
}

export default ShoppingCart;
