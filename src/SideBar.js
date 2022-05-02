import './sidebar.css';
import { useState, useEffect } from 'react';

const SideBar = (props) => {
  const [shopCategories, setShopCategories] = useState([])

  useEffect(() => {
    setShopCategories(props.categories)
  },[props.categories])

  return (
    <div className="side-bar">
      <h4>Categories</h4>
      <ul>
        {shopCategories.map((category) => {
          return (
            <li key={category}>
              {category}
            </li>
          )
        })}
      </ul>
      <h4>Prices</h4>
      <ul>
        <li>$0-$50</li>
        <li>$50.01-$150</li>
        <li>$150+</li>
      </ul>
    </div>
  );
}

export default SideBar;
