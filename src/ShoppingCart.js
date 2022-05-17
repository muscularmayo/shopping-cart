import './shoppingcart.css';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToShoppingCart } from './shoppingCartSlice.js'

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const shoppingCart = useSelector(state => state.shoppingCart)
  let numberOfItems = 0;
  let priceTotal = 0;
  shoppingCart.shoppingCartArray.forEach((e) => {
    numberOfItems += e.quantity;
    let price = e.price.slice(1)
    priceTotal += e.quantity*price
  })
  priceTotal = '$' + priceTotal;
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
      <div id="priceTotal">Total: {priceTotal}</div>
    </div>
  );
}

export default ShoppingCart;
