import './shop.css';
import axios from 'axios'
import { useState, useEffect } from 'react';
import SideBar from './SideBar.js'
import Catalog from './Catalog.js'
import { Routes, Route } from 'react-router-dom'
import ExpandedShopItem from './ExpandedShopItem.js'
import LoadingScreen from './LoadingScreen.js'

import { useSelector, useDispatch } from 'react-redux'
import store from './store';
import { fetchShopData, setShopData } from './shopDataSlice.js'

const Shop = (props) => {
  // const [shopData, setShopData] = useState([])
  const [currentFilter, setCurrentFilter] = useState('')
  const [loading, setLoading] = useState(true)

  const dispatch = useDispatch();
  const shop = useSelector(state => state.shopData) //it looks at all of redux state and pulls out the shopData one.. YES
  const shopStatus = useSelector(state => state.shopData.status)
  const error = useSelector(state => state.shopData.error)

  console.log(shop, shopStatus, error) //initial state {shopArray, status, error, filter}

  useEffect(() => {
    if (shopStatus === 'idle') {
      dispatch(fetchShopData())
    } else if (shopStatus === 'fulfilled') {
      setShopData(shop.shopArray)
      setLoading(false)
      setCurrentFilter(shop.filter)
    }

  }, [dispatch, shop.filter, shop.shopArray, shopStatus])

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
    // let categories = shopData.map((item) => {
    let categories = shop.shopArray.map((item) => {
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
          <Catalog shopArray={shop.shopArray}/>
          {/* <Routes> */}
            {/* <Route path="/shop/:id" element={<ExpandedShopItem />} /> */}
            {/* <Route path="/shop/0" element={<ExpandedShopItem item={props.shopArray[0]} />} /> */}
            {/* {shop.shopArray.map((item, index) => {
              let path = `${index}`
              return (
                <Route path={path} element={<ExpandedShopItem item={item}/>}/>
              )
            })} */}
          {/* </Routes> */}
          </div>
      ) : (
        <LoadingScreen />
      )}
    </div>
  );
}

export default Shop;
