import './shop.css';
import { useState, useEffect } from 'react';
import SideBar from './SideBar.js'
import Catalog from './Catalog.js'

import LoadingScreen from './LoadingScreen.js'

import { useSelector, useDispatch } from 'react-redux'
import { fetchShopData } from './shopDataSlice.js'

const Shop = (props) => {
  const [shopData, setShopData] = useState([])
  const [loading, setLoading] = useState(true)

  const dispatch = useDispatch();
  const shop = useSelector(state => state.shopData) //it looks at all of redux state and pulls out the shopData one.. YES
  const shopStatus = useSelector(state => state.shopData.status)
  const error = useSelector(state => state.shopData.error)
  const filter = useSelector(state => state.shopData.filter)

  const [currentFilter, setCurrentFilter] = useState(filter)
  const [filterOn, setFilterOn] = useState(filter.filterOn)

  console.log(shop, shopStatus, error) //initial state {shopArray, status, error, filter}

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

  const shopCategories = setSideBarInfo();
  const priceCategories = [50, 150, Infinity] //<50, 50 < x <=150, x > 150
  const ratingCategories = [4,3,2,1] // >=4, >=3, >=2, >=1


  useEffect(() => {
    if (shopStatus === 'idle') {
      dispatch(fetchShopData())
    } else if (shopStatus === 'fulfilled') {
      if (filter.filterOn === false) {
        setShopData(shop.shopArray)
      } else if (filterOn === true) {
        const priceFilters = [];
        const categoryFilters = [];
        const ratingFilters = [];

        for (const prop in filter) {
          let currentCategory = filter[prop]
          for(let i = 0; i < currentCategory.length; i++) {
            if (currentCategory === 'price') {
              if (prop[i] === true) {
                priceFilters.push(priceCategories[i])
              }
            } else if (currentCategory === 'category') {
              if (currentCategory[i] === true) {
                categoryFilters.push(shopCategories[i])
              }
            } else if (currentCategory === 'rating') {
              if (currentCategory[i] === true) {
                ratingFilters.push(ratingCategories[i])
              }
            }
          }
        }
        // const filteredItems = []
        const priceFilteredItems = shop.shopArray.filter((e) => {
          let cost = Number(e.price.slice(1))
          for (let i = 0; i < priceFilters.length; i++) {
            if (priceFilters[i] === 50) {
              return cost <= 50;
            } else if (priceFilters[i] === 150) {
              return (cost <= 150 && cost>50);
            } else {
              return cost > 150;
            }
          }
        })

        const categoryFilteredItems = priceFilteredItems.filter((e) => {
          for (let i = 0; i < categoryFilters.length; i++) {
            return e.category === categoryFilters[i]
          }
        })

        const filteredItems = categoryFilteredItems.filter((e) => {
          for (let i = 0; i < ratingFilters.length; i++) {
            return e.rating.rate > ratingFilters[i]
          }
        })
        console.log(filteredItems)
        setShopData(filteredItems)

      }
      // we need to change this to a filtered version
      setLoading(false)
      setCurrentFilter(shop.filter)

      // const filteredItems = [];
      // const categoryFilter = shopData.filter((e) => {
      //   for(let i = 0; i < shopCategories.length; i++) {

      //   }
      // })
    }

  }, [dispatch, shop.filter, shop.shopArray, shopStatus])

  return (
    <div>
      <h1>Shop</h1>
      {loading === false ? (
        <div className="shop-wrapper">
          <SideBar categories={shopCategories}/>
          <Catalog shopArray={shopData}/>
          </div>
      ) : (
        <LoadingScreen />
      )}
    </div>
  );
}

export default Shop;
