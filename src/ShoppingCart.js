import './shoppingcart.css';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToShoppingCart, handleInputChange } from './shoppingCartSlice.js'

const ShoppingCart = () => {
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
    <div className="shopping-cart">
      <h1>Shopping Cart</h1>
      {/* <div>
        Number of items in cart: {numberOfItems}
      </div> */}
      <div className="shopping-cart-catalog">
        {shoppingCart.shoppingCartArray.map((item) => {
          return (
            <div className="shopping-cart-item">
              <img class="shopping-cart-image" src={item.img} alt={item.img}></img>
              <div>{item.name + ' ' + item.price}</div>
              <input min={0} onChange={handleInput} id={item.id} type="number" value={item.quantity}/>
            </div>
          )
        })}
      </div>
      <div className="price-total-div">Total ({numberOfItems} items): <span className="priceTotal">{priceTotal}</span></div>
    </div>
  );
}

export default ShoppingCart;
