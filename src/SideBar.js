import './sidebar.css';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { setFilterData } from './shopDataSlice.js'

const SideBar = (props) => {
  const [shopCategories, setShopCategories] = useState([])
  const [categoriesFilter, setCategoriesFilter] = useState(
    new Array(props.categories.length).fill(false)
  )
  const [priceFilter, setPriceFilter] = useState(
    [false, false, false]
  )
  //0-50, 50-150, 150+
  const [ratingsFilter, setRatingsFilter] = useState(
    [false, false, false, false]
  )
  //4star+, 3star+, 2+, 1+

  const dispatch = useDispatch();

  useEffect(() => {
    setShopCategories(props.categories)
  },[props.categories])

  const handleCategoriesChange = (index) => {
    const filteredCategories = [...categoriesFilter]
    filteredCategories[index] = !filteredCategories[index]
    setCategoriesFilter(filteredCategories)
    //action payload needs to be an object with type and index
    /*{
      type: 'category',
      index: index,
    }
    */
    dispatch(setFilterData({type: 'category', index}))

  }

  const handlePriceFilterChange = (index) => {
    const filteredPrices = [...priceFilter]
    filteredPrices[index] = !filteredPrices[index]
    setPriceFilter(filteredPrices)
    dispatch(setFilterData({type: 'price', index}))
  }

  const handleRatingsFilterChange = (index) => {
    const filteredRatings = [...ratingsFilter]
    filteredRatings[index] = !filteredRatings[index]
    setRatingsFilter(filteredRatings)
    dispatch(setFilterData({type: 'rating', index}))

  }

  return (
    <div className="side-bar">
      <h4>Categories</h4>
        {shopCategories.map((category, index) => {
          return (
            <div key={category}>
              <input
                type="checkbox"
                key={category + 'input'}
                value={category}
                name={category}
                checked={categoriesFilter[index]}
                onChange={() => handleCategoriesChange(index)}
              />
              <label key={category + 'label'} htmlFor={category}>
                {category}
              </label>
            </div>
          )
        })}

      <h4>Prices</h4>
        <div>
          <input type="checkbox" value="0-50" name="0-50" checked={priceFilter[0]} onChange={() => handlePriceFilterChange(0)}/>
          <label htmlFor="0-50">$0-$50</label>
        </div>
        <div>
          <input type="checkbox" value="50.01-150" name="50.01-150" checked={priceFilter[1]} onChange={() => handlePriceFilterChange(1)}/>
          <label htmlFor="50.01-150">$50.01-$150</label>
        </div>
        <div>
          <input type="checkbox" value="150+" name="150+" checked={priceFilter[2]} onChange={() => handlePriceFilterChange(2)}/>
          <label htmlFor="150+">$150+</label>
        </div>

      <h4>Ratings</h4>
        <div>
          <input type="checkbox" value="4 stars" name="4 stars" checked={ratingsFilter[0]} onChange={() => handleRatingsFilterChange(0)}/>
          <label htmlFor="4 stars">4 stars and up</label>
        </div>
        <div>
          <input type="checkbox" value="3 stars" name="3 stars" checked={ratingsFilter[1]} onChange={() => handleRatingsFilterChange(1)}/>
          <label htmlFor="3 stars">3 stars and up</label>
        </div>
        <div>
          <input type="checkbox" value="2 stars" name="2 stars" checked={ratingsFilter[2]} onChange={() => handleRatingsFilterChange(2)}/>
          <label htmlFor="2 stars">2 stars and up</label>
        </div>
        <div>
          <input type="checkbox" value="1 stars" name="1 stars" checked={ratingsFilter[3]} onChange={() => handleRatingsFilterChange(3)}/>
          <label htmlFor="1 stars">1 star and up</label>
        </div>
    </div>
  );
}

export default SideBar;
