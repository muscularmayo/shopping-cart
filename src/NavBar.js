import './navbar.css';
import { Link, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import ShoppingCart from './ShoppingCart.js'
import HoverShoppingCart from './HoverShoppingCart.js'


const NavBar = () => {
  const numberOfItems = useSelector(state => state.shoppingCart.numberOfItems)
  const shoppingCart = useSelector(state => state.shoppingCart)

  const [style, setStyle] = useState({display: 'none'})
  const [isShoppingCartRoute, setIsShoppingCartRoute] = useState(false)

  const location = useLocation();
  const currentPath = location.pathname

  useEffect(()=> {
    console.log('useEffecting', currentPath)
    if (currentPath.toLowerCase() === '/shoppingcart') {
      setIsShoppingCartRoute(true)
      console.log('in the if statement', isShoppingCartRoute)
    } else {
      setIsShoppingCartRoute(false)
    }
  },[currentPath, isShoppingCartRoute])



  return (
    <div className="header">
      <ul className="nav-bar">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        {isShoppingCartRoute ? (
          <li>
          <Link to="/shoppingcart"
                id="shoppingcart"
                onMouseEnter={e => {
                 setStyle({display: 'block'})
                }}
                onMouseLeave={e => {
                  setStyle({display: 'none'})
                }}>Shopping Cart ({numberOfItems})
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
        ) : (
          <li>
          <Link to="/shoppingcart"
                id="shoppingcart"
                onMouseEnter={e => {
                 setStyle({display: 'block'})
                }}
                onMouseLeave={e => {
                  setStyle({display: 'none'})
                }}>Shopping Cart ({numberOfItems})
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
        )}
      </ul>
    </div>
  );
}

export default NavBar;
