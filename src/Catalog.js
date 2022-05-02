import './catalog.css';
import axios from 'axios'
import { useState, useEffect } from 'react';
import ShopItem from './ShopItem.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SideBar from './SideBar.js'

const Catalog = () => {
  const [shopData, setShopData] = useState([])
  const [currentFilter, setCurrentFilter] = useState('')
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

  const changeCurrentFilter = () => {

  }


  const setShopInfo = () => {
    return shopData.map((item) => {
      const description = item.description.charAt(0).toUpperCase() + item.description.slice(1);

      return (
        <ShopItem
          key={item.id}
          name={item.title}
          price={'$' + item.price.toFixed(2)}
          description={description}
          img={item.image}
          category={item.category}
          rating={item.rating}
        />
      )
    })
  }

  const setSideBarInfo = () => {
    let categories = shopData.map((item) => {
      return item.category;
    })
    categories = new Set(categories)
    categories = [...categories]
    return categories;
  }



  return (
    <div>
      <h1>Shop</h1>
      <div className="catalog">
        <SideBar categories={setSideBarInfo()}/>
        <div className="shop-items-wrapper">
          {setShopInfo()}
        </div>
      </div>
    </div>
  );
}

export default Catalog;
