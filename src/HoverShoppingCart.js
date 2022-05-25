import './shoppingcart.css';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToShoppingCart, handleInputChange } from './shoppingCartSlice.js'

const HoverShoppingCart = () => {
  const dispatch = useDispatch();
  const shoppingCart = useSelector(state => state.shoppingCart)
  const numberOfItems = shoppingCart.numberOfItems

  const handleInput = (event) => {
    console.log(event.target)
    const info = {
      id: event.target.id,
      value: event.target.value
    }
    dispatch(handleInputChange(info))
    //console.log(event.target.id)
  }

  // let numberOfItems = 0;
  let priceTotal = 0;
  shoppingCart.shoppingCartArray.forEach((e) => {
    // numberOfItems += e.quantity;
    let price = e.price.slice(1)
    priceTotal += e.quantity*price
  })
  priceTotal = '$' + priceTotal.toFixed(2)
  // priceTotal = '$' + priceTotal;
  console.log(shoppingCart)



  return (
    <div id="#hover-cart" className="hover-shopping-cart">
      <div>
        Number of items in cart: {numberOfItems}
      </div>
      {shoppingCart.shoppingCartArray.map((item) => {
        return (
          <div>
            <div>{item.name + ' ' + item.price}</div>
            <input min={0} onChange={handleInput} id={item.id} type="number" value={item.quantity}/>
          </div>
        )
      })}
      <div className="hover-price-total">Total: {priceTotal}</div>
    </div>
  );
}

export default HoverShoppingCart;
