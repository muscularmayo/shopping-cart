import './navbar.css';
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import HoverShoppingCart from './HoverShoppingCart.js'
import FakeIcon from './fake-icon.png'
import ShoppingCartIcon from './shoppingCartIcon.png'


const NavBar = () => {
  const numberOfItems = useSelector(state => state.shoppingCart.numberOfItems)
  const [style, setStyle] = useState({display: 'none'})

  return (
    <div className="header">
      <ul className="nav-bar">
        <li>
          <Link to="/shopping-cart"><img id="nav-icon" className="fake-icon" src={FakeIcon} alt="store logo" /></Link>
        </li>
        <li>
          <Link to="/shopping-cart/shop">Shop</Link>
        </li>
        <li>
        <Link to="/shopping-cart/shoppingcart"
              id="shoppingcart"
              onMouseEnter={e => {
                setStyle({display: 'block'})
              }}
              onMouseLeave={e => {
                setStyle({display: 'none'})
              }}>Cart <span id="numberOfItems">({numberOfItems})</span>
        </Link>
        <div id="hover-cart"
          style={style}
          onMouseEnter={e => {
                setStyle({display: 'block'})
              }}
            onMouseLeave={e => {
              setStyle({display: 'none'})
            }}>
          <HoverShoppingCart/>
        </div>
        </li>
        <li>
          <Link to="/shopping-cart/about">About</Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
