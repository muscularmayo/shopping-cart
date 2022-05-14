import './shop.css';
import { useState, useEffect } from 'react';
import SideBar from './SideBar.js'
import Catalog from './Catalog.js'

import LoadingScreen from './LoadingScreen.js'

import { useSelector, useDispatch } from 'react-redux'
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
      // setShopData(shop.shopArray) dispatch fetch shop data did everything!!!
      setLoading(false)
      setCurrentFilter(shop.filter)
    }

  }, [dispatch, shop.filter, shop.shopArray, shopStatus])

  const changeCurrentFilter = () => {

  }



  const setSideBarInfo = () => {
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
          <Catalog shopArray={shop.shopArray}/>
          </div>
      ) : (
        <LoadingScreen />
      )}
    </div>
  );
}

export default Shop;
