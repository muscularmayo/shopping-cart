import './shop.css';
import axios from 'axios'
import { useState, useEffect } from 'react';
import SideBar from './SideBar.js'
import Catalog from './Catalog.js'
import { Routes, Route } from 'react-router-dom'
import ExpandedShopItem from './ExpandedShopItem.js'
import LoadingScreen from './LoadingScreen.js'

const Shop = (props) => {
  const [shopData, setShopData] = useState([])
  const [currentFilter, setCurrentFilter] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData () {
      const response = await axios.get('https://fakestoreapi.com/products');
      const data = response.data;

      const shopArray = data.map((item) => {
        const description = item.description.charAt(0).toUpperCase() + item.description.slice(1);

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
      setShopData(shopArray)
      setLoading(false)
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
      {loading === false ? (
        <div className="shop-wrapper">
          <SideBar categories={setSideBarInfo()}/>
          {/* <div className="shop-items-wrapper">
            {setShopInfo()}
          </div> */}
          <Catalog shopArray={shopData}/>
          <Routes>
            {/* <Route path="/shop/:id" element={<ExpandedShopItem />} /> */}
            {/* <Route path="/shop/0" element={<ExpandedShopItem item={props.shopArray[0]} />} /> */}
            {shopData.map((item, index) => {
              let path = `${index}`
              return (
                <Route path={path} element={<ExpandedShopItem item={item}/>}/>
              )
            })}
          </Routes>
          </div>
      ) : (
        <LoadingScreen />
      )}
    </div>
  );
}

export default Shop;
