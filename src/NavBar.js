import './navbar.css';
import { Link } from 'react-router-dom'

const NavBar = () => {
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
        <li>
          <Link to="/shoppingcart">Shopping Cart</Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
