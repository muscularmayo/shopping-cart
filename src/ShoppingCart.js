import './shoppingcart.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addToShoppingCart, handleInputChange } from './shoppingCartSlice.js'

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const shoppingCart = useSelector(state => state.shoppingCart)
  const numberOfItems = shoppingCart.numberOfItems
  const navigate = useNavigate();

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
        {shoppingCart.shoppingCartArray.map((item, index) => {
          return (
            <div className="shopping-cart-item">
              <div onClick={() => navigate('/shopping-cart/shop/' + (item.id - 1))} className="shopping-cart-item-content">
                <img className="shopping-cart-image" src={item.img} alt={item.img}></img>
                <div className="shopping-title">{item.name}</div>
                <div className="cart-price item-price">{item.price}</div>
              </div>
              <div className="quantity-input">
                Quantity: <input min={0} className="shopping-cart-input" onChange={handleInput} id={item.id} type="number" value={item.quantity}/>
              </div>
            </div>
          )
        })}
        <div className="price-total-div">Total ({numberOfItems} items): <span className="priceTotal">{priceTotal}</span></div>
      </div>
    </div>
  );
}

export default ShoppingCart;
