import './sidebar.css';
import { useState, useEffect } from 'react';

const SideBar = (props) => {
  const [shopCategories, setShopCategories] = useState([])

  useEffect(() => {
    setShopCategories(props.categories)
  },[props.categories])

  return (
    <div className="side-bar">
      <h4>Side Bar</h4>
      <ul>
        {shopCategories.map((category) => {
          return (
            <li key={category}>
              {category}
            </li>
          )
        })}
      </ul>
    </div>
  );
}

export default SideBar;
