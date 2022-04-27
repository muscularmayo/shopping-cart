import './navbar.css';

const NavBar = () => {
  return (
    <div className="header">
      <ul className="nav-bar">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/shop">Shop</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/shoppingcart">Shopping Cart</a>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
