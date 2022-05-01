import './shop.css';
import Catalog from './Catalog'
import React, { useState, useEffect } from 'react';

const Shop = () => {
  const [shopDisplay, setShopDisplay] = useState([])

  useEffect(() => {
    //send HTTP request using our api
    //do something with our api to change state and thus change our component

  }, [])
  return (
    <div className="shop">
      <h1>Shop</h1>
      <Catalog />
    </div>
  );
}

export default Shop;
