import './sidebar.css';
import { useState, useEffect } from 'react';

const SideBar = (props) => {
  const [shopCategories, setShopCategories] = useState([])
  const [categoriesFilter, setCategoriesFilter] = useState(
    new Array(props.categories.length).fill(false)
  )

  useEffect(() => {
    setShopCategories(props.categories)
  },[props.categories])

  const handleCategoriesChange = (index) => {
    const filteredCategories = [...categoriesFilter]
    filteredCategories[index] = !filteredCategories[index]
    setCategoriesFilter(filteredCategories)
  }

  return (
    <div className="side-bar">
      <h4>Categories</h4>
      <ul>
        {shopCategories.map((category, index) => {
          return (
            <div>
              <input
                type="checkbox"
                key={category}
                value={category}
                id={index}
                name={category}
                checked={categoriesFilter[index]}
                onChange={() => handleCategoriesChange(index)}
              />
              <label htmlFor={category}>
                {category}
              </label>
            </div>
          )
        })}
      </ul>
      <h4>Prices</h4>
      <ul>
        <li>$0-$50</li>
        <li>$50.01-$150</li>
        <li>$150+</li>
      </ul>
      <h4>Ratings</h4>
      <ul>
        <li>4 stars and up</li>
        <li>3 stars and up</li>
        <li>2 stars and up</li>
        <li>1 stars and up</li>
      </ul>
    </div>
  );
}

export default SideBar;
