import './catalog.css';
import axios from 'axios'
import { useState, useEffect } from 'react';
import ShopItem from './ShopItem.js'

const Catalog = () => {
  const [shopData, setShopData] = useState([])
  // useEffect(() => {
  //   async function fetchData() {
  //     // You can await here
  //     const response = await axios('https://fakestoreapi.com/products')

  //   }
  //   fetchData();
  // }, []); // Or [] if effect doesn't need props or state
  async function fetchData () {
    axios.get('https://fakestoreapi.com/products')
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        console.log(data)
        setShopData(data)
      })
      .catch(error => console.error(`Error: ${error}`))
  }

  useEffect(() => {
    fetchData();
  }, [])


  const setShopInfo = () => {
    return shopData.map((item) => {
      return (
        <ShopItem
          key={item.id}
          name={item.title}
          price={item.price}
          description={item.description}
          img={item.image}
          category={item.category}
          rating={item.rating}
        />
      )
    })

  }

  return (
    <div className="catalog">
      <h1>Shop</h1>
      <div className="shop-items-wrapper">
        {setShopInfo()}
      </div>
    </div>
  );
}

export default Catalog;
