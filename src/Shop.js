import './shop.css';
import { useState, useEffect, useCallback } from 'react';
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
  const [filterOn, setFilterOn] = useState(currentFilter.filterOn)

  // console.log(shop, shopStatus, error) //initial state {shopArray, status, error, filter}

  const changeCurrentFilter = () => {

  }
  const setSideBarInfo = useCallback(
    () => {
      let categories = shop.shopArray.map((item) => {
        return item.category;
      })
      categories = new Set(categories)
      categories = [...categories]
      return categories;
    },
    [shop.shopArray]
  )
  // const setSideBarInfo = () => {
  //   let categories = shop.shopArray.map((item) => {
  //     return item.category;
  //   })
  //   categories = new Set(categories)
  //   categories = [...categories]
  //   return categories;
  // }




  useEffect(() => {
    const priceCategories = [50, 150, Infinity] //<50, 50 < x <=150, x > 150
    const ratingCategories = [4,3,2,1] // >=4, >=3, >=2, >=1
    const shopCategories = setSideBarInfo();

    if (shopStatus === 'idle') {
      dispatch(fetchShopData())
    } else if (shopStatus === 'fulfilled') {
      if (filter.filterOn === false) {
        setShopData(shop.shopArray)
      } else if (filter.filterOn === true) {
        const priceFilters = [];
        const categoryFilters = [];
        const ratingFilters = [];

        for (const prop in filter) {
          let currentCategory = filter[prop]
          // console.log(currentCategory)
          for(let i = 0; i < currentCategory.length; i++) {
            if (prop === 'price') {
              if (currentCategory[i] === true) {
                priceFilters.push(priceCategories[i])
              }
            } else if (prop === 'category') {
              if (currentCategory[i] === true) {
                categoryFilters.push(shopCategories[i])
              }
            } else if (prop === 'rating') {
              if (currentCategory[i] === true) {
                ratingFilters.push(ratingCategories[i])
              }
            }
          }
        }
        console.log(filter, priceFilters, categoryFilters, ratingFilters)
        // const filteredItems = []
        if (priceFilters.length > 0) {
          if (categoryFilters.length === 0 && ratingFilters.length === 0) {
            const priceFilteredItems = shop.shopArray.filter((e) => {
              let cost = Number(e.price.slice(1))
              let price = priceFilters[0]

              if (price === 50) {
                return cost <= 50;
              } else if (price === 150) {
                return (cost <= 150 && cost>50);
              } else {
                return cost > 150;
              }

            })
            setShopData(priceFilteredItems)
          } else if (categoryFilters.length > 0 && ratingFilters.length === 0) {
            const priceFilteredItems = shop.shopArray.filter((e) => {
              let cost = Number(e.price.slice(1))
              let price = priceFilters[0]

              if (price === 50) {
                return cost <= 50;
              } else if (price === 150) {
                return (cost <= 150 && cost>50);
              } else {
                return cost > 150;
              }

            })
            const categoryAndPriceFilteredItems = priceFilteredItems.filter((e) => {
              if (categoryFilters.includes(e.category)) {
                return e
              }
            })
            setShopData(categoryAndPriceFilteredItems)

          } else if (categoryFilters.length === 0 && ratingFilters.length > 0) {
            const priceFilteredItems = shop.shopArray.filter((e) => {
              let cost = Number(e.price.slice(1))
              let price = priceFilters[0]

              if (price === 50) {
                return cost <= 50;
              } else if (price === 150) {
                return (cost <= 150 && cost>50);
              } else {
                return cost > 150;
              }

            })

            const ratingAndPriceFilteredItems = priceFilteredItems.filter((e) => {
              const rating = ratingFilters[0]
              if (e.rating.rate >= rating) {
                return e;
              }
            })

            setShopData(ratingAndPriceFilteredItems)
          } else if (categoryFilters.length > 0 && ratingFilters.length > 0) {
            const priceFilteredItems = shop.shopArray.filter((e) => {
              let cost = Number(e.price.slice(1))
              let price = priceFilters[0]

              if (price === 50) {
                return cost <= 50;
              } else if (price === 150) {
                return (cost <= 150 && cost>50);
              } else {
                return cost > 150;
              }

            })

            const ratingAndPriceFilteredItems = priceFilteredItems.filter((e) => {
              const rating = ratingFilters[0]
              if (e.rating.rate >= rating) {
                return e;
              }
            })

            const allFilteredItems = ratingAndPriceFilteredItems.filter((e) => {
              if (categoryFilters.includes(e.category)) {
                return e
              }
            })

            setShopData(allFilteredItems)
          }
        } else if (categoryFilters.length > 0 ) {
          if (priceFilters.length === 0 && ratingFilters.length === 0) {
            const categoryFilteredItems = shop.shopArray.filter((e) => {
              if (categoryFilters.includes(e.category)) {
                return e
              }
            })
            setShopData(categoryFilteredItems)
          } else if (priceFilters.length === 0 && ratingFilters.length > 0) {
            const categoryFilteredItems = shop.shopArray.filter((e) => {
              if (categoryFilters.includes(e.category)) {
                return e
              }
            })

            const ratingAndCategoryFilteredItems = categoryFilteredItems.filter((e) => {
              if (categoryFilters.includes(e.category)) {
                return e
              }
            })

            setShopData(ratingAndCategoryFilteredItems)
          }
        } else if (ratingFilters.length > 0) {
          const ratingFilteredItems = shop.shopArray.filter((e) => {
            const rating = ratingFilters[0]
            if (e.rating.rate >= rating) {
              return e;
            }
          })
          setShopData(ratingFilteredItems)
        }


      }
      // we need to change this to a filtered version
      setLoading(false)
      // setCurrentFilter(shop.filter)

      // const filteredItems = [];
      // const categoryFilter = shopData.filter((e) => {
      //   for(let i = 0; i < shopCategories.length; i++) {

      //   }
      // })
    }

  },[dispatch, filter, setSideBarInfo, shop.shopArray, shopStatus])

  return (
    <div>
      <h1>Shop</h1>
      {loading === false ? (
        <div className="shop-wrapper">
          <SideBar categories={setSideBarInfo()}/>
          <Catalog shopArray={shopData}/>
          </div>
      ) : (
        <LoadingScreen />
      )}
    </div>
  );
}

export default Shop;
