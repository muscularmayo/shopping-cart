import './shop.css';
import axios from 'axios'
import { useState, useEffect } from 'react';
import SideBar from './SideBar.js'
import Catalog from './Catalog.js'
import { Routes, Route } from 'react-router-dom'
import ExpandedShopItem from './ExpandedShopItem.js'

const Shop = (props) => {
  const [shopData, setShopData] = useState([])
  const [currentFilter, setCurrentFilter] = useState('')
  // useEffect(() => {
  //   async function fetchData() {
  //     // You can await here
  //     const response = await axios('https://fakestoreapi.com/products')

  //   }
  //   fetchData();
  // }, []); // Or [] if effect doesn't need props or state

  useEffect(() => {
    async function fetchData () {
      axios.get('https://fakestoreapi.com/products')
        .then((response) => {
          return response.data;
        })
        .then((data) => {
          console.log(data)
          return data.map((item) => {
            const description = item.description.charAt(0).toUpperCase() + item.description.slice(1);

            // return (
            //   <ShopItem
            //     key={item.id}
            //     name={item.title}
            //     price={'$' + item.price.toFixed(2)}
            //     description={description}
            //     img={item.image}
            //     category={item.category}
            //     rating={item.rating}
            //   />
            // )
            return {
              id: item.id,
              name: item.title,
              price: '$' + item.price.toFixed(2),
              description: description,
              img: item.image,
              category: item.category,
              rating: item.rating,
            }
          })
        })
        .then((modifiedData) => {
          setShopData(modifiedData)
        })
        .catch(error => console.error(`Error: ${error}`))
    }

    fetchData();
  }, [])

  const changeCurrentFilter = () => {

  }

  // changed it so this function happens in my original fetchData when page renders, now I can pass the info down
  // const setShopInfo = () => {
  //   return shopData.map((item) => {
  //     const description = item.description.charAt(0).toUpperCase() + item.description.slice(1);

  //     // return (
  //     //   <ShopItem
  //     //     key={item.id}
  //     //     name={item.title}
  //     //     price={'$' + item.price.toFixed(2)}
  //     //     description={description}
  //     //     img={item.image}
  //     //     category={item.category}
  //     //     rating={item.rating}
  //     //   />
  //     // )
  //     return {
  //       id: item.id,
  //       name: item.title,
  //       price: '$' + item.price.toFixed(2),
  //       description: description,
  //       img: item.image,
  //       category: item.category,
  //       rating: item.rating,
  //     }
  //   })

    //setShopData(editedShopInfo)
  // }

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
      <div className="shop-wrapper">
        <SideBar categories={setSideBarInfo()}/>
        {/* <div className="shop-items-wrapper">
          {setShopInfo()}
        </div> */}
        <Catalog shopArray={shopData}/>
      </div>
    </div>
  );
}

export default Shop;
